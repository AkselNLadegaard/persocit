import { complement, invert, readableColor, toColorString } from 'polished'
import { css } from '@emotion/react'

export function colorTemp(role, color) {
	return `--${role}: ${color};
      --${role}Text: ${readableColor(color)};`
}

export function themer(primary, secondary, tertiary) {
	let sec = secondary ? secondary : complement(primary)
	let ter = tertiary ? tertiary : invert(sec)
	return css`
		${colorTemp('primary', primary)};
		${colorTemp('secondary', sec)};
		${colorTemp('tertiary', ter)};
	`
}
