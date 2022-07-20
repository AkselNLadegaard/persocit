import { css } from '@emotion/react'
import { Theme, themer } from './themer'
import { darken, lighten } from 'polished'

const siteWidthUntiles = 60
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

// Base color constants
export const colorPrimary = '#AF1B3F'
export const colorSecondary = '#83E8BA'
export const colorTertiary = '#4381C1'
export const colorBlack = '#2b272b'
export const colorWhite = '#ffffff'

// Theme generation
const themeDefault = new Theme({
	primary: colorPrimary,
	secondary: colorSecondary,
	tertiary: colorTertiary,
})

const themeDark = new Theme({
	primary: darken(0.1, colorPrimary),
	secondary: darken(0.1, colorSecondary),
	tertiary: darken(0.1, colorTertiary),
	white: colorBlack,
	black: colorWhite,
	background: lighten(0.5, colorBlack),
})

export const themes = {
	default: themeDefault,
	dark: themeDark,
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
