import { css } from '@emotion/react'

export function themesUtilityClasses(themes) {
	return Object.keys(themes).map(
		(value, index) =>
			css`
				.bg-${value} {
					${themes[value].theme};
					background: var(--primary);
					color: var(--primaryText);

					> .bg-inner {
						${themes[value].themeAlt};
					}
				}
			`
	)
}
