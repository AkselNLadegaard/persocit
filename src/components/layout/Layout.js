import React from 'react'
import { css, Global } from '@emotion/react'
import { globalStyles } from '../../abstracts/globalStyles'
import styled from '@emotion/styled'
// Components
import Navbar from './Navbar'
import Footer from './Footer'
import { themes } from '../../abstracts/constants'

const Main = styled.main`
  .gatsby-resp-image-wrapper {
    a {
      max-width: none;
      border: none;
    }

  }
  img {
    object-fit: contain !important;
    background: transparent !important;
    box-shadow: none !important;
  }
`

const Layout = ({ children, type = "default", theme, footer = true, title, logo = true, ...props }) => {
  let pageTheme = theme ? theme : themes.default

  return (
    <>
      <Global
        styles={css`
                  :root {
                    ${pageTheme.theme};
                  }
                `}
      />
      <Global
        styles={css`
                  ${globalStyles};
                `}
      />
      <Navbar title={title} logo={logo} type={type} />
      <Main>{children}</Main>
      {footer && <Footer theme={pageTheme.name} type={type}>This is a footer!</Footer>}
    </>
  )
}

export default Layout
