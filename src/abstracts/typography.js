import Typography from 'typography'
import * as constant from './constants'

const headerFontArray = ['RecursiveVariable', 'serif']
const bodyFontArray = ['RecursiveVariable', 'sans-serif']
const typography = new Typography({
	baseFontSize: '20px',
	baseLineHeight: 1.4,
	scaleRatio: 2,
	headerFontFamily: headerFontArray,
	bodyFontFamily: bodyFontArray,
	headerGray: 10,
	headerGrayHue: 'warm',
	bodyGray: 0,
	bodyGrayHue: 0,
	headerWeight: 600,
	bodyWeight: 'normal',
	boldWeight: 700,
	blockMarginBottom: 1,
	includeNormalize: true,

	overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({}),
})
export default typography
