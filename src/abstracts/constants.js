import { css } from '@emotion/react'
import { Theme, themer } from './themer'
import { adjustHue, complement, darken, lighten } from 'polished'

const siteWidthUntiles = 60
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

// Base colors!
export const primaryDefault = '#d85300'
export const primaryExperiments = '#0dc832'
export const colorBlack = '#2b272b'
export const colorWhite = '#fafafa'

// Theme generation
const themeDefault = new Theme({
	primary: primaryDefault,
})

const themeExperiments = new Theme({
	primary: primaryExperiments,
	background: '#462d2d',
})
const themeBlogColor = '#7aed00'
const themeBlog = new Theme({
	primary: adjustHue(120, themeBlogColor),
	background: themeBlogColor,
})
const themeAbout = new Theme({
	primary: '#2da98c',
	background: '#0e2c5f',
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
