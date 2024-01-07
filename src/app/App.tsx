
import Layout from "@/app/layout";
import Loading from "@/app/loading";
import Scroll, { ScrollLayer } from "@/components/customScroll";
import soundEffect from "./soundEffect";

import Background from "@/app/background";
import { setValue } from "@/hooks/scroll";
import { useDispatch, useSelector } from "react-redux";

import Cursor from "@/components/cursor";
import Error from "@/pages/error";
import Home from '@/pages/home';

/**
 * TODO: de pus la protofoliu 3d anim
 * TODO: sa fie butoanele magnetice
 * TODO: de facut deelay cand dai click pe un proiect
 */

import { RootState } from "@/hooks";
import Project from "@/pages/project";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: 'project/:projectID',
                element: <Project />
            }
        ],
        errorElement: <Error />
    }
]);

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
                    onPos={(props) => dispatch(setValue(props))}
                    pos={[setX, setY]}
                >
                    <RouterProvider router={router} />
                </Scroll>
            </div>
            <Loading />
        </div>
    </ScrollLayer>
};

export default App