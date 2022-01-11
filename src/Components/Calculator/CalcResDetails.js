import React, {useState, useEffect} from 'react'
import hero from '../../foto/hero.png'

const CalcResDetails = props => {
    
    // State: records of the requested details
    const [detailData, setDetailData] = useState([])

    // Variables
    let touchX = 0
    let selected = 0 // holds the index of the current detail from the list
    
    useEffect(() => {
        // Get data from the server using loantype and bank
        const postDetails = async () => {
            const URL = `https://infallible-elion-34e0db.netlify.app/${props.loanRequest.loanType}/${props.bank}`
            const options = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(props.loanRequest)
            }
            try {
                const details = await fetch(URL, options).then(res => res.json())
                setDetailData(details)
            }
            catch(err){
                console.log(err)
            }
        }
        
        postDetails()
        
    }, [props])

    // Scroll the list horizontally
    const moveList = index => {
        document.querySelector('.res-detail__list').style.transform=`translateX(calc(-${235*index}px - ${1*index}em))`
        selected = index
    }
    
    // Swipe with touch, same with mouse, maybe join them together?
    const handleTouch = e => {
        if (e.type === 'touchstart') return touchX = e.touches[0].clientX
        if (touchX - e.changedTouches[0].clientX > 30 && selected !== detailList.length-1) moveList(selected+1)
        if (touchX - e.changedTouches[0].clientX < -30 && selected !== 0) moveList(selected-1)
    }

    // Swipe with mouse
    const handleMouse = e => {
        if (e.type === 'mousedown') return touchX = e.pageX
        if (touchX - e.pageX > 30 && selected !== detailList.length-1) moveList(selected+1)
        if (touchX - e.pageX < -30 && selected !== 0) moveList(selected-1)
    }

    // Generate details list
    const detailList = detailData.map((item,index) => 
        <li
            key={index}
            className='res-detail__list-item'
            onClick={() => moveList(index)}>
            <p className='res-detail__desc'>{item.bank} <strong>{item.product}</strong></p>
            <p className='res-detail__desc'>Futamidő: <strong>{item.year} év</strong></p>
            {item.ratePeriod && <p className='res-detail__desc'>Fix kamatozás: <strong>{item.ratePeriod === 30 ? 'végig' : `${item.ratePeriod} év`}</strong></p>}
            <p className='res-detail__desc'>Havi törlesztő: <strong>{item.monthlyPay.toLocaleString('hu-HU')} Ft</strong></p>
            <p className='res-detail__desc'>Teljes visszafizetés: <strong>{item.fullPay.toLocaleString('hu-HU')} Ft</strong></p>
        </li>
    )
   
    return (
        <div className='res-detail'>
            <h4 className='res-detail__label'>A {props.bank} további ajánlatai</h4>
            <ul className='res-detail__list'>
                {detailList}
            </ul>
            {detailData.length !== 0 && <div className='res-detail__currentBox'
                onTouchStart={handleTouch}
                onTouchMove={e.preventDefault()}
                onTouchEnd={handleTouch}
                onMouseDown={handleMouse}
                onMouseUp={handleMouse}></div>
            }
            <div className='res-detail__hero-container'>
                <div>
                    <p>Elakadtál? Ügyintézőnk örömmel segít a választásban!</p>
                    <a className='res-detail__hero-link' href='mailto:d.tary9@gmail.com'><span className='res-detail__icon res-detail__icon--email'></span>d.tary9@gmail.com</a>
                    <a className='res-detail__hero-link' href='tel:+36303434708'><span className='res-detail__icon res-detail__icon--phone'></span>+36303434708</a>
                </div>
                <div className='res-detail__hero-wrapper'>
                    <img className='res-detail__hero' src={hero} alt='hero'/>
                </div>

            </div>
        </div>
    )
}

export default CalcResDetails