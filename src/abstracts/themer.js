import { adjustHue, hslToColorString, setLightness } from 'polished'
import { css } from '@emotion/react'
import {
	colorBackgroundDark,
	colorBackgroundLight,
	colorBlack,
	colorWhite,
} from './constants'
import { correctContrast } from './colorFunctions'
import {
	bgDarkLightness,
	bgLightness,
	lightness,
	rotateDegree,
	saturation,
	setTheme,
} from './themer/setTheme'

export class Theme {
	constructor({ primaryHue, background = null, backgroundDark = null }) {
		let primary = hslToColorString({
			hue: primaryHue,
			saturation: saturation,
			lightness: lightness,
		})

		console.log(`primary from hue is ${primary}`)

		this.backgroundLight = background
			? setLightness(bgLightness, background)
			: colorBackgroundLight

		this.backgroundDark = backgroundDark
			? setLightness(bgDarkLightness, backgroundDark)
			: colorBackgroundDark

		this.primary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: primary,
		})
		//this.secondary = generateSecondary(primary, secondary)
		this.secondary = correctContrast({
			mainColor: this.backgroundLight,
			colorToCorrect: adjustHue(rotateDegree, primary),
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
