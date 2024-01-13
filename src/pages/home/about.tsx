
import { SetBackground } from "@/app/background"
import { useCursor } from "@/components/cursor"
import { useObserverOfScroll } from "@/components/customScroll/utils"
import HoleEffect from "@/components/effects/hole"
import { setAstronaut } from "@/hooks/astronaut"
import { motion } from "framer-motion"
import { Ref, forwardRef } from "react"
import { useDispatch } from "react-redux"

const About = ({}, _ref: Ref<HTMLDivElement>) => {
    const [ref, inView] = useObserverOfScroll({ range: .8 })
    const [ref2, inView2] = useObserverOfScroll({ range: .8 })
    const [ref3, inView3] = useObserverOfScroll({ range: .8 })

    const dispatch = useDispatch()
    const { useCursorEvent } = useCursor()

    return <SetBackground
        onObserver={() => dispatch(setAstronaut({
            x: 0,
            y: 300,
            scale: .6,
            rotate: -35
        }))}
    >
        <div className='w-full pt-[400px] pb-[100px] relative' ref={_ref}>
            <HoleEffect
                className="absolute right-0 top-[60%] -translate-y-1/2 w-[600px] h-[60%]"
                speed={1}
                items={[
                    '/about/0.png',
                    '/about/1.png'
                ]}
            />
            <div className="w-fit m-auto relative pr-[288px] max-lg:pr-0">
                <div className="relative flex items-end gap-4 w-full max-md:flex-wrap max-md:mb-10">
                    <div className="text-black font-bold uppercase text-5xl relative m-auto">
                        <div className="absolute left-0 -translate-x-28 flex gap-4 items-center top-[-60px] max-md:top-[-120px] max-sm:left-[30%]" {...useCursorEvent('I am', 60)}>
                            <img
                                className="rotate-[-15deg] w-20 h-auto border-2 border-white shadow-lg pointer-events-none max-md:ml-24"
                                src="/profile.png"
                            />
                            <span className="font-pain text-sm">Full stack developer</span>
                        </div>
                        Lungu Ionut
                    </div>
                    <h3 className="relative bg-gradient-to-r from-[#00000080] to-transparent inline-block text-transparent bg-clip-text text-3xl font-[500] w-fit m-auto">with 2 years experience</h3>
                </div>
                <div className="relative w-[660px] max-md:w-[80%] max-w-full max-md:m-auto text-justify mt-6 text-xl font-[500] text-[#00000060]">
                    <div className="w-fit h-fit relative" ref={ref}>
                        <motion.p
                            animate={!inView ? {
                                scale: 1.5,
                                opacity: 0
                            } : {
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                duration: .3
                            }}
                            {...useCursorEvent('- 07 2023', 30)}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </motion.p>
                    </div>
                    <div className="w-fit h-fit relative" ref={ref2}>
                        <motion.p
                            animate={!inView2 ? {
                                scale: 1.5,
                                opacity: 0
                            } : {
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                duration: .3
                            }}
                            className="mt-6"
                            {...useCursorEvent('- 04 2023', 30)}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </motion.p>
                    </div>
                    <div className="w-fit h-fit relative" ref={ref3}>
                        <motion.p
                            animate={!inView3 ? {
                                scale: 1.5,
                                opacity: 0
                            } : {
                                scale: 1,
                                opacity: 1
                            }}
                            transition={{
                                duration: .3
                            }}
                            className="mt-6"
                            {...useCursorEvent('- 01 2023', 30)}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </SetBackground>
}

export default forwardRef(About)