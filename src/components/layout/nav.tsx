import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { RandomEx } from '@/util'

const list: string[] = [
    'Home',
    'About',
    'Projects',
    'Contact'
]

const Nav = () => {
    const [menu, setMenu] = useState<boolean>(false)
    const [audio, setAudio] = useState<boolean>(false)

    return <div className="fixed top-16 right-20 flex gap-4 item-center">
        <motion.div
            className="bg-[#F2F2F2] rounded-xl w-20 h-16 click hover"
            whileTap={{
                scale: .8,
                transition: { duration: .1 }
            }}
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
        <Audio
            status={audio}
            onClick={() => setAudio(!audio)}
        />

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
}

interface AudioProps {
    status: boolean
    count?: number
    onClick: () => void
}
const Audio = ({ status = false, count = 6, onClick }: AudioProps) => {
    const [bars, setBars] = useState<number[]>([...new Array(count)].fill(1))

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
        className='w-20 h-14 flex gap-1.5 items-center cursor-pointer click hover'
        onClick={onClick}
        whileTap={{
            scale: .8,
            transition: { duration: .2 }
        }}
    >
        {bars.map((bar, i) => <motion.div
            key={i}
            animate={{
                width: '.5vh',
                height: bar * 10 + '%',
                background: '#000000' + bar * 10,
                borderRadius: '10px'
            }}
            transition={{
                duration: status ? .2 : .5
            }}
        />)}
    </motion.div>
}

export default Nav