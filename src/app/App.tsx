
import Layout from "@/app/layout";
import Scroll, { ScrollLayer } from "@/components/scroll";
import soundEffect from "./soundEffect";
import Loading from "@/app/loading";

import { setValue } from "@/hooks/scroll";
import { useDispatch } from "react-redux";
import Background from "@/app/background";

import Home from '@/pages/home'
import Cursor from "@/components/cursor";

const App = () => {
    soundEffect()

    const dispatch = useDispatch()

    return <ScrollLayer>
        <Background />
        <Cursor />
        <Layout />
        <Scroll
            touch={true}
            scrollbar={false}
            onPos={(props) => dispatch(setValue(props))}
        >
            <Home />
        </Scroll>
        <Loading />
    </ScrollLayer>
};

export default App