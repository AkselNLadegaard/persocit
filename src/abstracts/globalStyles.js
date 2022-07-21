import { css } from '@emotion/react'
import * as constant from './constants'
import { darkThemeStyles, themes } from './constants'
import { themerClasses, themesUtilityClasses } from './themer'
import { baseButtonStyles } from './buttonStyles'

export const activeStyles = css`
	:hover,
	:focus,
	:focus-visible,
	:active {
		opacity: var(--opaque);
		cursor: pointer;
	}

	:hover {
	}

	:focus,
	:active {
		outline: 2px solid var(--tertiary);
		outline-offset: 4px;
	}
`
export const basePseudoSelectorStyles = css`
	::selection {
		// intermediate theming solution - tertiary used is currently not constrained to 'UA' actions
		background: var(--tertiary);
		color: var(--tertiaryText);
	}
`
const typography = css`
	// Overriding typography.js styles.

	// Headers
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	ol,
	li,
	a,
	blockquote,
	sub,
	sup,
	i,
	em,
	b,
	strong,
	pre,
	button {
		max-width: var(--maxContentWidth);
	}

	pre {
	}

	// Seperate header styling.
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
	}

	blockquote {
		font-size: 1.1rem;
	}

	// Base elements
	a {
		${activeStyles};
		text-decoration: none;
		border-bottom: dotted 0.1rem;
		color: var(--primary);

		:visited {
			opacity: var(--opaque);
		}

		:hover,
		:active,
		:focus {
			border-bottom: solid 0.1rem;
		}
	}

	div {
	}

	span {
	}

	i {
	}

	em {
		text-decoration: underline;
	}

	b,
	strong {
	}

	sub,
	sup {
	}

	pre {
	}

	address {
	}

	// List styling
	ul,
	ol {
		::marker {
		}
	}

	li {
	}

	ul {
	}

	ol {
	}
`

export const globalStyles = css`
	:root {
		${constant.initialCustomProperties};
	}

	html,
	body,
	main {
		color: var(--backgroundText);
	}

	html {
		background: var(--background);
	}

	${basePseudoSelectorStyles};
	${typography};
	${baseButtonStyles};
	${themesUtilityClasses(themes)};
`
