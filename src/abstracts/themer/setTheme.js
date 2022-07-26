import { adjustHue, readableColor, setLightness, setSaturation } from 'polished'
import { correctContrast } from '../colorFunctions'
import { css } from '@emotion/react'
import {
	lightnessAlt,
	lightnessDark,
	lightnessDarkAlt,
	rotateDegree,
	rotateDegreeAlt,
	saturationAlt,
	saturationDark,
	saturationDarkAlt,
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
			setLightness(lightnessDark, primary)
		),
	})
	let secondaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: adjustHue(rotateDegree, primary),
	})
	let tertiaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: adjustHue(rotateDegree * 2, primary),
	})

	let whiteDark = white
	let blackDark = black

	let primaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: setSaturation(
			saturationAlt,
			setLightness(lightnessAlt, adjustHue(rotateDegreeAlt, primary))
		),
	})
	let secondaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: adjustHue(rotateDegree, primaryAlt),
	})
	let tertiaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: adjustHue(rotateDegree * 2, primaryAlt),
	})

	let primaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setSaturation(
			saturationDarkAlt,
			setLightness(lightnessDarkAlt, primaryAlt)
		),
	})

	let secondaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: adjustHue(rotateDegree, primaryAltDark),
	})

	let tertiaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: adjustHue(rotateDegree * 2, primaryAltDark),
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
