import { lazy } from 'react'
const Astronaut = lazy(() => import('@/components/astronaut'))

const Home = () => {
    return <div style={{ height: '300vh' }}>
        <div className="relative text-[150px] font-pain w-full text-center pt-56">
            Hello there!<br />
            I am web developer
        </div>
        <Astronaut
            x={1000}
            y={600}
        />
    </div>
}

export default Home