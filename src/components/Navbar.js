import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import * as constant from '../abstracts/constants'
// Components
import { Link } from 'gatsby'
import TestSvg from '../assets/svg/svgTest.svg'
import DarkMode from '../components/DarkMode'

const Header = styled.header`
	position: sticky;
	top: 0;
	right: 0;
	margin: 4rem auto 2rem;
	width: 100%;

	${constant.mq[1]} {
		margin: 10rem auto 2rem;
	}
`
const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: var(--siteWidth);
	margin: 0 auto;
	padding: 0.5em var(--gap) 0.25em;
	background: var(--background);

	${constant.mq[1]} {
		padding: 0 var(--gap);
	}

	display: flex;
	align-items: stretch;
	justify-content: space-between;

	.links-container {
		display: none;

		${constant.mq[1]} {
			display: flex;
			align-self: center;
			align-items: center;
			height: 100%;
			margin: 0;
			padding: 16px 0;
		}

		a {
			padding: 0.3em;
			margin-left: 0.7em;
		}
	}

	.logo {
		align-self: center;

		svg {
			height: 2rem;
			width: auto;

			path {
				// fill: var(--black); Depends on the SVG.
				stroke: var(--black) !important;
			}

			${constant.mq[1]} {
				height: 3rem;
			}
		}
	}
`
const SideNavContainer = styled.div`
	position: fixed;

	bottom: 0;
	right: 0;
	display: flex;

	min-height: 100vh;
	height: fit-content;
	width: 100vw;
	flex-direction: row-reverse;
	align-content: flex-end;

	.escape {
		width: 100%;
		background: rgba(233, 233, 233, 0.4);

		:hover,
		:focus,
		:active {
		}

		filter: blur(4px);
	}

	.links-container {
		max-width: 80vw;
		min-width: max-content;
		height: fit-content;
		min-height: 100vh;
		background: var(--background);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: var(--gap);
		overflow-y: auto;

		> * {
			margin-top: var(--gap);
		}

		:first-of-type {
			margin-top: 0;
		}
	}
`
const SideNavActive = css``
const Hamburger = styled.button`
	width: 2rem;
	height: 2rem;
	background: rgba(0, 0, 0, 0.8);

	:hover,
	:focus,
	:active {
		background: rgba(0, 0, 0, 0.6);
	}

	${constant.mq[1]} {
		display: none;
	}
`

const Navbar = ({ ...props }) => {
	//determines if the user has a set them

	const [sideNavActive, setSideNavActive] = useState(false)
	const isBrowser = typeof window !== 'undefined'
	const handleSidenav = ({ toStatus }) =>
		setSideNavActive(toStatus ? toStatus : !sideNavActive)
	const Links = () => {
		return (
			<>
				{isBrowser && <DarkMode>Swtich theme</DarkMode>}
				<Link to={'/plants'}>Plants</Link>
				<Link to={'/typographyPlayground'}>Typography</Link>
				<Link to={'/blog'}>Empty blog</Link>
				<Link to={'/about'}>About</Link>
			</>
		)
	}
	const SideNav = () => {
		return (
			<SideNavContainer css={sideNavActive && SideNavActive}>
				<div className={'links-container'}>
					<Links />
				</div>
				<button
					aria-label='Close sidenav'
					className={'escape'}
					onClick={() => handleSidenav(false)}
				/>
			</SideNavContainer>
		)
	}
	return (
		<Header {...props}>
			<Container>
				<Link to={'/'} className={'logo'}>
					{/*<StaticImage src="../images/icon.png" alt="logo" placeholder="blurred" layout="fixed" height={96}/>*/}
					<TestSvg />
				</Link>

				<Hamburger onClick={handleSidenav}>M</Hamburger>
				<ul className={'links-container'}>
					<Links />
				</ul>
			</Container>
			{sideNavActive && <SideNav />}
		</Header>
	)
}

export default Navbar
