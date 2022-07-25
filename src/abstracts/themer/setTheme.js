import { adjustHue, readableColor, setLightness } from 'polished'
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

export const saturation = 0.99

export const lightness = 0.66
export const bgLightness = 0.9

export const darkLightness = 0.277
export const bgDarkLightness = 0.6

export const rotateDegree = 120
export const rotateDegreeAlt = 90

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

	let rawPrimaryAlt = adjustHue(rotateDegreeAlt, primary)
	let rawSecondaryAlt = adjustHue(rotateDegree, rawPrimaryAlt)
	let rawTertiaryAlt = adjustHue(rotateDegree * 2, rawPrimaryAlt)

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

	let bgAlt = correctContrast({
		mainColor: primaryAlt,
		colorToCorrect: adjustHue(rotateDegreeAlt, background),
	})

	let backgroundAltDark = adjustHue(rotateDegreeAlt, backgroundDark)

	let primaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(darkLightness, rawPrimaryAlt),
	})

	let secondaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(darkLightness, rawSecondaryAlt),
	})

	let tertiaryAltDark = correctContrast({
		mainColor: primaryDark,
		colorToCorrect: setLightness(darkLightness, rawTertiaryAlt),
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
