import {
	complement,
	darken,
	invert,
	readableColor,
	setLightness,
} from 'polished'
import { css } from '@emotion/react'
import { colorBlack, colorWhite } from './constants'
import { correctContrast, generateSecondary } from './colorFunctions'

export function colorTemp(role, color) {
	return `--${role}: ${color};
      --${role}Text: ${readableColor(color)};`
}

function createThemeCssObject(
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

export function setTheme(
	primary,
	secondary,
	tertiary,
	white,
	black,
	background,
	setAltTheme = false
) {
	let backgroundDark = setLightness(0.6, background)
	let primaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setLightness(0.2, primary),
	})
	let secondaryDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(0.2, secondary),
	})
	let tertiaryDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(0.2, tertiary),
	})
	let whiteDark = white
	let blackDark = black

	let primaryAlt = generateSecondary(primary)
	let secondaryAlt = generateSecondary(primary, invert(primaryAlt))
	let tertiaryAlt = generateSecondary(primary, complement(secondaryAlt))
	let bgAlt = complement(background)

	let primaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: darken(0.2, primaryAlt),
	})

	let secondaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: darken(0.2, secondaryAlt),
	})

	let tertiaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: darken(0.2, tertiaryAlt),
	})

	let whiteAltDark = white
	let blackAltDark = black
	let backgroundAltDark = darken(0.2, bgAlt)
	if (setAltTheme === false) {
		let cssObject = createThemeCssObject(
			primary,
			secondary,
			tertiary,
			white,
			black,
			background
		)

		let cssObjectDark = createThemeCssObject(
			primaryDark,
			secondaryDark,
			tertiaryDark,
			whiteDark,
			blackDark,
			backgroundDark
		)
		return css`
			${cssObject};
			@media (prefers-color-scheme: dark) {
				${cssObjectDark}
			}
		`
	} else if (setAltTheme === true) {
		let cssObject = createThemeCssObject(
			primaryAlt,
			secondaryAlt,
			tertiaryAlt,
			white,
			black,
			bgAlt
		)
		let cssObjectDark = createThemeCssObject(
			primaryAltDark,
			secondaryAltDark,
			tertiaryAltDark,
			whiteAltDark,
			blackAltDark,
			backgroundAltDark
		)

		return css`
			${cssObject};
			@media (prefers-color-scheme: dark) {
				${cssObjectDark}
			}
		`
	}
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
		this.bg = background ? background : colorWhite
		this.primary = correctContrast({
			mainColor: this.bg,
			colorToCorrect: primary,
		})
		this.secondary = generateSecondary(primary, secondary)
		//this.secondary = generateSecondary(primary, secondary)

		this.tertiary = tertiary
			? correctContrast({
					mainColor: this.bg,
					colorToCorrect: tertiary,
			  })
			: correctContrast({
					mainColor: this.bg,
					colorToCorrect: invert(this.secondary),
			  })
		// White, black and background color generation
		this.white = white ? white : colorWhite
		this.black = black ? black : colorBlack

		this.theme = css`
			${setTheme(
				this.primary,
				this.secondary,
				this.tertiary,
				this.white,
				this.black,
				this.bg,
				false
			)};
		`
		this.themeAlt = css`
			${setTheme(
				this.primary,
				this.secondary,
				this.tertiary,
				this.white,
				this.black,
				this.bg,
				true
			)}
		`
	}
}

export function themesUtilityClasses(themes) {
	return Object.keys(themes).map(
		(value, index) =>
			css`
				.bg-${value} {
					${themes[value].theme};
					background: var(--primary);
					color: var(--primaryText);

					> .bg-inner {
						${themes[value].themeAlt};
					}
				}
			`
	)
}
