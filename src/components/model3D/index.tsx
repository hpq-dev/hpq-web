import { motion } from 'framer-motion';
import './index.css';

import React, { memo, useEffect, useRef, useState } from 'react';

interface props {
    children: React.ReactNode
    multiply?: number
}

const Box3D = ({ children, multiply = 20 }: props) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [size, setSize] = useState<[number, number]>([0, 0])
    const [pos, setPos] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        if (!ref.current)
            return

        const parent: HTMLDivElement = ref.current
        const { width, height } = parent.getBoundingClientRect()

        setSize([width, height])
    }, [ref.current])

    const [width, height] = size
    const [x, y] = pos

    return (
        <motion.div
            ref={ref}
            className='relative model3D'
            style={{
                '--brightness': (multiply + y) / multiply,
                '--x': x + 'deg',
                '--y': y + 'deg'
            } as any}
            onMouseMove={e => {
                const { left, top } = e.currentTarget.getBoundingClientRect();

                const x = e.clientX - left
                const y = e.clientY - top

                setPos([
                    multiply * ((x - width / 2) / width),
                    -multiply * ((y - height / 2) / height)
                ]);
            }}
        >
            <div
                className='relative w-full h-full content'
            >
                {children}
            </div>
        </motion.div>
    );
}

export default memo(Box3D)