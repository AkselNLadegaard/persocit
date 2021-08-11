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
  margin: 0 auto;
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

`
const SideNavActive = css`

`
const Hamburger = styled.button`
  width: 16px;
  height: 16px;

  ${constant.mq[1]} {
    display: none;
  }
`

const Navbar = ({...props}) => {
        const [sideNavActive, setSideNavActive] = useState(false)

        const Links = () => {

            return (
                <>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/TypographyPlayground'}>Typography</Link>
                </>
            );
        }
        const SideNav = ({}) => {

            return (
                <SideNavContainer css={sideNavActive && SideNavActive}>
                    <Links/>
                </SideNavContainer>
            )
        }
        return (
            <Header {...props}>
                <Container>
                    <Link to={'/'} className={'logo'}>
                            {/*<StaticImage src="../images/icon.png" alt="logo" placeholder="blurred" layout="fixed" height={96}/>*/}
                        <TestSvg height={'2em'} width={'auto'}/>
                    </Link>

                    <Hamburger onClick={() => (setSideNavActive(!sideNavActive))}/>
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
