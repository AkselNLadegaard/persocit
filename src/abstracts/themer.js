import { adjustHue, setLightness } from 'polished'
import { css } from '@emotion/react'
import { colorBlack, colorWhite } from './constants'
import { correctContrast } from './colorFunctions'
import { bgLightness, rotateDegree, setTheme } from './themer/setTheme'

export class Theme {
	constructor({
		primary,
		secondary = null,
		tertiary = null,
		white = null,
		black = null,
		background = null,
	}) {
		this.bg = background
			? setLightness(bgLightness, background)
			: colorWhite
		this.primary = correctContrast({
			mainColor: this.bg,
			colorToCorrect: primary,
		})
		//this.secondary = generateSecondary(primary, secondary)
		this.secondary = correctContrast({
			mainColor: this.bg,
			colorToCorrect: secondary
				? secondary
				: adjustHue(rotateDegree, this.primary),
		})
		this.tertiary = correctContrast({
			mainColor: this.bg,
			colorToCorrect: tertiary
				? tertiary
				: adjustHue(rotateDegree * 2, this.primary),
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
