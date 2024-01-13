import { SetBackground } from "@/app/background"
import Scroll from "@/components/customScroll"
import { setAstronaut } from "@/hooks/astronaut"
import { useProcentage } from "@/util"
import useWindow from "@/util/window"
import { motion } from 'framer-motion'
import { Ref, forwardRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import items from "../../../data/projects"
import ItemProject from "./item"

import { useObserverOfScroll } from "@/components/customScroll/utils"
import store, { RootState } from "@/hooks"
import { setScroll } from "@/hooks/scroll"
import { useNavigate, useParams } from "react-router-dom"

import FocusSound from '@/assets/sounds/focus.wav'
import { useCursor } from "@/components/cursor"
import ParticleEffect from "@/components/effects/particle"

const Projects = ({ }, _ref: Ref<HTMLDivElement>) => {
    const { toggle } = useSelector((state: RootState) => state.sound.value)
    const [observerRef, inView] = useObserverOfScroll({ range: .6 })
    const [ref, inZoneView] = useObserverOfScroll({ range: 1 })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [innerWidth] = useWindow()
    const { projectID } = useParams()

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

        setTimeout(() => {
            const { top } = parent.getBoundingClientRect()
            const { y } = store.getState().scroll.value

            dispatch(setScroll([0, y + top + 30]))
        }, 1000);
    }, [ref, projectID])

    useEffect(() => {
        if (!inView)
            return

        try {
            if (!toggle)
                return

            const sound = new Audio(FocusSound)

            sound.volume = .3
            sound.play()
        } catch { }
    }, [inView, toggle])

    const { useCursorType } = useCursor()

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
        <div className="w-fit h-fit relative" ref={_ref}>

            <div
                className="relative w-full overflow-hidden h-auto py-[200px]"
            >
                <div className="relative w-full h-[1080px] flex items-center" ref={ref}>
                    <div className="text-white w-[40vw] text-center absolute left-0 max-md:left-4" style={{
                        opacity: 1 - (progress[0] / (innerWidth * .2)),
                        transform: `scale(${1 - (progress[0] / (innerWidth * .6))})`
                    }}>
                        <h1 className="font-bold mb-[10px] text-[20px]">My Excellence Showcase</h1>
                        <p className="relative text-justify w-[240px] m-auto text-[#ffffff80]">
                            Embark on a journey through my projects, where innovation meets functionality. From concept to execution, witness the art of crafting seamless digital solutions for a transformative user experience.
                        </p>
                    </div>
                    <motion.div
                        className="w-full h-full relative"
                        style={{
                            mask: `linear-gradient(90deg, transparent, white 10%, white 90%, transparent)`,
                            WebkitMask: `linear-gradient(90deg, transparent, white 10%, white 90%, transparent)`
                        }}
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
                        {...useCursorType('leftright', 80)}
                    >
                        {inZoneView && <Scroll
                            scrollbar={false}
                            touch={true}
                            onPos={({ x, maxX }) => setProgress([x, maxX])}
                        >
                            <div
                                className="relative h-[1080px] w-fit flex items-center pl-[40vw] max-md:pl-[60vw]"
                            >
                                <div className="relative flex flex-col flex-wrap h-full justify-center gap-[40px]">
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
                                            onClick={() => {
                                                if (props.link == undefined)
                                                    navigate(`project/${i}`)

                                                else window.open(props.link, "_blank");
                                            }}
                                        >

                                            <ItemProject
                                                {...props}
                                            />
                                        </motion.div>
                                    })}
                                </div>
                            </div>
                        </Scroll>}
                    </motion.div>
                </div>
                <ParticleEffect
                    className="w-full h-full absolute top-0 left-0"
                />
            </div>
            <motion.img
                className="absolute left-0 bottom-[300px] -translate-x-1/2 translate-y-1/2 z-[-1]"
                animate={{
                    transform: [`translate(-70%, 0%) rotate(0deg)`, `translate(-70%, 0%) rotate(360deg)`]
                }}
                transition={{
                    type: 'tween',
                    duration: 120,
                    repeat: Infinity
                }}
                src='/planet.png'
            />
        </div>
    </SetBackground>
}

export default forwardRef(Projects)