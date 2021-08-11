import {css} from '@emotion/react'
import * as constant from './constants'
import {danger, selectionColor} from "./constants";
import {rhythm} from 'typography'

export const baseActiveStyles = css`
  :hover, :focus, :active {
    --wght: "wght" 800;
    cursor: pointer;
  }
  :hover {
    //opacity: 0.65;
  }

  :focus, :active {
    outline: 2px solid ${constant.selectionColor};
    outline-offset: 4px;
  }

  // implement more intense focus-visible-only5:focus-visible for increased accessibility.
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
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, a, blockquote, sub, sup, i, em, b, strong, pre, button {
    max-width: ${constant.maxContentWidth};
    font-variation-settings: var(--mono), var(--casl), var(--wght), var(--slnt), var(--CRSV);
  }

  pre {
    --mono: "MONO" 0;
  }

  // Seperate header styling.
  h1, h2, h3, h4, h5, h6 {
    --mono: "MONO" 0;
    --casl: "CASL" 0.2;
    --wght: "wght" 800;
    --slnt: "slnt" 0;
    --CRSV: "CRSV" 1;
    ::first-letter {
/*      font-size: 1.1em;
      --mono: "MONO" 1; */
/*     
 background: ${constant.selectionColor};
      padding: 0 0.2em;
      
      --mono: "MONO" 1;
      --casl: "CASL" 0;
      --wght: "wght" 1000;
      */
    }
  }

  h1 {
    --wght: "wght" 800;
  }

  h2 {
    --wght: "wght" 700;
  }

  h3 {
    --wght: "wght" 600;
  }

  h4 {
    --wght: "wght" 600;
  }

  h5 {
    --wght: "wght" 800;
  }

  h6 {
    --wght: "wght" 800;
  }


  blockquote {
    font-size: 1.1rem;
  }

  // Base elements
  a {
    ${baseActiveStyles};
    text-decoration: none;

    :hover, :active, :focus {

    }
  }
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
    --wght: "wght" 800;
  }

  sub, sup {
    --mono: "MONO" 1;
  }


  pre {

  }

  address {

  }


  // List styling
  ul, ol {
    ::marker {
      --mono: "MONO" 1;  
    }
  }

  li {
    --mono: "MONO" 0.7;
    --casl: "CASL" 0;
    --wght: "wght" 450;
    --slnt: "slnt" 0;
    --CRSV: "CRSV" 0;

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

    :disabled {
      background: ${constant.disabled}
    }
  }

`
export const globalStyles = css`

  :root {
    //https://fonts.google.com/variablefonts?vfquery=recursi for full axis description 
    // Default font variation values. 
    --mono: "MONO" 0;
    --casl: "CASL" 0;
    --wght: "wght" 400;
    --slnt: "slnt" 0;
    --CRSV: "CRSV" 0.5;
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