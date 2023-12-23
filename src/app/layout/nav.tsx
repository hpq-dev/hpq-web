import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { RandomEx } from '@/util'
import { useCursor } from '../../components/cursor'

const list: string[] = [
    'Home',
    'About',
    'Projects',
    'Contact'
]
interface props {
    show: boolean
}

const Nav = ({ show }: props) => {
    const [menu, setMenu] = useState<boolean>(false)
    const [audio, setAudio] = useState<boolean>(false)

    const { useCursorEvent } = useCursor()

    return <>
        <motion.div
            animate={!show ? {
                opacity: 0,
                translateY: -100
            } : {
                opacity: 1,
                translateY: 0
            }}
        >
            <div className="fixed top-16 right-40 flex gap-4 item-center z-[2] max-md:top-4 max-md:right-28">
                <motion.div
                    className="bg-[#F2F2F2] rounded-xl w-20 h-16 click hover"
                    whileTap={{
                        scale: .8,
                        transition: { duration: .1 }
                    }}
                    {...useCursorEvent('Menu', 100)}
                    onClick={() => setMenu(!menu)}
                >
                    <motion.div
                        whileHover={{
                            rotate: 180,
                            transition: { duration: .3 }
                        }}
                        className='flex justify-center items-center w-full h-full gap-2 cursor-pointer'
                    >
                        <div className='relative rounded-full w-3 h-3 bg-black' />
                        <div className='relative rounded-full w-3 h-3 bg-black' />
                    </motion.div>
                </motion.div>

                <motion.ul
                    className='absolute top-0 w-40 h-fit bg-[#F2F2F2] mt-20 rounded-xl shadow-lg flex flex-wrap p-2 overflow-hidden'
                    animate={!menu ? {
                        opacity: 0,
                        pointerEvents: 'none',
                        translateY: 80,
                        rotate: -25
                    } : {
                        opacity: 1,
                        pointerEvents: 'all'
                    }}
                    transition={{
                        duration: .3
                    }}
                >
                    {list.map((name, i: number) => <motion.li
                        className='font-pain text-3xl text-[#00000040] w-full text-center p-1 cursor-pointer border-b-2 border-[#00000005] hover click'
                        key={i}
                        whileHover={{
                            skewX: -35,
                            transition: { duration: .2 }
                        }}
                        whileTap={{
                            scale: 1.1,
                            transition: { duration: .1 }
                        }}
                    >{name}</motion.li>)}
                </motion.ul>
            </div>
            <Audio
                status={audio}
                onClick={() => setAudio(!audio)}
            />
        </motion.div>
    </>
}

interface AudioProps {
    status: boolean
    count?: number
    onClick: () => void
}
const Audio = ({ status = false, count = 6, onClick }: AudioProps) => {
    const [bars, setBars] = useState<number[]>([...new Array(count)].fill(1))

    const { useCursorEvent } = useCursor()

    useEffect(() => {
        if (status) {
            const timer = setInterval(() => {
                setBars(prev => {
                    prev = [...new Array(count)].map(() => RandomEx(1, 10))
                    return prev
                })
            }, 200)

            return () => clearInterval(timer)
        } else setBars([...new Array(count)].fill(1))
    }, [status])

    return <motion.div
        className='fixed top-16 z-[2] right-12 w-20 h-14 flex gap-1.5 items-center cursor-pointer click hover mix-blend-difference max-md:top-4 max-md:right-2'
        onClick={onClick}
        whileTap={{
            scale: .8,
            transition: { duration: .2 }
        }}
        {...useCursorEvent('Audio Toggle', 40)}
    >
        {bars.map((bar, i) => <motion.div
            key={i}
            animate={{
                width: '.5vh',
                height: bar * 10 + '%',
                background: '#ffffff' + bar * 10,
                borderRadius: '10px'
            }}
            transition={{
                duration: status ? .2 : .5
            }}
        />)}
    </motion.div>
}

export default Nav