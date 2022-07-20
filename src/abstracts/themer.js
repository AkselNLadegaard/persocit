import { complement, invert, readableColor, toColorString } from 'polished'
import { css } from '@emotion/react'
import { colorBlack, colorWhite } from './constants'

export function colorTemp(role, color) {
	return `--${role}: ${color};
      --${role}Text: ${readableColor(color)};`
}

export function themer(primary, secondary, tertiary, white, black, background) {
	// Secondary and tertiary color generation
	let sec = secondary ? secondary : complement(primary)
	let ter = tertiary ? tertiary : invert(sec)

	// White, black and background color generation
	let whi = white ? white : colorWhite
	let bla = black ? black : colorBlack
	let bg = background ? background : colorWhite
	return css`
		${colorTemp('primary', primary)};
		${colorTemp('secondary', sec)};
		${colorTemp('tertiary', ter)};
		${colorTemp('white', whi)};
		${colorTemp('black', bla)};
		${colorTemp('background', bg)};
	`
}
