import { useState, useEffect } from 'react'

export default (props) => {

    const [height, setHeight] = useState(700)
    useEffect(() => {
        const resized = () => {
            setHeight(document.documentElement.clientHeight)
        }
        resized()
        window.addEventListener('resize', resized);
        return () => {
            window.removeEventListener('resize', resized)
        }
    },[height]);
    return height
}