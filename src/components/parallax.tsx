import Image from '@/assets/image.webp'
import { RandomEx } from '@/util'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface imageProps {
    x: number
    y: number
    scale: number
    opacity: number
    src: string
}

const ImagesParallax = () => {

    const [images, setImages] = useState<imageProps[]>([])

    useEffect(() => {
        setInterval(() => {
            setImages(prev => {
                prev = [...new Array(20)].map((_, i) => ({
                    x: (i / 3) * 450,
                    y: (i % 3) * 300,
                    scale: RandomEx(5, 7) / 10,
                    opacity: 1,
                    src: Image
                }))
                return prev
            })
        }, 500)
    }, [])

    return <div
        className="fixed w-full h-full left-0 top-0"
        style={{
            perspective: '1000px',
            transform: `matrix3d(
                0.09603126246215163,	-0.0018518317973597893,	0,	-0.000007742089436997242,
                -0.022099447513812154,	-0.001028295276131436,	0,	-0.0024676615708461246,
                0,	0,	1,	0,
                8,	39,	0,	1
                )`
        }}
    >
        <motion.div
            className=" w-full h-full"
            style={{
                transformOrigin: 'left',
                transform: 'translateX(50%) translateY(-50%) rotate(90deg) scale(.5, 3)'
            }}
        >
            {images.map(({ src, opacity, x, y, scale }, i) => <motion.div
                className='absolute w-128 h-52'
                animate={{
                    left: x,
                    top: y,
                    opacity,
                    scale
                }}
                transition={{
                    duration: .5
                }}
            >
                <img
                    key={i}
                    src={src}
                    alt='image'
                />
            </motion.div>)}
        </motion.div>
    </div>
}

export default ImagesParallax