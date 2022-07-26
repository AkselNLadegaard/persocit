import { css } from '@emotion/react'

export function themesUtilityClasses(themes) {
	return Object.keys(themes).map(
		(value, index) =>
			css`
				.bg-${value}-primary {
					${themes[value].theme};
					--background: var(--primary) !important;
					--backgroundText: var(--primaryText) !important;
					background: var(--background);
					color: var(--backgroundText);

					> * {
						${themes[value].themeAlt};
					}
				}

				.bg-${value} {
					${themes[value].theme};
					background: var(--background);
					color: var(--backgroundText);
				}

				.set-${value} {
					${themes[value].theme};
				}

				.set-${value}-alt {
					${themes[value].themeAlt};
				}
			`
	)
}
