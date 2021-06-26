/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBarItem.css';

const NavBarItem = (props: any): React.ReactElement => {
    return (
        <li className="nav-item">
            <img src={props.img} className="icons" />
            <a href="#">{props.title}</a>
        </li>
    );
}

export default NavBarItem;