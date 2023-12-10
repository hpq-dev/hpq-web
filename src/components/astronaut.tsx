import { useState, useEffect } from 'react'
import { useMouse } from "@/util/mouse"
import useWindow from "@/util/window"
import { getPosition } from '@/util/parallax'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/hooks'

interface AstronautProps {
    x: number
    y: number
    distance?: number
}

export default function Astronaut({ x, y, distance = 1 }: AstronautProps) {
    const [show, setShow] = useState<boolean>(false)

    const [windowWidth, windowHeight] = useWindow()
    const [mouseX, mouseY] = useMouse()

    const scrollY: number = useSelector((state: RootState) => state.scroll.value.y)

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
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        animate={{
            left, top, translateX, translateY
        }}
        transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 1,
            top: {
                duration: 1
            }
        }}
    >
        <img
            src={'/astronaut.svg'}
            alt="astronaut"
        />
    </motion.div>
}