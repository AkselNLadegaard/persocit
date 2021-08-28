import Typography from 'typography'

const headerFontArray = ['Atkinson Hyperlegible', 'serif']
const bodyFontArray = ['Atkinson Hyperlegible', 'sans-serif']
const typography = new Typography({
	baseFontSize: '20px',
	baseLineHeight: 1.4,
	scaleRatio: 2,
	headerFontFamily: headerFontArray,
	bodyFontFamily: bodyFontArray,
	headerGray: 0,
	headerGrayHue: 'warm',
	bodyGray: 0,
	bodyGrayHue: 0,
	headerWeight: 600,
	bodyWeight: 'normal',
	boldWeight: 700,
	blockMarginBottom: 1,
	includeNormalize: true,
})
export default typography
