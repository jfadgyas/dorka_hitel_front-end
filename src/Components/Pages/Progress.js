// Requirements
import React from 'react'

const Progress = props => {
    
    return (
        <div className='progress'>
            <svg className='progress__svg'>
                <circle className='progress__circle'></circle>
                <defs>
                    <linearGradient id='circleGradient' x1='0' x2='0' y1='1' y2='0'>
                        <stop className='progress__circle__gradient--start' offset='0%'/>
                        <stop className='progress__circle__gradient--end' offset='100%'/>
                    </linearGradient>
                </defs>
            </svg>
            <div className='progress__status'>
                <p>Az üzenet küldése</p>
                <h1 className='progress__percent'>{props.progress.counter} %</h1>
                <p>folyamatban</p>
            </div>
            <h1>Még ne zárja be az ablakot!</h1>
        </div>
    )
}

export default Progress