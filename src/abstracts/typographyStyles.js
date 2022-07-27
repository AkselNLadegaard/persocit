import { css } from '@emotion/react'

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

export const typographyStyles = css`
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
		line-height: 1.4;

		:visited {
		}

		:hover,
		:active,
		:focus {
			border-bottom: solid 0.15rem;
			margin-bottom: -0.05rem;
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
