// Requirements
import React from 'react'
import Calc from '../Calculator/Calculator'
import { PageDetails } from './PageDetails'
import '../../style/pages.css'

const LoanPage = ({match}) => {
    // Need to translate hungarian words        
    const dictionary = {
        'szemelyi-kolcson': 'personal',
        'lakas': 'home',
        'auto': 'auto',
        'baba': 'baby',
        'csok': 'csok'
    }
    const currentPage = dictionary[match.params.page]
    // Creating page text
    const pageNodes = PageDetails
        .find(item => item.loanType === currentPage).details
        .map((item, index) => 
            <div key={index} className='page__container'>
                {item.header && <h1 className={item.header.class}>{item.header.text}</h1>}
                {item.icon && <span className='material-icons-outlined page__icon'>{item.icon}</span>}
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
            <Calc loanType={currentPage}/>
            <section className='page'>
                {pageNodes}
            </section>
        </article>
    )
}

export default LoanPage