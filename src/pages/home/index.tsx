import { SetBackground } from '@/app/background'
import { lazy } from 'react'

import About from './about'
import Projects from './projects'
import Contact from './contact'

const Astronaut = lazy(() => import('@/components/astronaut'))

const Home = () => {
    return <>
        <SetBackground color="#ffffff url('/grid.svg')">
            <div style={{ height: '100vh' }}>
                <Astronaut
                    x={50}
                    y={300}
                />
                <div className="relative text-[150px] font-pain w-full text-center pt-56 max-md:text-[80px]">
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