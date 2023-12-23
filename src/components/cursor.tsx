
import { motion } from 'framer-motion'
import { useMouse, useMouseClick } from "@/util/mouse"

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/hooks'
import { DEFAULT_CURSOR_SIZE, setMouse } from '@/hooks/mouse'


const Cursor = () => {
    const [mouseX, mouseY] = useMouse()
    const [leftClick] = useMouseClick()

    const {
        size,
        title
    } = useSelector((state: RootState) => state.mouse.value)

    
    return <motion.div
        className="fixed w-fit z-10 pointer-events-none flex items-center mix-blend-difference max-md:opacity-0"
        // animate={{
        //     translateX: mouseX - (size / 2),
        //     translateY: mouseY - (size / 2),
        // }}
        style={{
            transform: `translate(${mouseX - (size / 2)}px, ${mouseY - (size / 2)}px)`
        }}
    >
        <motion.div
            className='relative w-6 h-6 border-2 border-white rounded-full'
            animate={{
                width: size,
                height: size,
                scale: leftClick ? .5 : 1
            }}
        >

        </motion.div>
        <motion.div
            key={title}
            className='font-pain whitespace-nowrap text-white'
            animate={{
                opacity: [0, 0, 1],
                translateX: [70, 5]
            }}
            transition={{
                duration: .5
            }}
        >
            {title}
        </motion.div>
    </motion.div>
}

export const useCursor = () => {
    const dispatch = useDispatch()

    const useCursorEvent = (
        title: string,
        size: number = DEFAULT_CURSOR_SIZE
    ) => {
        return {
            onMouseEnter: () => {
                dispatch(setMouse({
                    size,
                    title
                }))
            },
            onMouseLeave: () => {
                dispatch(setMouse({
                    size: DEFAULT_CURSOR_SIZE,
                    title: ''
                }))
            }
        }
    }

    return { useCursorEvent }
}

export default Cursor