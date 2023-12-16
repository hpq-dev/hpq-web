import { SetBackground } from "@/app/background"
import ItemProject from "./item"
import Scroll from "@/components/customScroll"
import store from "./store"
import { useDispatch } from "react-redux"
import { setAstronaut } from "@/hooks/astronaut"
import { useState } from "react"
import useWindow from "@/util/window"
import { motion } from 'framer-motion'
import { useProcentage } from "@/util"

const Projects = () => {
    const dispatch = useDispatch()

    const [progress, setProgress] = useState<[number, number]>([0, 0])
    const [innerWidth] = useWindow()

    let procent: number = (40 - useProcentage(progress[0], progress[1]))
    if (procent < 0) procent = -procent

    return <SetBackground
        color="#000"
        onObserver={() => dispatch(setAstronaut({
            x: 60,
            y: 300,
            scale: .3,
            rotate: 20
        }))}
    >
        <div className="w-full h-[100vh] flex items-center">
            <div className="text-white w-[40vw] text-center absolute left-0" style={{
                opacity: 1 - (progress[0] / (innerWidth * .2)),
                transform: `scale(${1 - (progress[0] / (innerWidth * .6))})`
            }}>
                <h1 className="font-bold mb-[1vh]">NEXT FEATURE</h1>
                <p className="relative text-justify w-[24vh] m-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </p>
            </div>
            <Scroll
                scrollbar={false}
                touch={true}
                onPos={({ x, maxX }) => setProgress([x, maxX])}
            >
                <div className="h-[100vh] w-fit flex items-center pl-[40vw]">
                    <div className="flex flex-col flex-wrap h-full justify-center gap-[4vh]">
                        {store.map((props, i) => {
                            const translateX: string = i * (procent * (!(i % 2) ? .15 : .2)) + '%'

                            return <motion.div
                                key={i}
                                animate={{
                                    translateX
                                }}
                                transition={{
                                    duration: .3
                                }}
                            >
                                <ItemProject
                                    {...props}
                                />
                            </motion.div>
                        })}
                    </div>
                </div>
            </Scroll>
        </div>
    </SetBackground>
}

export default Projects