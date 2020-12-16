import { useState, useEffect } from 'react'

export default () => {
    const [width, setWidth] = useState(10);
    
    useEffect(() => {
        const resized = () => {
            setWidth(document.documentElement.clientWidth);
          
        }
        resized()
        window.addEventListener('resize', resized);
        return () => {
          
            window.removeEventListener('resize', resized)
        }
    },[width]);
    return width
}