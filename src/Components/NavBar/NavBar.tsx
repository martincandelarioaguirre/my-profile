import React from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItems/NavBarItem';

const NavBar = (): React.ReactElement => {
    const resume: {img: string, title: string }[] = [
        {
            img: process.env.PUBLIC_URL + '/img/icon_aboutme.png',
            title: 'ABOUT ME'
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_cv.png',
            title: 'RESUMEN'
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_projects.png',
            title: 'PORTFOLIO'
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_skills.png',
            title: 'SKILL SETS'
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_school.png',
            title: 'STUDIES'
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_contactme.png',
            title: 'CONTACT ME'
        },
    ];
    return (
        <nav>
            <ul className="nav-items">
                {
                    resume.map((obj) => {
                        return (
                            <NavBarItem key={obj.title.trim()} img={obj.img} title={obj.title} />
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default NavBar;