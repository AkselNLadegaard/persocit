import { css } from '@emotion/react'
import * as constant from './constants'
import { darkThemeStyles, themes } from './constants'
import { themerClasses, themesUtilityClasses } from './themer'

export const activeStyles = css`
	:hover,
	:focus,
	:active {
		opacity: var(--opaque);
		cursor: pointer;
	}

	:hover {
	}

	:focus,
	:active {
		outline: 2px solid var(--selectionColor);
		outline-offset: 4px;
	}

	// implement more intense focus-visible-only5:focus-visible for increased accessibility.
	// https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
`
export const basePseudoSelectorStyles = css`
	::selection {
		background: var(--selectionColor);
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
export const baseButtonStyles = css`
	button {
		border: 0;
		border-radius: 0.25rem;
		background: var(--primary);
		color: white;
		font-size: 1.3rem;
		line-height: 1.2;
		white-space: nowrap;
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		margin: 0.25rem;
		cursor: pointer;

		${activeStyles};

		:hover,
		:focus {
		}

		:active {
			opacity: 1;
		}

		:disabled {
		}
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

	html[data-theme='dark'] {
		${themes.dark.theme};
	}

	${basePseudoSelectorStyles};
	${typography};
	${baseButtonStyles};
	${themesUtilityClasses(themes)};
`
