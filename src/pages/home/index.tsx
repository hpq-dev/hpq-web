import { SetBackground } from '@/app/background'
import { lazy } from 'react'
import { useDispatch } from 'react-redux'
import { setAstronaut } from '@/hooks/astronaut'

import About from './about'
import Projects from './projects'
import Contact from './contact'

const Astronaut = lazy(() => import('@/components/astronaut'))

const Home = () => {
    const dispatch = useDispatch()

    return <>
        <SetBackground
            color="#ffffff url('/grid.svg')"
            onObserver={() => dispatch(setAstronaut({
                x: 50,
                y: 300,
                scale: 1,
                rotate: 0
            }))}
        >
            <div style={{ height: '100vh' }}>
                <Astronaut />
                <div className="relative text-[150px] font-pain w-full text-center pt-56 max-md:text-[80px] max-md:pt-40">
                    Hello there!<br />
                    I am web developer
                </div>
            </div>
        </SetBackground>
        <About />
        <Projects />
        <Contact />
    </>
}

export default Home