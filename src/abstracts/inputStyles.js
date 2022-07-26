import { css } from '@emotion/react'

export const inputStyles = css`
	input[type='range'] {
		--inputBg: var(--backgroundText);
		--inputTrackHeight: 4px;
		-webkit-appearance: none;
		margin: 18px 0;
		width: 100%;
		background: transparent;
	}

	input[type='range']:focus {
		outline: none;
	}

	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: var(--inputTrackHeight);
		cursor: pointer;
		box-shadow: 1px 1px 1px var(--backgroundText),
			0px 0px 1px var(--backgroundText);
		background: var(--inputBg);
		border-radius: 1.3px;
		border: 0.2px solid var(--backgroundText);
	}

	input[type='range']::-webkit-slider-thumb {
		box-shadow: 1px 1px 1px var(--backgroundText),
			0px 0px 1px var(--backgroundText);
		border: 1px solid var(--background);
		height: 36px;
		width: 16px;
		border-radius: 3px;
		background: var(--primary);
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -14px;
	}

	input[type='range']:focus::-webkit-slider-runnable-track {
		background: var(--inputBg);
	}

	input[type='range']::-moz-range-track {
		width: 100%;
		height: var(--inputTrackHeight);
		cursor: pointer;
		//box-shadow: 1px 1px 1px var(--backgroundText),	0px 0px 1px var(--backgroundText);
		background: var(--inputBg);
		border-radius: 1.3px;
		//border: 0.2px solid var(--backgroundText);
	}

	input[type='range']::-moz-range-thumb {
		border: solid var(--background);
		border-width: 2px 2px 2px 4px;
		height: 36px;
		width: 16px;
		border-radius: 3px;
		background: var(--primary);
		cursor: pointer;
	}

	input[type='range']::-ms-track {
		width: 100%;
		height: var(--inputTrackHeight);
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		border-width: 16px 0;
		color: transparent;
	}

	input[type='range']::-ms-fill-lower {
		background: var(--inputBg);
		border: 0.2px solid var(--backgroundText);
		border-radius: 2.6px;
		box-shadow: 1px 1px 1px var(--backgroundText),
			0px 0px 1px var(--backgroundText);
	}

	input[type='range']::-ms-fill-upper {
		background: var(--inputBg);
		border: 0.2px solid var(--backgroundText);
		border-radius: 2.6px;
		box-shadow: 1px 1px 1px var(--backgroundText),
			0px 0px 1px var(--backgroundText);
	}

	input[type='range']::-ms-thumb {
		box-shadow: 1px 1px 1px var(--background), 0px 0px 1px var(--background);
		border: 1px solid var(--background);
		height: 36px;
		width: 16px;
		border-radius: 3px;
		background: var(--primary);
		cursor: pointer;
	}

	input[type='range']:focus::-ms-fill-lower {
		background: var(--inputBg);
	}

	input[type='range']:focus::-ms-fill-upper {
		background: var(--inputBg);
	}
`
