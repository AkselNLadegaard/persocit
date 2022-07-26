import { css } from '@emotion/react'
import * as constant from './constants'
import { themes } from './constants'
import { baseButtonStyles } from './buttonStyles'
import { themesUtilityClasses } from './themer/themesUtilityStyles'
import { basePseudoSelectorStyles, typographyStyles } from './typographyStyles'
import { inputStyles } from './inputStyles'

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
