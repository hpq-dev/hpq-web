import { SetBackground } from "@/app/background"
import TextAnim from "@/components/textAnim"
import { setAstronaut } from "@/hooks/astronaut"
import { motion } from 'framer-motion'
import { Ref, forwardRef, lazy } from "react"
import { useDispatch } from "react-redux"

const Astronaut = lazy(() => import('@/components/astronaut'))

const Home = ({}, ref: Ref<HTMLDivElement>) => {
    const dispatch = useDispatch()

    return <SetBackground
        color="#ffffff url('/grid.svg')"
        onObserver={() => dispatch(setAstronaut({
            x: 35,
            y: 450,
            scale: .5,
            rotate: 0
        }))}
    >
        <div className="relative h-[1080px]" ref={ref}>
            <Astronaut />
            <div className="relative text-[150px] font-pain w-full text-center pt-32 max-md:text-[80px] max-md:pt-40">
                <TextAnim
                    text='Hello there!\nI am web developer'
                    duration={5}
                    delay={2}
                    appendDelay={2.15}
                />
            </div>
            <motion.img
                className="w-full h-[700px] object-cover absolute bottom-0 grayscale-[60%] pointer-events-none"
                style={{
                    mask: `linear-gradient(0deg, transparent, white 20%, white 30%, transparent)`,
                    WebkitMask: `linear-gradient(0deg, transparent, white 20%, white 30%, transparent)`
                }}
                animate={{
                    opacity: [0, 1],
                    scaleY: [.8, 1]
                }}
                transition={{
                    duration: 1,
                    delay: 2.5
                }}
                src='/feature.webp'
            />
        </div>
    </SetBackground>
}

export default forwardRef(Home)