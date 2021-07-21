/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavBar.css';
import NavBarItem from './NavBarItems/NavBarItem';

const NavBar = (): React.ReactElement => {
    const [list, setListItems] = React.useState<{title: string, active: boolean }[]>([
        {
            title: 'ABOUT ME',
            active: false,
        },
        {
            title: 'RESUMEN',
            active: false,
        },
        {
            title: 'PORTFOLIO',
            active: false,
        },
        {
            title: 'SKILL SETS',
            active: false,
        },
        {
            title: 'STUDIES',
            active: false,
        },
        {
            title: 'CONTACT ME',
            active: false,
        },
    ]);

    const [isBurguerVisible,setIsVisible] = React.useState<boolean>();
    
    const onClickBurger = () => {
        setIsVisible(!isBurguerVisible);
    }

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
    }, [list]);

    const menuActions = list.map((obj) => {
        return (
            <NavBarItem key={obj.title.trim()} title={obj.title} active={obj.active} click={onClickMenuOption} />
        );
    });

    return (
        <nav>
            <a href="#" className="nav-logo">
                Swords
            </a>
            <ul className={`nav-items ${isBurguerVisible ? "active" : ""}`}>
                {menuActions}
            </ul>
            <div className={`hamburguer ${isBurguerVisible ? "active" : ""}`} onClick={onClickBurger}>
                <span className={`bar ${isBurguerVisible ? "active" : ""}`}></span>
                <span className={`bar ${isBurguerVisible ? "active" : ""}`}></span>
                <span className={`bar ${isBurguerVisible ? "active" : ""}`}></span>
            </div>
        </nav>
    );
}

export default NavBar;