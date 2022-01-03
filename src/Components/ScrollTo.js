import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollTo = () => {
    
    const where = useLocation()
    
    useEffect(() => {
        where.hash ? 
        window.scrollTo({
            top: document.querySelector(where.hash).offsetTop,
            left: 0,
            behavior: 'smooth'
        })
        :
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [where])

    return null
}

export default ScrollTo