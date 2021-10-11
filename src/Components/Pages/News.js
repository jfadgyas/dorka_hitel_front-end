// Requirements
import React, {useState, useEffect} from "react"
import '../../style/news.css'

const News = () => {

    const [news, setNews] = useState([])
    // Fake news, Get news from server
    useEffect(() => {
        setNews([
            {
                startDate: Date.now(),
                endDate: Date.now(),
                head: 'elso hir',
                desc: 'Nunc dignissim sed odio in blandit. Donec quis est id libero fermentum eleifend vel in quam. Donec consequat bibendum feugiat. Donec et lobortis diam, vulputate tincidunt tellus. Integer id arcu vel mi volutpat tincidunt sed in felis. Duis est leo, porttitor ut pharetra in, tincidunt a tellus.'
            },
            {
                startDate: Date.now() + 500000000,
                endDate: Date.now(),
                head: 'Elindult az oldal',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida augue quis gravida convallis. Phasellus pharetra est eget odio fringilla, ut facilisis ligula sagittis. Nunc nec mauris vitae elit pellentesque accumsan. Nullam bibendum velit non urna scelerisque bibendum. Duis eu sapien sem. Praesent hendrerit, erat nec sagittis commodo, felis ligula faucibus dolor, ac fringilla nisl neque a nisl. Donec a varius ligula. Nulla eu magna dolor. '
            },
        ])
    }, [])

    const newsList = news.map((item, index) => 
        <li key={index} className='news__item'>
            
            <h3 className='news__label'>{item.head}</h3>
            <small className='news__date'>
                <span className='news__icon news__icon--clock'></span>
                {new Date(item.startDate).toLocaleDateString('hu-HU', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}
            </small>
            <p className='news__desc'>{item.desc}</p>
        </li>    
    )

    return (
        <ul className='news__list'>
            {newsList}
        </ul>
    )
}

export default News