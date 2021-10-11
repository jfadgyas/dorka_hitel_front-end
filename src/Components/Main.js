import React from 'react'
import Calc from './Calculator/Calculator'
import Tiles from './Tiles'
import News from './Pages/News'

const Main = () => {

    return (
        <article className='main'>
            <Calc />
            <Tiles />            
            <News />
        </article>
    )
}

export default Main