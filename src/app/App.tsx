
import Layout from "@/app/layout";
import Scroll, { ScrollLayer } from "@/components/customScroll";
import soundEffect from "./soundEffect";
import Loading from "@/app/loading";

import { setValue } from "@/hooks/scroll";
import { useDispatch, useSelector } from "react-redux";
import Background from "@/app/background";

import Home from '@/pages/home'
import Cursor from "@/components/cursor";
import Error from "@/pages/error";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Project from "@/pages/project";
import { RootState } from "@/hooks";

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
        <div className="w-full h-[100vh] fixed left-0 top-0 overflow-hidden">
            <Background />
            <Cursor />
            <Layout />
            <Scroll
                touch={true}
                scrollbar={false}
                onPos={(props) => dispatch(setValue(props))}
                pos={[setX, setY]}
            >
                <RouterProvider router={router} />
            </Scroll>
            <Loading />
        </div>
    </ScrollLayer>
};

export default App