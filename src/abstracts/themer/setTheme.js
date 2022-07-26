import { adjustHue, readableColor, setLightness, setSaturation } from 'polished'
import { correctContrast } from '../colorFunctions'
import { css } from '@emotion/react'
import {
	lightness,
	lightnessDark,
	lightnessDarkAlt,
	lightnessDarkPrm,
	rotateDegree,
	rotateDegreeAlt,
	saturationDark,
} from '../constants'

function colorTemp(role, color) {
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
	backgroundDark,
	setAltTheme = false
) {
	let primaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setSaturation(
			saturationDark,
			setLightness(lightnessDarkPrm, primary)
		),
	})
	let secondaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setSaturation(
			saturationDark,
			setLightness(lightnessDark, secondary)
		),
	})
	let tertiaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setSaturation(
			saturationDark,
			setLightness(lightnessDark, tertiary)
		),
	})

	let whiteDark = white
	let blackDark = black

	let rawPrimaryAlt = setLightness(
		lightness,
		adjustHue(rotateDegreeAlt, primary)
	)
	let rawSecondaryAlt = setLightness(
		lightness,
		adjustHue(rotateDegree, rawPrimaryAlt)
	)
	let rawTertiaryAlt = setLightness(
		lightness,
		adjustHue(rotateDegree * 2, rawPrimaryAlt)
	)

	let primaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: rawPrimaryAlt,
	})
	let secondaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: rawSecondaryAlt,
	})
	let tertiaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: rawTertiaryAlt,
	})

	let primaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(lightnessDarkPrm, rawPrimaryAlt),
	})

	let secondaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(lightnessDarkAlt, rawSecondaryAlt),
	})

	let tertiaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(lightnessDarkAlt, rawTertiaryAlt),
	})

	let whiteAltDark = white
	let blackAltDark = black

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
			primary
		)
		let cssObjectDark = createThemeCssObject(
			primaryAltDark,
			secondaryAltDark,
			tertiaryAltDark,
			whiteAltDark,
			blackAltDark,
			primaryDark
		)

		return css`
			${cssObject};
			@media (prefers-color-scheme: dark) {
				${cssObjectDark}
			}
		`
	}
}
