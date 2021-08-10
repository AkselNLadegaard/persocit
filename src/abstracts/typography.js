import Typography from 'typography'
import * as constant from './constants'

const headerFontArray = ['Recursive', 'monospace']
const bodyFontArray = ['Recursive', 'monospace']
const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.28,
    scaleRatio: 3,
    headerFontFamily: headerFontArray,
    bodyFontFamily: bodyFontArray,
    headerGray: 40,
    headerGrayHue: 'cool',
    bodyGray: 0,
    bodyGrayHue: 0,
    headerWeight: 600,
    bodyWeight: 'normal',
    boldWeight: 700,
    blockMarginBottom: 1,
    includeNormalize: true,

    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        '::selection': {
            background: 'hotpink',
        },
        a: {
            fontFamily: 'Recursive, monospace',
            textDecoration: 'none',

        },
        'a:hover': {
            opacity: 0.67,
        },
        li: {
            marginBottom: '0 !important'
        }
    }),
})
export default typography
