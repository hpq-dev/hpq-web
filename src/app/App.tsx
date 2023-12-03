
import Layout from "@/components/layout";
import Scroll, { ScrollLayer } from "@/components/scroll";
import soundEffect from "./soundEffect";
import Loading from "@/components/loading";

import { setValue } from "@/hooks/scroll";
import { useDispatch } from "react-redux";

import Home from '@/pages/home'
import About from "@/pages/about";
import Background from "@/components/background";

const App = () => {
    soundEffect()

    const dispatch = useDispatch()

    return <ScrollLayer>
        <Background />
        <Layout />
        <Scroll
            touch={true}
            scrollbar={false}
            onPos={(props) => dispatch(setValue(props))}
        >
            <Home />
            <About />
        </Scroll>
        <Loading />
    </ScrollLayer>
};

export default App