import { motion } from "framer-motion"
import { memo, useEffect, useMemo, useState } from "react"

interface props {
    text: string
    delay: number
    duration: number
    appendDelay?: number
}

interface animProps {
    children: string
    ind: number
    duration: number
    delay: number
}

const AnimChar = ({ children, ind, duration, delay }: animProps) => {

    const chars = useMemo(() => children.split(''), [children])

    return <div className="flex">
        {chars.map((char, i) => <motion.p
            className="opacity-0"
            key={i}
            animate={{
                opacity: [0, 1],
                filter: [`blur(2vh)`, `blur(0vh)`],
                translateY: ['-5vh', '0vh']
            }}
            transition={{
                duration: duration,
                delay: (ind + i) * delay
            }}
        >
            {char}
        </motion.p>)}
    </div>
}

const TextAnim = ({
    text, delay, duration, appendDelay = 0
}: props) => {
    const [appendTime, setAppendTime] = useState<number>(appendDelay)

    useEffect(() => {
        const timer = setInterval(() => setAppendTime(prev => --prev), 1000)
        return () => clearInterval(timer)
    }, [appendTime])

    const countChar: number = useMemo(() => text.replace(' ', '').replace('\\n', '').length, [text])

    const _duration: number = (duration-delay) / countChar
    const _delay: number = delay / countChar

    const parts = useMemo(() => {
        const ret = []
        let i = 0;

        for (let part of text.split(' ')) {
            if (!part.includes("\\n")) {
                ret.push(<AnimChar
                    ind={i}
                    duration={_duration}
                    delay={_delay}
                >{part}</AnimChar>)
                i += part.length
            }
            else {
                const split = part.split('\\n')
                ret.push(<AnimChar
                    ind={i}
                    duration={_duration}
                    delay={_delay}
                >{split[0]}</AnimChar>)
                i += split[0].length
                ret.push(<div className="w-full relative" />)

                ret.push(<AnimChar
                    ind={i}
                    duration={_duration}
                    delay={_delay}
                >{split[1]}</AnimChar>)
                i += split[1].length
            }
        }

        return ret
    }, [text])

    if (appendTime > 0)
        return null

    return <div className="flex gap-x-[8vh] flex-wrap justify-center h-fit">
        {parts}
    </div>
}

export default memo(TextAnim)