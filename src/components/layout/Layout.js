import React          from 'react'
import {css, Global}  from '@emotion/react'
import {globalStyles} from '../../abstracts/globalStyles'

// Components
import Navbar   from './Navbar'
import Footer   from './Footer'
import {themes} from '../../abstracts/constants'

const Layout = ({children, type = "default", theme, footer = true, title, logo = true}) => {
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
            <main>{children}</main>
            {footer && <Footer theme={pageTheme.name} type={type}>This is a footer!</Footer>}
        </>
    )
}

export default Layout
