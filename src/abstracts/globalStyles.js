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

	main {
		min-height: calc(100vh - var(--navHeight) - var(--navOffset) - 8rem);
	}

	// total hack
	img {
		box-shadow: none !important;
		objectFit: contain !important;
	}
	// real solution will be to drop this silly fadein or fix aspect ratios or use another implementation for markdown files, but it is just so convenient....
	//  There also "must" be an official solution for this. Portrait images simply cannot just be this borked. 
	// Also why doesn't gatsby-remark-images support all sharp options? I want to use the "fit" option to fix this issue, but it is not supported...

	${basePseudoSelectorStyles};
	${typographyStyles};
	${baseButtonStyles};
	${inputStyles};
	${themesUtilityClasses(themes)};
`
