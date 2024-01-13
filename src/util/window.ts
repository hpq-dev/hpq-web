import { useEffect, useState } from 'react'

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

export const VH = (procent: number) => window.innerHeight * (procent / 100)
export const VW = (procent: number) => window.innerWidth * (procent / 100)

export default useWindow