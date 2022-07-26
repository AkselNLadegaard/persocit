import {
	adjustHue,
	darken,
	hslToColorString,
	saturate,
	setLightness,
	setSaturation,
} from 'polished'
import { css } from '@emotion/react'
import {
	colorBackgroundDark,
	colorBackgroundLight,
	colorBlack,
	colorWhite,
	lightness,
	lightnessPrm,
	rotateDegree,
	saturation,
} from './constants'
import { correctContrast } from './colorFunctions'
import { setTheme } from './themer/setTheme'

export class Theme {
	constructor({ primaryHue, background = null, backgroundDark = null }) {
		let primary = hslToColorString({
			hue: primaryHue,
			saturation: saturation,
			lightness: lightnessPrm,
		})

		this.backgroundLight = background ? background : colorBackgroundLight

		this.backgroundDark = backgroundDark
			? backgroundDark
			: background
			? darken(0.08, saturate(0.1, background))
			: colorBackgroundDark

		this.primary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: primary,
		})
		//this.secondary = generateSecondary(primary, secondary)
		this.secondary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: setSaturation(
				saturation,
				setLightness(lightness, adjustHue(rotateDegree, primary))
			),
		})

		this.tertiary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: setSaturation(
				saturation,
				setLightness(
					lightness,
					adjustHue(rotateDegree * 2, this.primary)
				)
			),
		})
		// White, black and background color generation

		this.theme = css`
			${setTheme(
				this.primary,
				this.secondary,
				this.tertiary,
				colorWhite,
				colorBlack,
				this.backgroundLight,
				this.backgroundDark,
				false
			)};
		`
		this.themeAlt = css`
			${setTheme(
				this.primary,
				this.secondary,
				this.tertiary,
				colorWhite,
				colorBlack,
				this.backgroundLight,
				this.backgroundDark,
				true
			)}
		`
	}
}
