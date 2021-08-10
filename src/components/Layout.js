import React from 'react';
import {Global, css } from '@emotion/react'
import {globalStyles} from '../abstracts/globalStyles'

const Layout = ({ children }) => {
    return (
        <>
            <Global styles={css`${globalStyles}`}/>
            <Navbar />
            <main>{children}</main>
            <footer>This is a footer!</footer>
        </>
    );
};


export default Layout;
