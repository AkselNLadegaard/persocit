import { css } from '@emotion/react'
import { activeStyles } from './globalStyles'

export const baseButtonStyles = css`
	button {
		--btnBg: var(--primary);
		--btnColor: var(--primaryText);
		border: 0;
		border-radius: 0.25rem;
		background: var(--btnBg);
		color: var(--btnColor);
		font-size: 1.3rem;
		line-height: 1.2;
		white-space: nowrap;
		text-decoration: none;
		padding: 0.25rem 0.5rem;
		margin: 0.25rem;
		cursor: pointer;

		:hover,
		:focus,
		:focus-visible :active {
			opacity: var(--opaque);
			cursor: pointer;
		}

		:focus,
		:active {
			outline: 2px solid var(--btnBg);
			outline-offset: 4px;
		}

		:active {
			opacity: 1;
		}

		:disabled {
		}
	}

	.btn-pri {
		--btnBg: var(--primary);
		--btnColor: var(--primaryText);
	}

	.btn-sec {
		--btnBg: var(--secondary);
		--btnColor: var(--secondaryText);
	}

	.btn-ter {
		--btnBg: var(--tertiary);
		--btnColor: var(--tertiaryText);
	}
`
