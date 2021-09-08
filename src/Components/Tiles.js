import React from 'react'
import {Link} from 'react-router-dom'
import '../style/tiles.css'

const Tiles = () => {

    return (
        <ul className='tiles'>
            <Link className='tiles__link' to='/szemelyi-kolcson'>
                <li className='tiles__tile tiles__tile--personal'>
                    <span className='tiles__icon tiles__icon--personal'></span>
                    <p className='tiles__text'>Személyi kölcsön</p>
                </li>
            </Link>
            <Link className='tiles__link' to='/lakas'>
                <li className='tiles__tile tiles__tile--home'>
                    <span className='tiles__icon tiles__icon--home'></span>
                    <p className='tiles__text'>Lakáshitel</p>
                </li>
            </Link>
            {/*<Link className='tiles__link' to='/auto'>
                <li className='tiles__tile tiles__tile--auto'>
                    <span className='tiles__icon tiles__icon--auto'></span>
                    <p className='tiles__text'>Autóhitel</p>
                </li>
            </Link>*/}
            <Link className='tiles__link' to='/baba'>
                <li className='tiles__tile tiles__tile--baby'>
                    <span className='tiles__icon tiles__icon--baby'></span>
                    <p className='tiles__text'>Babaváró</p>
                </li>
            </Link>
            <Link className='tiles__link' to='/csok'>
                <li className='tiles__tile tiles__tile--csok'>
                    <span className='tiles__icon tiles__icon--csok'></span>
                    <p className='tiles__text'>CSOK</p>
                </li>
            </Link>
        </ul>
    )
}

export default Tiles