import Typography from 'typography'
import * as constant from './constants'

const headerFontArray = ['RecursiveVariable', 'serif']
const bodyFontArray = ['RecursiveVariable', 'sans-serif']
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
        // Variable font settings:
        '::selection': {
            background: 'hotpink',
        },
        // Links, buttons
        a: {
            fontFamily: '"RecursiveVariable", monospace',
            textDecoration: 'none',

        },
        'a:hover': {
            opacity: 0.67,
        },
        // Headers
        h1: {
            fontVariationSettings: 'var(--mono), var(--casl), var(--wght), var(--slnt), var(--CRSV)',
        },
        h2: {

        },
        h3: {

        },
        h4: {

        },
        h5: {

        },
        h6: {

        },
        // Lists
        ul: {

        },
        ol: {

        },
        li: {
        }
    }),
})
export default typography
