import {
	adjustHue,
	darken,
	readableColor,
	setLightness,
	setSaturation,
} from 'polished'
import { correctContrast } from '../colorFunctions'
import { css } from '@emotion/react'

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

export const lightness = 0.5
export const bgLightness = 0.9
export const saturation = 0.88
export const darkLightness = 0.7
export const bgDarkLightness = 0.3
export const rotateDegree = 120
export const rotateDegreeAlt = 45

export function setTheme(
	primary,
	secondary,
	tertiary,
	white,
	black,
	background,
	setAltTheme = false
) {
	let backgroundDark = setLightness(bgDarkLightness, background)
	let primaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setLightness(darkLightness, primary),
	})
	let secondaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setLightness(darkLightness, secondary),
	})
	let tertiaryDark = correctContrast({
		mainColor: backgroundDark,
		colorToCorrect: setLightness(darkLightness, tertiary),
	})
	let whiteDark = white
	let blackDark = black

	//let primaryAlt = generateSecondary(primary)
	//let secondaryAlt = generateSecondary(primary, invert(primaryAlt))
	//let tertiaryAlt = generateSecondary(primary, complement(secondaryAlt))
	//let bgAlt = complement(background)
	let primaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: setLightness(
			lightness,
			setSaturation(saturation, adjustHue(rotateDegreeAlt, primary))
		),
	})
	let secondaryAlt = correctContrast({
		mainColor: primary,
		colorToCorrect: correctContrast({
			mainColor: primaryAlt,
			colorToCorrect: setLightness(
				lightness,
				setSaturation(saturation, adjustHue(rotateDegree, primary))
			),
		}),
	})
	let tertiaryAlt = correctContrast({
		mainColor: primaryAlt,
		colorToCorrect: correctContrast({
			mainColor: secondaryAlt,
			colorToCorrect: setLightness(
				lightness,
				setSaturation(saturation, adjustHue(rotateDegree * 2, primary))
			),
		}),
	})
	let bgAlt = correctContrast({
		mainColor: primaryAlt,
		colorToCorrect: background,
	})
	let backgroundAltDark = darken(0.2, bgAlt)
	let primaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(darkLightness, primaryAlt),
	})

	let secondaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(darkLightness, secondaryAlt),
	})

	let tertiaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(darkLightness, tertiaryAlt),
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
