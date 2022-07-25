import React from 'react'
import { css, Global } from '@emotion/react'
import { globalStyles } from '../abstracts/globalStyles'

// Components
import Navbar from './Navbar'
import Footer from './Footer'
import { themes } from '../abstracts/constants'

const Layout = ({ children, theme }) => {
	let layoutTheme = theme ? theme.theme : themes.default.theme
	return (
		<>
			<Global
				styles={css`
					:root {
						${layoutTheme};
					}
				`}
			/>
			<Global
				styles={css`
					${globalStyles};
				`}
			/>
			<Navbar />
			<main>{children}</main>
			<Footer>This is a footer!</Footer>
		</>
	)
}

export default Layout
