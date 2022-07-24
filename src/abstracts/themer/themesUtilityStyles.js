import { css } from '@emotion/react'

export function themesUtilityClasses(themes) {
	return Object.keys(themes).map(
		(value, index) =>
			css`
				.bg-${value} {
					${themes[value].theme};
					--background: var(--primary);
					--backgroundText: var(--primaryText);
					background: var(--background);
					color: var(--backgroundText);

					> .bg-inner,
					> .section-inner {
						${themes[value].themeAlt};
					}
				}
			`
	)
}
