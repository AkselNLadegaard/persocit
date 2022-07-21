import {
	adjustHue,
	complement,
	darken,
	lighten,
	meetsContrastGuidelines,
	saturate,
} from 'polished'

export function canDarken({ mainColor, colorToCorrect, level = 'AA' }) {
	let colorIm = colorToCorrect
	let i = 1
	for (i; !meetsContrastGuidelines(mainColor, colorIm)[level]; i++) {
		colorIm = darken(i / 100, colorIm)
		if (i >= 100) {
			console.log('Cannot correct color with lighten')
			colorIm = colorToCorrect
			break
		}
	}

	return {
		canDarken: meetsContrastGuidelines(mainColor, colorIm)[level],
		correctedColor: colorIm,
		steps: i,
	}
}

export function canLighten({ mainColor, colorToCorrect, level = 'AA' }) {
	let colorIm = colorToCorrect
	let i = 1
	for (i; !meetsContrastGuidelines(mainColor, colorIm)[level]; i++) {
		colorIm = lighten(i / 100, colorIm)
		if (i >= 100) {
			console.log('Cannot correct color with lighten')
			colorIm = colorToCorrect
			break
		}
	}
	return {
		canLighten: meetsContrastGuidelines(mainColor, colorIm)[level],
		correctedColor: colorIm,
		steps: i,
	}
}

export function correctContrast({
	mainColor,
	colorToCorrect,
	level = 'AA',
	type = 'auto',
}) {
	// forces colorTOCorrect, a hex, to meet WCAG contrast level AA.
	// If contrast is met, colorToCorrect is returned unaltered
	console.log('correct contrast')
	console.log(
		`Meets ${level} of contrast: ${
			meetsContrastGuidelines(mainColor, colorToCorrect)[level]
		}`
	)
	let colorIm = colorToCorrect
	console.log(`color to correct initially: ${colorIm}`)
	console.log(
		`colorIm test: ${meetsContrastGuidelines(mainColor, colorIm)[level]}`
	)
	console.log(`Attempting ${type} correction`)
	if (meetsContrastGuidelines(mainColor, colorToCorrect)[level]) {
		return colorToCorrect
	} else if (type === 'hue') {
		for (
			let i = 1;
			!meetsContrastGuidelines(mainColor, colorIm)[level];
			i++
		) {
			colorIm = adjustHue(i, colorIm)
			if (i >= 360) {
				console.log('Cannot correct color with hue')
				colorIm = colorToCorrect
				break
			}
		}
		console.log(
			`Original color: ${colorToCorrect}, returned color: ${colorIm}, meets contrast: ${
				meetsContrastGuidelines(mainColor, colorIm)[level]
			}`
		)
		return colorIm
	} else if (type === 'saturation') {
		for (
			let i = 1;
			!meetsContrastGuidelines(mainColor, colorIm)[level];
			i++
		) {
			colorIm = saturate(i / 100, colorIm)
			if (i >= 100) {
				console.log('Cannot correct color with saturate')
				colorIm = colorToCorrect
				break
			}
		}
		console.log(
			`Original color: ${colorToCorrect}, returned color: ${colorIm}, meets contrast: ${
				meetsContrastGuidelines(mainColor, colorIm)[level]
			}`
		)
		return colorIm
	} else if (type === 'auto') {
		let canDarkenObj = canDarken({
			mainColor: mainColor,
			colorToCorrect: colorToCorrect,
			level: level,
		})
		let canLightenObj = canLighten({
			mainColor: mainColor,
			colorToCorrect: colorToCorrect,
			level: level,
		})

		if (canDarkenObj.canDarken && canLightenObj.canLighten) {
			if (canLightenObj.steps > canDarkenObj.steps) {
				colorIm = canDarkenObj.correctedColor
			} else if (canLightenObj.steps < canDarkenObj.steps) {
				colorIm = canLightenObj.correctedColor
			} else {
				colorIm = canDarkenObj.correctedColor
			}
		} else if (canDarkenObj.canDarken) {
			colorIm = canDarkenObj.correctedColor
		} else if (canLightenObj.canLighten) {
			colorIm = canLightenObj.correctedColor
		} else return colorIm
	}
	return colorIm
}

export function generateSecondary(primary, secondary = null) {
	console.log(`logging secondary ${secondary}`)
	console.log(`logging secondary ${secondary ? 'true' : 'false'}`)
	let secondaryIm = secondary ? secondary : complement(primary)
	console.log(`logging secondaryIm: ${secondaryIm} `)
	let meetsContrast = meetsContrastGuidelines(primary, secondaryIm)['AA']
	console.log(`logging meetsContrast: ${meetsContrast} `)
	if (meetsContrast === true) {
		return secondaryIm
	} else if (meetsContrast === false) {
		return correctContrast({
			mainColor: primary,
			colorToCorrect: secondaryIm,
			type: 'AA',
		})
	} else return secondaryIm
}
