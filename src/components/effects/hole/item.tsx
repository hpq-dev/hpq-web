import { RandomEx, range } from '@/util'
import { VH, VW } from '@/util/window'
import { SpringOptions, motion, useMotionValueEvent, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export interface itemProps {
    size: number
    src: string
}

interface props extends itemProps {
    end?: number
    ind: number
}

const configAnim: SpringOptions = {
    stiffness: 5,
    damping: 10
}

const Item = ({
    size,
    src,
    end = -30,
    ind
}: props) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [max, setMax] = useState<number>(size)

    const x = useSpring(0, configAnim)
    const y = useSpring(0, configAnim)
    const scale = useSpring(1, configAnim)
    const opacity = useSpring(1, configAnim)
    const rotate = useSpring(0, configAnim)

    useEffect(() => setMax(ref.current?.clientWidth ?? size), [ref, size])

    useEffect(() => {
        x.jump(VH(size * 2))
        setTimeout(() => {
            x.set(VW(end))
            y.jump(RandomEx(3, 10))
            scale.set(0)
            opacity.set(0)
            rotate.jump(RandomEx(0, 360))
            rotate.set(RandomEx(0, 360))
        }, RandomEx(500, 8000))
    }, [])

    const completed = () => {
        x.jump(VH(size * 2))
        scale.jump(1)
        opacity.jump(1)
        y.jump(RandomEx(3, 10))

        x.set(VW(end))
        scale.set(0)
        opacity.set(0)
        rotate.jump(RandomEx(0, 360))
        rotate.set(RandomEx(0, 360))
    }

    useMotionValueEvent(x, 'change', (value) => {
        if (range(value, VW(end), VW(1))) completed()
    })


    return <motion.div
        className="w-fit h-fit absolute p-[2vh] bg-white right-0 pointer-events-none"
        style={{
            top: (ind * max) * 10,
            x,
            y,
            scale,
            opacity,
            rotate
        }}
    >
        <img
            className="w-auto relative"
            style={{ height: (size * 10) + 'px' }}
            src={src}
            alt="item"
        />
    </motion.div>
}

export default Item