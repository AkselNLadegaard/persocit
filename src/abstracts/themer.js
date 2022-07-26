import { adjustHue, darken, hslToColorString } from 'polished'
import { css } from '@emotion/react'
import {
	colorBackgroundLight,
	colorBlack,
	colorWhite,
	lightness,
	rotateDegree,
	saturation,
} from './constants'
import { correctContrast } from './colorFunctions'
import { setTheme } from './themer/setTheme'

export class Theme {
	constructor({ primaryHue, background = null }) {
		let primary = hslToColorString({
			hue: primaryHue,
			saturation: saturation,
			lightness: lightness,
		})

		this.backgroundLight = background ? background : colorBackgroundLight

		this.backgroundDark = darken(0.1, this.backgroundLight)

		this.primary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: primary,
		})
		//this.secondary = generateSecondary(primary, secondary)
		this.secondary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: adjustHue(rotateDegree, this.primary),
		})

		this.tertiary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: adjustHue(rotateDegree * 2, this.primary),
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
