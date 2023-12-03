import { useEffect, useRef, useState } from 'react'
import { RootState } from "@/hooks"
import { useDispatch, useSelector } from "react-redux"
import { setColor, removeColor } from '@/hooks/background'

const Background = () => {
    const [background, setBackground] = useState<string>('#ffffff')
    const { y } = useSelector((state: RootState) => state.scroll.value)
    const { colors } = useSelector((state: RootState) => state.background.value)

    useEffect(() => {
        colors.forEach(({pos, color}) => {
            if(y < pos - (window.innerHeight / 2))
                return

            setBackground(color)
        })
    }, [y, colors])

    return <div
        className="fixed w-full h-full top-0 left-0 z-[-1] transition-all duration-1000"
        style={{
            background
        }}
    />
}

interface setBackgroundProps {
    children: React.ReactNode
    color: string
}

export const SetBackground = ({ children, color }: setBackgroundProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const element = ref.current
        if (!element)
            return

        const { y } = element.getBoundingClientRect()

        dispatch(setColor({
            color,
            pos: y
        }))

        return () => {
            dispatch(removeColor(y))
        }
    }, [])

    return <div ref={ref}>
        {children}
    </div>
}

export default Background