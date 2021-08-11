import {css} from '@emotion/react'
import * as constant from './constants'
import {selectionColor} from "./constants";
import {rhythm} from 'typography'

export const baseActiveStyles = css`
  :focus, :active {
    outline: 2px solid ${constant.selectionColor};
    outline-offset: 4px;
  }

  // implement more intense focus-visible-only:focus-visible for increased accessibility.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
`
export const basePseudoSelectorStyles = css`
    ::selection {
      background: ${constant.selectionColor};
    }
`
const variableFontStyles = css`
  // May be moved into typography.js to decrease the number separate style declarations.
  // Headers
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, a, blockquote {
    max-width: ${constant.maxContentWidth};
  }
  h1 {

  }

  h2 {

  }

  h3 {

  }

  h4 {

  }

  h5 {

  }

  h6 {

  }

  a {
    ${baseActiveStyles};
    text-decoration: none;
  }

  blockquote {
    
  }
  // Base elements
  div {

  }

  span {

  }

  i {
    --slnt: "slnt" -15;
  }
  em {
    text-decoration: underline;
  }

  b, strong {
    font-weight: 800;
  }

  sub, sup {
    --mono: "MONO" 1;
  }


  pre {

  }

  address {

  }


  // List styling
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
    background: ${constant.primary};
    color: white;
    font-size: 1.3rem;
    line-height: 1.2;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    cursor: pointer;

    ${baseActiveStyles};

    :hover, :focus {
      background: ${constant.primaryLight};
    }


    :active {
      background: ${constant.primaryDark};
    }
  }

`
export const globalStyles = css`

  :root {
    //https://fonts.google.com/variablefonts?vfquery=recursi for full axis description 
    // Default font variation values. 
    --mono: "MONO" 0.1;
    --casl: "CASL" 0.3;
    --wght: "wght" 412;
    --slnt: "slnt" 0;
    --CRSV: "CRSV" 1;
    /* Monospace: Sans (natural-width) or Mono (fixed-width) */
    /* Casual: Linear to Casual */
    /* Weight: Light to ExtraBlack; usually set with \`font-weight\` */
    /* Slant: 0 to -15 degrees, auto cursive at -14 */
    /* Cursive: always roman (0), auto substitution (0.5), or always cursive (1)*/ /* apply axis values with CSS custom properties */

  }

  html {
    font-variation-settings: var(--mono), var(--casl), var(--wght), var(--slnt), var(--CRSV);
  }

  ${basePseudoSelectorStyles};
  ${variableFontStyles};
  ${baseButtonStyles};
`