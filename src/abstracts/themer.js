import {
	adjustHue,
	complement,
	darken,
	invert,
	lighten,
	meetsContrastGuidelines,
	readableColor,
	saturate,
	toColorString,
} from 'polished'
import { css } from '@emotion/react'
import { colorBlack, colorWhite } from './constants'

export function colorTemp(role, color) {
	return `--${role}: ${color};
      --${role}Text: ${readableColor(color)};`
}

export function setTheme(
	primary,
	secondary,
	tertiary,
	white,
	black,
	background
) {
	return css`
		${colorTemp('primary', primary)};
		${colorTemp('secondary', secondary)};
		${colorTemp('tertiary', tertiary)};
		${colorTemp('white', white)};
		${colorTemp('black', black)};
		${colorTemp('background', background)};
	`
}

export function canDarken({ mainColor, colorToCorrect, level = 'AA' }) {
	let colorIm = colorToCorrect
	let i = 1
	for (i; !meetsContrastGuidelines(mainColor, colorIm)[level]; i++) {
		colorIm = darken(i / 100, colorIm)
		if (i >= 100) {
			console.log('Cannot correct color with lighten')
			colorIm = colorToCorrect
			break
		}
	}

	return {
		canDarken: meetsContrastGuidelines(mainColor, colorIm)[level],
		correctedColor: colorIm,
		steps: i,
	}
}

export function canLighten({ mainColor, colorToCorrect, level = 'AA' }) {
	let colorIm = colorToCorrect
	let i = 1
	for (i; !meetsContrastGuidelines(mainColor, colorIm)[level]; i++) {
		colorIm = lighten(i / 100, colorIm)
		if (i >= 100) {
			console.log('Cannot correct color with lighten')
			colorIm = colorToCorrect
			break
		}
	}
	return {
		canLighten: meetsContrastGuidelines(mainColor, colorIm)[level],
		correctedColor: colorIm,
		steps: i,
	}
}

export function correctContrast({
	mainColor,
	colorToCorrect,
	level = 'AA',
	type = 'auto',
}) {
	// forces colorTOCorrect, a hex, to meet WCAG contrast level AA.
	// If contrast is met, colorToCorrect is returned unaltered
	console.log('correct contrast')
	console.log(
		`Meets ${level} of contrast: ${
			meetsContrastGuidelines(mainColor, colorToCorrect)[level]
		}`
	)
	let colorIm = colorToCorrect
	console.log(`color to correct initially: ${colorIm}`)
	console.log(
		`colorIm test: ${meetsContrastGuidelines(mainColor, colorIm)[level]}`
	)
	console.log(`Attempting ${type} correction`)
	if (meetsContrastGuidelines(mainColor, colorToCorrect)[level]) {
		return colorToCorrect
	} else if (type === 'hue') {
		for (
			let i = 1;
			!meetsContrastGuidelines(mainColor, colorIm)[level];
			i++
		) {
			colorIm = adjustHue(i, colorIm)
			if (i >= 360) {
				console.log('Cannot correct color with hue')
				colorIm = colorToCorrect
				break
			}
		}
		console.log(
			`Original color: ${colorToCorrect}, returned color: ${colorIm}, meets contrast: ${
				meetsContrastGuidelines(mainColor, colorIm)[level]
			}`
		)
		return colorIm
	} else if (type === 'saturation') {
		for (
			let i = 1;
			!meetsContrastGuidelines(mainColor, colorIm)[level];
			i++
		) {
			colorIm = saturate(i / 100, colorIm)
			if (i >= 100) {
				console.log('Cannot correct color with saturate')
				colorIm = colorToCorrect
				break
			}
		}
		console.log(
			`Original color: ${colorToCorrect}, returned color: ${colorIm}, meets contrast: ${
				meetsContrastGuidelines(mainColor, colorIm)[level]
			}`
		)
		return colorIm
	} else if (type === 'auto') {
		let canDarkenObj = canDarken({
			mainColor: mainColor,
			colorToCorrect: colorToCorrect,
			level: level,
		})
		let canLightenObj = canLighten({
			mainColor: mainColor,
			colorToCorrect: colorToCorrect,
			level: level,
		})

		if (canDarkenObj.canDarken && canLightenObj.canLighten) {
			if (canLightenObj.steps > canDarkenObj.steps) {
				colorIm = canDarkenObj.correctedColor
			} else if (canLightenObj.steps < canDarkenObj.steps) {
				colorIm = canLightenObj.correctedColor
			} else {
				colorIm = canDarkenObj.correctedColor
			}
		} else if (canDarkenObj.canDarken) {
			colorIm = canDarkenObj.correctedColor
		} else if (canLightenObj.canLighten) {
			colorIm = canLightenObj.correctedColor
		} else return colorIm
	}
	return colorIm
}

function generateSecondary(primary, secondary = null) {
	console.log(`logging secondary ${secondary}`)
	console.log(`logging secondary ${secondary ? 'true' : 'false'}`)
	let secondaryIm = secondary ? secondary : complement(primary)
	console.log(`logging secondaryIm: ${secondaryIm} `)
	let meetsContrast = meetsContrastGuidelines(primary, secondaryIm)['AA']
	console.log(`logging meetsContrast: ${meetsContrast} `)
	if (meetsContrast === true) {
		return secondaryIm
	} else if (meetsContrast === false) {
		return correctContrast({
			mainColor: primary,
			colorToCorrect: secondaryIm,
			type: 'AA',
		})
	} else return secondaryIm
}

export class Theme {
	constructor({
		primary,
		secondary = null,
		tertiary = null,
		white = null,
		black = null,
		background = null,
	}) {
		this.primary = primary
		this.secondary = generateSecondary(primary, secondary)
		//this.secondary = generateSecondary(primary, secondary)

		this.tertiary = tertiary ? tertiary : invert(this.secondary)
		// White, black and background color generation
		this.white = white ? white : colorWhite
		this.black = black ? black : colorBlack
		this.bg = background ? background : colorWhite

		this.theme = setTheme(
			this.primary,
			this.secondary,
			this.tertiary,
			this.white,
			this.black,
			this.bg
		)
		this.themeAlt = setTheme(
			complement(this.primary),
			invert(this.secondary),
			complement(this.tertiary),
			this.white,
			this.black,
			invert(this.bg)
		)
	}
}

export function themesUtilityClasses(themes) {
	return Object.keys(themes).map(
		(value, index) =>
			css`
				.bg-${value} {
					${themes[value].themeAlt};
					background-color: ${themes[value].primary};
					color: var(--primaryText);
				}
			`
	)
}
