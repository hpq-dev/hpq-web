
import Layout from "@/components/layout";
import Scroll, { ScrollLayer } from "@/components/scroll";
import soundEffect from "./soundEffect";
import Loading from "@/components/loading";

import { setValue } from "@/hooks/scroll";
import { useDispatch } from "react-redux";

import { lazy } from 'react'

const Astronaut = lazy(() => import('@/components/astronaut'))

const App = () => {
    soundEffect()

    const dispatch = useDispatch()

    return <ScrollLayer>
        <Layout />
        <Scroll
            touch={true}
            scrollbar={false}
            onPos={(props) => dispatch(setValue(props))}
        >
            <div style={{ height: '300vh' }}>
                <div className="relative text-[150px] font-pain w-full text-center pt-56">
                    Hello there!<br />
                    I am web developer
                </div>
                <Astronaut
                    x={1000}
                    y={600}
                />
            </div>
        </Scroll>
        <Loading />
    </ScrollLayer>
};

export default App