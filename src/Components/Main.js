import React from 'react'
import Calc from './Calculator/Calculator'
import Tiles from './Tiles'

const Main = () => {

    return (
        <article className='main'>
            <Calc />
            <Tiles />            
            <p>News?</p>
        </article>
    )
}

export default Main