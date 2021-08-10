import React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@emotion'
import {Link} from 'gatsby'

const Header = styled(header)`

`

const Links = () => {

    return (
        <>
            <Link to={'/'}>frontpage</Link>
        </>
    );
}
const Navbar = ({...props}) => {

    return (
        <Header {...props}>
            {Links}
        </Header>
    );
};

Navbar.propTypes = {};

export default Navbar;
