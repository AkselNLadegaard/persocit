import { css } from '@emotion/react'
import { activeStyles } from './globalStyles'

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
