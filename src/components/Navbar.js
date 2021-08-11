import React, {useState} from 'react';
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import * as constant from '../abstracts/constants'
// Components
import {Link} from 'gatsby'
import {StaticImage} from "gatsby-plugin-image"
import TestSvg from '../assets/svg/svgTest.svg'

const Header = styled.header`
  min-height: 96px;
  width: 100%;
`
const Container = styled.div`
  margin: 1rem auto;
  width: 100%;
  height: 100%;
  max-width: ${constant.siteWidth};

  ${constant.mq[1]} {
    margin: 10rem auto 2rem;
  }


  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 24px;

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
    :hover, :focus, :active {

    }

    filter: blur(4px);
  }

  .links-container {
    max-width: 80vw;
    min-width: max-content;
    height: fit-content;
    min-height: 100vh;
    background: white;
    display: flex;
    flex-direction: column-reverse;
    padding: ${constant.gap};
    overflow-y: auto;

    > * {
      margin-top: ${constant.gap};
    }

    :first-child {
      margin-top: 0;
    }
  }


`
const SideNavActive = css`

`
const Hamburger = styled.button`
  width: 2rem;
  height: 2rem;
  ${constant.mq[1]} {
    display: none;
  }
`

const Navbar = ({...props}) => {
        const [sideNavActive, setSideNavActive] = useState(false)

        const Links = () => {

            return (
                <>
                    <Link to={'/Plants'}>Plants</Link>
                    <Link to={'/TypographyPlayground'}>Typography</Link>
                    <Link to={'/About'}>About</Link>
                </>
            );
        }
        const SideNav = ({}) => {

            return (
                <SideNavContainer css={sideNavActive && SideNavActive}>
                    <div className={'links-container'}>
                        <Links/>
                    </div>
                    <button className={'escape'} onClick={() => setSideNavActive(!sideNavActive)}>

                    </button>
                </SideNavContainer>
            )
        }
        return (
            <Header {...props}>
                <Container>
                    <Link to={'/'} className={'logo'}>
                        {/*<StaticImage src="../images/icon.png" alt="logo" placeholder="blurred" layout="fixed" height={96}/>*/}
                        <TestSvg height={'3rem'} width={'auto'}/>
                    </Link>

                    <Hamburger onClick={() => (setSideNavActive(!sideNavActive))}>M</Hamburger>
                    <ul className={'links-container'}>
                        <Links/>
                    </ul>
                </Container>
                {sideNavActive && <SideNav/>}
            </Header>
        );
    }
;

export default Navbar;
