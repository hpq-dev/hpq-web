
import { useMouse, useMouseClick } from "@/util/mouse"
import { motion } from 'framer-motion'

import { RootState } from '@/hooks'
import { DEFAULT_CURSOR_SIZE, mouseType, setMouse, setMouseSize, setMouseType } from '@/hooks/mouse'
import { useDispatch, useSelector } from 'react-redux'

import { memo } from "react"
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io"

const Cursor = () => {
    const [mouseX, mouseY] = useMouse()
    const { size } = useSelector((state: RootState) => state.mouse.value)

    return <motion.div
        className="fixed w-fit z-10 pointer-events-none flex items-center mix-blend-difference max-md:opacity-0"
        animate={{
            translateX: mouseX - (size / 2),
            translateY: mouseY - (size / 2)
        }}
    >
        <InsideCursor />
    </motion.div>
}

const InsideCursor = memo(() => {
    const {
        size,
        title,
        type
    } = useSelector((state: RootState) => state.mouse.value)

    const [leftClick] = useMouseClick()

    return <>
        <motion.div
            className='relative w-6 h-6 border-2 border-white rounded-full overflow-hidden pointer-events-none'
            animate={{
                width: size,
                height: size,
                scale: leftClick ? .5 : 1
            }}
        >
            {type !== 'normal' && <>
                {{
                    'leftright': <div className="w-full h-full bg-white flex gap-[.3vw] items-center justify-center text-[3vh] relative pointer-events-none">
                        <IoMdArrowRoundBack />
                        <IoMdArrowRoundForward />
                    </div>
                }[type]}
            </>}
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
    </>
})

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
                    title,
                    type: 'normal'
                }))
            },
            onMouseLeave: () => {
                dispatch(setMouse({
                    size: DEFAULT_CURSOR_SIZE,
                    title: '',
                    type: 'normal'
                }))
            }
        }
    }

    const useCursorSize = (size: number) => {
        return {
            onMouseEnter: () => {
                dispatch(setMouseSize(size))
            },
            onMouseLeave: () => {
                dispatch(setMouseSize(DEFAULT_CURSOR_SIZE))
            }
        }
    }

    const useCursorType = (type: mouseType, size: number) => {
        return {
            onMouseEnter: () => {
                dispatch(setMouseSize(size))
                dispatch(setMouseType(type))
            },
            onMouseLeave: () => {
                dispatch(setMouseSize(DEFAULT_CURSOR_SIZE))
                dispatch(setMouseType('normal'))
            }
        }
    }

    return { useCursorEvent, useCursorSize, useCursorType }
}

export default Cursor