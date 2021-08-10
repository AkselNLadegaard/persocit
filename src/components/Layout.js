import React from 'react';
import {Global, css} from '@emotion/react'
import {globalStyles} from '../abstracts/globalStyles'

// Components
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Global styles={css`${globalStyles}`}/>
            <Navbar/>
            <main>{children}</main>
            <Footer>This is a footer!</Footer>
        </>
    );
};


export default Layout;
