import useMouse from "@/util/mouse"
import useWindow from "@/util/window"
import { getPosition } from '@/util/parallax'
import { motion } from 'framer-motion'

interface AstronautProps {
    x: number
    y: number
    distance?: number
}

export default function Astronaut({ x, y, distance = 1 }: AstronautProps) {
    const [windowWidth, windowHeight] = useWindow()
    const [mouseX, mouseY] = useMouse()

    return <motion.div
        className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        animate={{
            left: x + getPosition(mouseX, windowWidth, distance),
            top: y + getPosition(mouseY, windowHeight, distance)
        }}
        transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 1
        }}
    >
        <img
            src={'/astronaut.svg'}
            alt="astronaut"
        />
    </motion.div>
}