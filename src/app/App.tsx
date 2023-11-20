import Astronaut from "@/components/astronaut";
import Layout from "@/components/layout";
import Scroll, { ScrollLayer } from "@/components/scroll";
import soundEffect from "./soundEffect";
import Loading from "@/components/loading";

const App = () => {
    soundEffect()

    return <ScrollLayer>
        <Layout />
        <Scroll touch={true}>
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