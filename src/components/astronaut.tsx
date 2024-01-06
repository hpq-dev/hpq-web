import { RootState } from '@/hooks'
import { useMouse } from "@/util/mouse"
import { getPosition } from '@/util/parallax'
import useWindow from "@/util/window"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface AstronautProps {
    distance?: number
}

export default function Astronaut({ distance = 1 }: AstronautProps) {
    const [show, setShow] = useState<boolean>(false)

    const [windowWidth, windowHeight] = useWindow()
    const [mouseX, mouseY] = useMouse()

    const scrollY: number = useSelector((state: RootState) => state.scroll.value.y)

    const { x, y, scale, rotate} = useSelector((state: RootState) => state.astronaut.value)

    const left: number = (windowWidth * (x / 100))
    const top: number = scrollY + y

    
    const translateX: number = getPosition(mouseX, windowWidth, distance)
    const translateY: number = getPosition(mouseY, windowHeight, distance)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000)

        return () => clearTimeout(timer)
    }, [])

    if (!show)
        return null

    return <motion.div
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-10 w-fit h-fit"
        animate={{
            left, top, translateX, translateY, scale, rotate, opacity: window.innerWidth > 700 ? 1 : 0
        }}
        transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 1,
            top: {
                duration: 1
            },
            left: {
                duration: 1
            }
        }}
    >
        <img
            className='relative h-[70vh]'
            src={'/astronaut.svg'}
            alt="astronaut"
        />
    </motion.div>
}