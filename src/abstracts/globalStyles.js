import { css } from '@emotion/react'
import * as constant from './constants'
import { themes } from './constants'
import { baseButtonStyles } from './buttonStyles'
import { themesUtilityClasses } from './themer/themesUtilityStyles'
import { typographyStyles } from './typographyStyles'
import { inputStyles } from './inputStyles'

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
	${typographyStyles};
	${baseButtonStyles};
	${inputStyles};
	${themesUtilityClasses(themes)};
`
