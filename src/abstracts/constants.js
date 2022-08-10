import {css}   from '@emotion/react'
import {Theme} from './themer'

export const siteWidthUntiles = 60
const breakpoints = [30, 45, siteWidthUntiles]

export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}em)`)

// base theme Saturations
export const saturation = 0.85
export const lightness = 0.75

export const saturationDark = 0.75
export const lightnessDark = 0.83

export const saturationAlt = 0.9
export const lightnessAlt = 0.75

export const saturationDarkAlt = 0.8
export const lightnessDarkAlt = 0.75

export const rotateDegree = 120
export const rotateDegreeAlt = 120

// Base colors!
export const primaryDefault = 320
export const primaryExperiments = 300
export const colorBlack = '#2b272b'
export const colorWhite = '#fafafa'
export const colorBackgroundLight = '#fbf9e9'

// Theme generation
const themeDefault = new Theme({
                                   name:       'default',
                                   primaryHue: primaryDefault,
                               })
const themeExpNoBg = new Theme({
                                   name:       'expNoBg',
                                   primaryHue: primaryExperiments,
                               })

const themeExperiments = new Theme({
                                       name:       'experiments',
                                       primaryHue: primaryExperiments,
                                       background: '#c7c48c',
                                   })

const themeBlack = new Theme({
                                 name:       'black',
                                 primaryHue: 200,
                                 background: '#000000',
                             })

const themeBlackAlt = new Theme({
                                    name:       'blackAlt',
                                    primaryHue: 100,
                                    background: '#333333',
                                })
const themeWhite = new Theme({
                                 name:       'white',
                                 primaryHue: 200,
                                 background: '#ffffff',
                             })
const themeWhiteAlt = new Theme({
                                    name:       'whiteAlt',
                                    primaryHue: 100,
                                    background: '#f4f4f4',
                                })

const themeBlog = new Theme({
                                name:       'blog',
                                primaryHue: 333,
                                background: '#cdcde1',
                            })

const themeAbout = new Theme({
                                 name:       'about',
                                 primaryHue: 220,
                                 background: '#7f148d',
                             })

const themeClimate = new Theme({
                                   name:       'climate',
                                   primaryHue: 0,
                                   background: '#fefff3',
                               })
const themeClimateAlt = new Theme({
                                      name:       'climateAlt',
                                      primaryHue: 90,
                                      background: '#ffffff',
                                  })

export const themes = {
    default:     themeDefault,
    experiments: themeExperiments,
    white:       themeWhite,
    black:       themeBlack,
    blackAlt:    themeBlackAlt,
    expNoBg:     themeExpNoBg,
    blog:        themeBlog,
    about:       themeAbout,
    whiteAlt:    themeWhiteAlt,
    climate:     themeClimate,
    climateAlt:  themeClimateAlt,
}

export const initialCustomProperties = css`
  // inserted on :root, as global styles.
  color-scheme: light dark;

  --selectionColor: var(--tertiary);
  // this doesn't work as it is only set at global scope not theme scopes

  --gap: 24px;

  --siteWidth: ${`${siteWidthUntiles}em`};
  --maxContentWidth: 60ch;

  // breakpoints
  --phone: ${breakpoints[0]};
  --tablet: ${breakpoints[1]};
  --desktop: ${`${siteWidthUntiles}em`};

  --opaque: 0.8;
  --zIndexNav: 10;

  --siteGap: 2ch;
  --sectionPadding: 4ch;

  --navOffset: 4rem;
  --navHeight: 8ch;

  ${mq[1]} {
    --navOffset: 10rem;
    --navHeight: 8ch;
  }
`
