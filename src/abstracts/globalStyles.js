import {css} from '@emotion/react'

export const globalStyles = css`

  :root {
    //https://fonts.google.com/variablefonts?vfquery=recursi for full axis description 
    
    --mono: "MONO" 1;
    /* Monospace: Sans (natural-width) or Mono (fixed-width) */
    --casl: "CASL" 0;
    /* Casual: Linear to Casual */
    --wght: "wght" 412;
    /* Weight: Light to ExtraBlack; usually set with \`font-weight\` */
    --slnt: "slnt" 0;
    /* Slant: 0 to -15 degrees, auto cursive at -14 */
    --CRSV: "CRSV" 0;
  }

  /* Cursive: always roman (0), auto substitution (0.5), or always cursive (1)*/

  /* apply axis values with CSS custom properties */

`