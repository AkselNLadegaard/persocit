import { css } from '@emotion/react'
import { Theme, themer } from './themer'
import { adjustHue, complement, darken, lighten } from 'polished'

const siteWidthUntiles = 60
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

// Base colors!
export const primaryDefault = 12
export const primaryExperiments = 120
export const colorBlack = '#2b272b'
export const colorWhite = '#fafafa'
export const colorBackgroundLight = '#fcfcfc'
export const colorBackgroundDark = '#ffe4c7'

// Theme generation
const themeDefault = new Theme({
	primaryHue: primaryDefault,
})

const themeExperiments = new Theme({
	primaryHue: primaryExperiments,
})
const themeBlogColor = 180
const themeBlog = new Theme({
	primaryHue: themeBlogColor,
})
const themeAbout = new Theme({
	primaryHue: 220,
})

export const themes = {
	default: themeDefault,
	themeExperiments: themeExperiments,
	themeBlog: themeBlog,
	themeAbout: themeAbout,
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
