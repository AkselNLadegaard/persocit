import React from 'react'
import { Global, css } from '@emotion/react'
import { globalStyles } from '../abstracts/globalStyles'

// Components
import Navbar from './Navbar'
import Footer from './Footer'
import {
	colorPrimary,
	colorSecondary,
	colorTertiary,
	themes,
} from '../abstracts/constants'
import { themer } from '../abstracts/themer'

const Layout = ({ children, theme }) => {
	return (
		<>
			<Global
				styles={css`
					${globalStyles};
				`}
			/>
			{theme ? (
				<Global
					styles={css`
						@media (prefers-color-scheme: dark) {
							${themes.dark.theme};
						}

						html[data-theme='dark'] {
							${themes.dark.theme};
						}

						html[data-theme='light'] {
							${theme}
						}
					`}
				/>
			) : (
				<Global
					styles={css`
						@media (prefers-color-scheme: dark) {
							${themes.dark.theme};
						}

						html[data-theme='dark'] {
							${themes.dark.theme};
						}

						html[data-theme='light'] {
							${themes.default.theme}
						}
					`}
				/>
			)}
			<Navbar />
			<main>{children}</main>
			<Footer>This is a footer!</Footer>
		</>
	)
}

export default Layout
