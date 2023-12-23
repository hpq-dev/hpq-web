import { SetBackground } from "@/app/background"
import ItemProject from "./item"
import Scroll from "@/components/customScroll"
import store from "../../../data/projects"
import { useDispatch, useSelector } from "react-redux"
import { setAstronaut } from "@/hooks/astronaut"
import { useEffect, useRef, useState } from "react"
import useWindow from "@/util/window"
import { motion } from 'framer-motion'
import { useProcentage } from "@/util"

import { Outlet, useNavigate, useParams } from "react-router-dom"
import { setScroll } from "@/hooks/scroll"
import { RootState } from "@/hooks"

const Projects = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [innerWidth] = useWindow()
    const { projectID } = useParams()

    const { y } = useSelector((state: RootState) => state.scroll.value)

    const ref = useRef<HTMLDivElement | null>(null)
    const [progress, setProgress] = useState<[number, number]>([0, 0])

    let procent: number = (40 - useProcentage(progress[0], progress[1]))
    if (procent < 0) procent = -procent


    useEffect(() => {
        if (projectID == undefined) {
            dispatch(setScroll([0,0]))
            return
        }

        const parent = ref.current

        if (!parent)
            return

        const { top } = parent.getBoundingClientRect()

        dispatch(setScroll([0, y + top + 10]))
    }, [ref, projectID])

    return <SetBackground
        color="#000"
        onObserver={() => dispatch(setAstronaut({
            x: 60,
            y: 300,
            scale: .3,
            rotate: 20
        }))}
    >
        <div
            className="relative w-full overflow-hidden h-auto"
            ref={ref}
        >
            <div className="relative w-full h-[100vh] flex items-center">
                <div className="text-white w-[40vw] text-center absolute left-0 max-md:left-4" style={{
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
                    <div className="relative h-[100vh] w-fit flex items-center pl-[40vw] max-md:pl-[60vw]">
                        <div className="relative flex flex-col flex-wrap h-full justify-center gap-[4vh]">
                            {store.map((props, i) => {
                                const translateX: string = i * (procent * (!(i % 2) ? .15 : .2)) + '%'

                                return <motion.div
                                    className="hover click"
                                    key={i}
                                    animate={window.innerWidth > 700 && {
                                        translateX
                                    } || {}}
                                    transition={{
                                        duration: .3
                                    }}
                                    onClick={() => navigate(`project/${i}`)}
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
            <Outlet />
        </div>
    </SetBackground>
}

export default Projects