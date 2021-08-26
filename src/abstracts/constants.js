import { css } from '@emotion/react'

const siteWidthUntiles = 70
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

export const initialCustomProperties = css`
	// inserted on :root, as global styles.
	--black: #3d373d;
	--white: #fff;

	--primary: #264653;

	--secondary: #f4a261;

	--warning: yellow;
	--danger: firebrick;
	--disabled: gray;

	--selectionColor: antiqueWhite;

	--gap: 24px;

	--siteWidth: 70em;
	--maxContentWidth: 60ch;

	// breakpoints
	--phone: ${breakpoints[0]};
	--tablet: ${breakpoints[1]};
	--desktop: ${`${siteWidthUntiles}em`};

	--opaque: 0.8;
`
