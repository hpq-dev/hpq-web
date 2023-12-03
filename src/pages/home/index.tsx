import { SetBackground } from '@/app/background'
import { lazy } from 'react'

import About from './about'
import Projects from './projects'

const Astronaut = lazy(() => import('@/components/astronaut'))

const Home = () => {
    return <>
        <SetBackground color="#ffffff url('/grid.svg')">
            <div style={{ height: '100vh' }}>
                <Astronaut
                    x={1000}
                    y={600}
                />
                <div className="relative text-[150px] font-pain w-full text-center pt-56">
                    Hello there!<br />
                    I am web developer
                </div>
            </div>
        </SetBackground>
        <About />
        <Projects />
    </>
}

export default Home