import { css } from '@emotion/react'

export function themesUtilityClasses(themes) {
	return Object.keys(themes).map((value, index) => {
		let themeName = themes[value].name
		let theme = themes[value].theme
		let themeAlt = themes[value].themeAlt
		return css`
			.bg-${themeName}-primary {
				${theme};
				--background: var(--primary) !important;
				--backgroundText: var(--primaryText) !important;
				background: var(--background);
				color: var(--backgroundText);

				> * {
					${themeAlt};
				}
			}

			.bg-${themeName} {
				${theme};
				background: var(--background);
				color: var(--backgroundText);
			}

			.set-${themeName} {
				${theme};
			}

			.set-${themeName}-alt {
				${themeAlt};
			}
		`
	})
}
