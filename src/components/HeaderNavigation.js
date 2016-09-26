import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import { Link } from 'redux-little-router';
import Logo from './../piolin-logo.png';

const margin = {
    marginRight: 20
}

const logoStyle = {
    width: 30,
    marginRight: 50
}

const navbar = {
    textAlign: 'right'
}

const HeaderNavigation = ({ ListItem, subheader }) => {
    return (
        <AppBar style={navbar} fixed>
            <img style={logoStyle} src={Logo} alt="logo" />
            <Link style={margin} href="/tweets/create">
                <h2>Create</h2>
            </Link>
            <Link style={margin} href="/tweets">
                <h2>Timeline</h2>
            </Link>
            <Link style={margin} href="/followers">
                <h2>Followers</h2>
            </Link>
            <Link style={margin} href="/following">
                <h2>Following</h2>
            </Link>
            <Link style={margin} href="/logout">
                <h2>Logout</h2>
            </Link>
        </AppBar>
    );
};

export default HeaderNavigation;
