import React from 'react'
import { css, Global }  from '@emotion/react'
import { globalStyles } from '../../abstracts/globalStyles'

// Components
import Navbar     from './Navbar'
import Footer     from './Footer'
import { themes } from '../../abstracts/constants'

const Layout = ({ children, theme, footer= true, title = "Aksels site" }) => {
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
			<Navbar title={title} />
			<main>{children}</main>
			{footer && <Footer theme={pageTheme.name}>This is a footer!</Footer>}
		</>
	)
}

export default Layout
