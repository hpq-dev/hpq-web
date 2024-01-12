
import Layout from "@/app/layout";
import Loading from "@/app/loading";
import Scroll, { ScrollLayer } from "@/components/customScroll";
import soundEffect from "./soundEffect";

import Background from "@/app/background";
import { setValue } from "@/hooks/scroll";
import { useDispatch, useSelector } from "react-redux";

import Cursor from "@/components/cursor";

/**
 * TODO: create in about random images of about which it go in inside
 * TODO: to solved sound system and add other feature
 * TODO: to completed all projects
 */

import { RootState } from "@/hooks";
import Project from "@/pages/home/project";
import { Outlet } from "react-router-dom";

const App = () => {
    soundEffect()

    const dispatch = useDispatch()

    const { setX, setY } = useSelector((state: RootState) => state.scroll.value)

    return <ScrollLayer>
        <div
            className="w-full h-[100vh] fixed left-0 top-0 overflow-hidden bg-[#000]"
        >
            <Background />
            <Cursor />
            <Layout />
            <Project />
            <div
                className="w-full h-full relative"
                style={{
                    mask: `linear-gradient(0deg, transparent, white 20%, white 80%, transparent)`,
                    WebkitMask: `linear-gradient(0deg, transparent, white 20%, white 80%, transparent)`
                }}
            >
                <Scroll
                    touch={true}
                    scrollbar={false}
                    onPos={(props: any) => dispatch(setValue(props))}
                    pos={[setX, setY]}
                >
                    <Outlet />
                </Scroll>
            </div>
            <Loading />
        </div>
    </ScrollLayer>
};

export default App