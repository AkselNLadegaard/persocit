import { css } from '@emotion/react'
import { themer } from './themer'
import { darken, lighten } from 'polished'

const siteWidthUntiles = 70
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

// Base color constants
export const colorPrimary = '#264653'
export const colorSecondary = '#f4a261'
export const colorTertiary = '#B22222'
export const colorBlack = '#2b272b'
export const colorWhite = '#ffffff'

// Theme generation
export const themes = {
	prm: [colorPrimary, colorSecondary, colorTertiary],
	dark: [
		darken(0.2, colorPrimary),
		darken(0.2, colorSecondary),
		darken(0.2, colorTertiary),
		colorBlack,
		colorWhite,
		lighten(0.3, colorBlack),
	],
	prmAlt: [colorPrimary, colorTertiary, colorSecondary],
	sec: [colorSecondary, colorPrimary, colorTertiary],
	secAlt: [colorSecondary, colorTertiary, colorPrimary],
	ter: [colorTertiary, colorPrimary, colorSecondary],
	terAlt: [colorTertiary, colorSecondary, colorPrimary],
}

export const initialCustomProperties = css`
	// inserted on :root, as global styles.
	color-scheme: light dark;

	--selectionColor: antiqueWhite;

	--gap: 24px;

	--siteWidth: 70em;
	--maxContentWidth: 60ch;

	// breakpoints
	--phone: ${breakpoints[0]};
	--tablet: ${breakpoints[1]};
	--desktop: ${`${siteWidthUntiles}em`};

	--opaque: 0.8;
`
export const darkThemeStyles = css`
	${themer(...themes.dark)};
`
