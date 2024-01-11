import { SetBackground } from "@/app/background"
import Scroll from "@/components/customScroll"
import { setAstronaut } from "@/hooks/astronaut"
import { useProcentage } from "@/util"
import useWindow from "@/util/window"
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import items from "../../../data/projects"
import ItemProject from "./item"

import { useObserverOfScroll } from "@/components/customScroll/utils"
import store from "@/hooks"
import { setScroll } from "@/hooks/scroll"
import { useNavigate, useParams } from "react-router-dom"

import FocusSound from '@/assets/sounds/focus.wav'

const Projects = () => {
    const [observerRef, inView] = useObserverOfScroll({ range: .6 })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [innerWidth] = useWindow()
    const { projectID } = useParams()

    const ref = useRef<HTMLDivElement | null>(null)
    const [progress, setProgress] = useState<[number, number]>([0, 0])

    let procent: number = (40 - useProcentage(progress[0], progress[1]))
    if (procent < 0) procent = -procent

    useEffect(() => {
        if (projectID == undefined) {
            dispatch(setScroll([0, 0]))
            return
        }

        const parent = ref.current

        if (!parent)
            return

        const { top } = parent.getBoundingClientRect()
        const { y } = store.getState().scroll.value

        dispatch(setScroll([0, y + top + 30]))
    }, [ref, projectID])

    useEffect(() => {
        console.log(inView)
        if (!inView)
            return

        try {
            const sound = new Audio(FocusSound)

            sound.volume = .1
            sound.play()
        } catch { }
    }, [inView])

    return <SetBackground
        color="#000"
        onObserver={() => {
            dispatch(setAstronaut({
                x: 60,
                y: 300,
                scale: .3,
                rotate: 20
            }))
        }}
    >
        <div
            className="relative w-full overflow-hidden h-auto py-[20vh]"
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
                <motion.div
                    ref={observerRef}
                    animate={!inView ? {
                        opacity: 0,
                        translateX: '20vw'
                    } : {
                        opacity: 1,
                        translateX: '0vw'
                    }}
                    transition={{
                        duration: .5
                    }}
                >
                    <Scroll
                        scrollbar={false}
                        touch={true}
                        onPos={({ x, maxX }) => setProgress([x, maxX])}
                    >
                        <div className="relative h-[100vh] w-fit flex items-center pl-[40vw] max-md:pl-[60vw]">
                            <div className="relative flex flex-col flex-wrap h-full justify-center gap-[4vh]">
                                {items.map((props, i) => {
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
                </motion.div>
            </div>
        </div>
    </SetBackground>
}

export default Projects