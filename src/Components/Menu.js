// Requirements
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import logo from '../images/logo.png'
import {MenuLevels} from './MenuLevels'
import '../style/menu.css'

const Navbar = () => {

    const [menuLevel, setMenuLevel] = useState('0')
    
    const menuItems = MenuLevels[menuLevel].map((item, index) => 
            <li
                key={index}
                className='menu__item'
                onClick={item.subMenu ? () => showMenu(item.subMenu) : null}>
                    <Link
                        to={item.link}
                        className='menu__link'>
                        <span className={`menu__icons menu__icons--${item.icon}`}></span>
                        {item.name}
                    </Link>
            </li>
        )

    const showMenu = (level) => {
        // Hide current menu, create new items, then show again
        document.querySelector('.menu__list').classList.add('fadeout')
        setTimeout(() => {
            setMenuLevel(level)
            document.querySelector('.menu__list').classList.remove('fadeout')
        }, 360) // a bit more then the CSS transition value
        return menuItems
    }

    return (
        <header className='menu'>
            <nav>
                <ul className='menu__list'>
                    {menuItems}
                </ul>                
            </nav>
        </header>
    )
}

export default Navbar