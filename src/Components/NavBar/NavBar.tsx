import React from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItems/NavBarItem';

const NavBar = (): React.ReactElement => {
    const [list, setListItems] = React.useState<{img: string, title: string, active: boolean }[]>([
        {
            img: process.env.PUBLIC_URL + '/img/icon_aboutme.png',
            title: 'ABOUT ME',
            active: false,
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_cv.png',
            title: 'RESUMEN',
            active: false,
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_projects.png',
            title: 'PORTFOLIO',
            active: false,
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_skills.png',
            title: 'SKILL SETS',
            active: false,
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_school.png',
            title: 'STUDIES',
            active: false,
        },
        {
            img: process.env.PUBLIC_URL + '/img/icon_contactme.png',
            title: 'CONTACT ME',
            active: false,
        },
    ]);
    

    const onClickMenuOption = React.useCallback((title: string) => {
        // eslint-disable-next-line array-callback-return
        const listUpdate = list.map(item => {
            if (item.title === title) {
                const updateItem = {
                    ...item,
                    active: !item.active
                };
                return updateItem;
            } else {
                const updateItem = {
                    ...item,
                    active: false
                }
                return updateItem;
            }
        });
        setListItems(listUpdate);

        // eslint-disable-next-line array-callback-return
        // const listUpdated = list.map(item => {
        //     if (item.title === title) {
        //         const updateItem = {
        //             ...item,
        //             active: !item.active,
        //         };
        //         return updateItem;
        //     }
        //     return item;
        // });
        // setListItems(listUpdated);
    }, [list]);

    return (
        <nav>
            <ul className="nav-items">
                {
                    list.map((obj) => {
                        return (
                            <NavBarItem key={obj.title.trim()} title={obj.title} active={obj.active} click={onClickMenuOption} />
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default NavBar;