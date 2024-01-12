import { SetBackground } from "@/app/background"
import TextAnim from "@/components/textAnim"
import { setAstronaut } from "@/hooks/astronaut"
import { lazy } from "react"
import { useDispatch } from "react-redux"

const Astronaut = lazy(() => import('@/components/astronaut'))

const Home = () => {
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
        <div style={{ height: '100vh' }} className="relative">
            <Astronaut />
            <div className="relative text-[150px] font-pain w-full text-center pt-32 max-md:text-[80px] max-md:pt-40">
                <TextAnim
                    text='Hello there!\nI am web developer'
                    duration={5}
                    delay={2}
                    appendDelay={2.2}
                />
            </div>
            <img
                className="w-full h-[70vh] object-cover absolute bottom-0 grayscale-[60%]"
                style={{
                    mask: `linear-gradient(0deg, transparent, white 20%, white 30%, transparent)`,
                    WebkitMask: `linear-gradient(0deg, transparent, white 20%, white 30%, transparent)`
                }}
                src='/feature.webp'
            />
        </div>
    </SetBackground>
}

export default Home