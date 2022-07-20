import {
	adjustHue,
	complement,
	invert,
	readableColor,
	toColorString,
} from 'polished'
import { css } from '@emotion/react'
import { colorBlack, colorWhite } from './constants'

export function colorTemp(role, color) {
	return `--${role}: ${color};
      --${role}Text: ${readableColor(color)};`
}

export function themer(primary, secondary, tertiary, white, black, background) {
	return css`
		${colorTemp('primary', primary)};
		${colorTemp('secondary', secondary)};
		${colorTemp('tertiary', tertiary)};
		${colorTemp('white', white)};
		${colorTemp('black', black)};
		${colorTemp('background', background)};
	`
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
		this.secondary = secondary ? secondary : complement(this.primary)
		this.tertiary = tertiary ? tertiary : invert(this.secondary)

		// White, black and background color generation
		this.white = white ? white : colorWhite
		this.black = black ? black : colorBlack
		this.bg = background ? background : colorWhite

		this.theme = themer(
			this.primary,
			this.secondary,
			this.tertiary,
			this.white,
			this.black,
			this.bg
		)
		this.themeAlt = themer(
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
