// Requirements
import React from 'react'
import { Link } from 'react-router-dom'
import {PageDetails} from './Pages/PageDetails'
import '../style/footer.css'

const Footer = () => {
    // Create footer links
    const footerLinks = PageDetails.map((item, index) =>
        <ul
            key={index}
            className='footer__groups'>
            {item.details.map((headers, index) => 
                <li 
                    key={index}
                    className='footer__items'>
                    <Link to={`${item.link}#info${index}`} className='footer__links'>
                        {headers.header.text}
                    </Link>
                </li>
            )}
        </ul>
    )

    return (
        <footer className='footer'>
            {footerLinks}
            <p className='footer__copyright'>Created By JCube webdevelopment</p>
        </footer>
    )
}

export default Footer