import { css } from '@emotion/react'
import { Theme } from './themer'

const siteWidthUntiles = 60
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

// base theme Saturations
export const saturation = 0.85
export const lightness = 0.75

export const saturationDark = 0.75
export const lightnessDark = 0.8

export const saturationAlt = 0.9
export const lightnessAlt = 0.75

export const saturationDarkAlt = 0.8
export const lightnessDarkAlt = 0.75

export const rotateDegree = 120
export const rotateDegreeAlt = 120

// Base colors!
export const primaryDefault = 320
export const primaryExperiments = 300
export const colorBlack = '#2b272b'
export const colorWhite = '#fafafa'
export const colorBackgroundLight = '#fbf9e9'

// Theme generation
const themeDefault = new Theme({
	primaryHue: primaryDefault,
})
const themeExpNoBg = new Theme({
	primaryHue: primaryExperiments,
})

const themeExperiments = new Theme({
	primaryHue: primaryExperiments,
	background: '#c7c48c',
})

const themeBlog = new Theme({
	primaryHue: 666,
	background: '#cdcde1',
})

const themeAbout = new Theme({
	primaryHue: 220,
	background: '#7f148d',
})

export const themes = {
	default: themeDefault,
	themeExperiments: themeExperiments,
	themeExpNoBg: themeExpNoBg,
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

	--opaque: 0.8;
	--zIndexNav: 10;

	--siteGap: 2ch;
	--sectionPadding: 7ch;
`
