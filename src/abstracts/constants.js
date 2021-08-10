import {css} from '@emotion/react'

export const primary = 'hotpink'
export const primaryLight = 'hotpink'
export const primaryDark = 'hotpink'

export const secondary = 'blue'
export const secondaryLight = 'blue'
export const secondaryDark = 'blue'

export const gap = '12px'

const breakpoints = [576, 768, 992, 1200]
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`)

export const siteWidth = '90em'