import {css} from '@emotion/react'

export const primary = 'hotpink'
export const primaryLight = 'pink'
export const primaryDark = 'purple'

export const secondary = 'blue'
export const secondaryLight = 'blue'
export const secondaryDark = 'blue'

export const danger = 'firebrick'
export const disabled = 'grey'

export const selectionColor = 'antiquewhite'

export const gap = '24px'

const siteWidthUnitless = 70
export const siteWidth = `${siteWidthUnitless}em`
export const maxContentWidth = '60ch'

const breakpoints = [30, 45, siteWidthUnitless]
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)
