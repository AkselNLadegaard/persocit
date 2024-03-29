import React, { useState } from 'react'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import * as constant from '../../abstracts/constants'
// Components
import { Link } from 'gatsby'
import SvgPersocitLogo from '../../assets/svg/svgTest.svg'

import { siteWidthUntiles } from '../../abstracts/constants'

const Header = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  margin: var(--navOffset) auto 4rem;
  height: var(--navHeight);
  background: var(--background);
  width: 100%;
  z-index: var(--zIndexNav);

  .sitetitle {
    font-size: 1.5rem;
    word-break: break-all;
    margin: 0;
  }

`
const animationCycleLogoColors = keyframes`
  0% {
    fill: var(--primary);
  }
  33% {
    fill: var(--secondary);
  }
  66% {
    fill: var(--tertiary);

  }
  100% {
    fill: var(--primary);
  }
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--siteWidth);
  margin: 0 auto;
  padding: 0.5em var(--gap) 0.25em;

  ${constant.mq[1]} {
    padding: 4px var(--gap) 0;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    :hover,
    :focus,
    :active {
      outline: none;
    }
  }

  .links-container {
    display: none;

    ${constant.mq[1]} {
      display: flex;
      align-self: center;
      align-items: flex-start;
      margin: 0;
      padding: 16px 0;
    }

    a {
      padding: 0.3em;
      margin-left: 0.7em;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: var(--gap);
    align-self: center;
    border-bottom: none;

    svg {
      height: 2rem;
      width: auto;

      path {
        transition: 0.1s ease-in-out fill, stroke;
        stroke: var(--backgroundText) !important;
        //fill: var(--background) !important;
        animation: ${animationCycleLogoColors} 5s ease-in-out infinite;
      }

      ${constant.mq[1]} {
        height: 3rem;
      }
    }

    :active,
    :hover,
    :focus {
      svg path {
        fill: var(--primary) !important;
        stroke: var(--tertiary) !important;
      }
    }

    @media (min-width: ${siteWidthUntiles + 28}em) {
      margin-left: -6rem;
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
    background: rgba(0, 0, 0, 0.4);
    margin: 0;
    padding: 0;
    border-radius: 0;
    backdrop-filter: blur(4px);

    :hover,
    :focus,
    :active {
      outline-offset: 0;
    }
  }

  .links-container {
    max-width: 80vw;
    min-width: max-content;
    height: fit-content;
    min-height: 100vh;
    background: var(--background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--gap) 4ch;
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
  padding: 0;
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

const Navbar = ({ title, logo = true, type = "default", ...props }) => {
  //determines if the user has a set them

  const [sideNavActive, setSideNavActive] = useState(false)
  const handleSidenav = ({ toStatus }) =>
    setSideNavActive(toStatus ? toStatus : !sideNavActive)



  const Links = () => {
    if (!type || type === "default") {
      return (
        <>

          <Link to={'/experiments'}>Experiments</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/about'}>About</Link>
        </>
      )
    } else {
      return (
        <Link to={'/'}>Home</Link>
      )
    }
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
          {logo && <SvgPersocitLogo />}
          <p className={'sitetitle'}>Aksels site</p>
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
