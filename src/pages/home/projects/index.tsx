import { SetBackground } from "@/app/background"
import ItemProject from "./item"
import Scroll from "@/components/scroll"
import store from "./store"

const Projects = () => {
    return <SetBackground color="#000">
        <div className="w-full h-[100vh] flex items-center">
            <Scroll scrollbar={false} touch={true}>
                <div className="h-[100vh] w-fit flex items-center">
                    <div className="text-white w-[60vw] text-center">
                        <h1 className="font-bold mb-[1vh]">NEXT FEATURE</h1>
                        <p className="relative text-justify w-[24vh] m-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </p>
                    </div>
                    <div className="flex flex-col flex-wrap h-full justify-center gap-[4vh]">
                        {store.map((props, i) => <ItemProject 
                            {...props}
                            key={i}
                        />)}    
                    </div>
                </div>
            </Scroll>
        </div>
    </SetBackground>
}

export default Projects