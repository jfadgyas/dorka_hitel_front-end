// Requirements
import React from 'react'
import Calc from '../Calculator/Calculator'
import Contact from './Contact'
import News from './News'
import { PageDetails } from './PageDetails'
import '../../style/pages.css'

const CreatePage = ({match}) => {
    // Need to translate hungarian words        
    const dictionary = {
        'rolunk': 'about',
        'hirek': 'news',
        'kapcsolat': 'contact',
        'szemelyi-kolcson': 'personal',
        'lakas': 'home',
        'auto': 'auto',
        'baba': 'baby',
        'csok': 'csok'
    }
    const currentPage = dictionary[match.params.page]
    const isLoanPage = currentPage === 'personal' || currentPage === 'home' || currentPage === 'auto' ||currentPage === 'baby' || currentPage === 'csok' ? true : false
    // Creating page text
    const pageNodes = PageDetails
        .find(item => item.loanType === currentPage).details
        .map((item, index) => 
            <div key={index} className='page__container'>
                {item.header && <h1 className={item.header.class}>{item.header.text}</h1>}
                {item.icon && <span className={`page__icon page__icon--${item.icon}`}></span>}                
                {item.desc && <p className={item.desc.class}>{item.desc.text}</p>}
                {item.list && <ul className='page__list'>{
                    item.list.map((elem, index) => 
                        <li
                            key={index}
                            className='page__list-item'>
                            {elem}
                        </li>                        
                    )}</ul>
                }
            </div>
        )
    // Need to pass key prop to cause a re-render, when new page request comes from this page

    return (
        <article key={currentPage}>
            {isLoanPage && <Calc loanType={currentPage}/>}
            <section className={isLoanPage ? 'page' : 'page--noMargin'}>
                {pageNodes}
                {currentPage === 'contact' && <Contact />}
                {currentPage === 'news' && <News />}         
            </section>
        </article>
    )
}

export default CreatePage