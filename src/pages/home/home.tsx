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
        <div style={{ height: '100vh' }}>
            <Astronaut />
            <div className="relative text-[150px] font-pain w-full text-center pt-56 max-md:text-[80px] max-md:pt-40">
                <TextAnim
                    text='Hello there!\nI am web developer'
                    duration={5}
                    delay={2}
                    appendDelay={2.2}
                />
            </div>
        </div>
    </SetBackground>
}

export default Home