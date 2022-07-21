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
export const colorWhite = '#f1efec'
export const colorBackground = '#ffffff'
// Theme generation
const themeDefault = new Theme({
	primary: colorPrimary,
	secondary: colorSecondary,
	tertiary: colorTertiary,
})

const themeAutoPri = new Theme({
	primary: colorPrimary,
})
const themeAutoSec = new Theme({
	primary: colorSecondary,
})

export const themes = {
	default: themeDefault,
	themeAutoPri: themeAutoPri,
	themeAutoSec: themeAutoSec,
}

export const initialCustomProperties = css`
	// inserted on :root, as global styles.
	color-scheme: light dark;

	--selectionColor: var(--tertiary);
	// this doesn't work as it is only set at global scope not theme scopes

	--gap: 24px;

	--siteWidth: ${`${siteWidthUntiles}em`};
	--maxContentWidth: 60ch;

	// breakpoints
	--phone: ${breakpoints[0]};
	--tablet: ${breakpoints[1]};
	--desktop: ${`${siteWidthUntiles}em`};

	--opaque: 0.7;
`
