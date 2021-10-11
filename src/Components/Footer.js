import React from 'react'
import { Link } from 'react-router-dom'
import {PageDetails} from './Pages/PageDetails'
import '../style/footer.css'

const Footer = () => {

    const footerLinks = PageDetails.map((item, index) =>
        <ul
            key={index}
            className='footer__groups'>
            {item.details.map((headers, index) => 
                <li 
                    key={index}
                    className='footer__items'>
                    <Link to='' className='footer__links'>
                        {headers.header.text}
                    </Link>
                </li>
            )}
        </ul>
    )
    // const createFooterLinks = () => {
    // }

    return (
        <footer className='footer'>
            {footerLinks}
            <p>Copyright</p>
            <p>Blabla</p>
        </footer>
    )
}

export default Footer