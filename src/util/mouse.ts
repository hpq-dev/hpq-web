import { useEffect, useState } from 'react'

const useMouse = (): [number, number] => {
    const [pos, setPos] = useState<[number, number]>([0, 0])

    useEffect(() => {
        const handler = ({ clientX, clientY }: MouseEvent) => {
            setPos([clientX, clientY])
        }

        window.addEventListener('mousemove', handler)
        return () => window.removeEventListener('mousemove', handler)
    }, [])

    return pos
}

export default useMouse