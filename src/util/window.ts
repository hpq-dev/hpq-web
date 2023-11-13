import { useState, useEffect } from 'react'

const useWindow = (): [number, number] => {
    const [size, setSize] = useState<[number, number]>([0, 0])

    useEffect(() => {
        const setResize = () => {
            const { innerWidth, innerHeight } = window

            setSize([innerWidth, innerHeight])
        }

        setResize()

        window.addEventListener('resize', setResize)
        return () => window.removeEventListener('resize', setResize)
    }, [])

    return size
}

export default useWindow