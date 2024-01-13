
import { SetBackground } from "@/app/background"
import { useCursor } from "@/components/cursor"
import { useObserverOfScroll } from "@/components/customScroll/utils"
import HoleEffect from "@/components/effects/hole"
import { setAstronaut } from "@/hooks/astronaut"
import { motion } from "framer-motion"
import { Ref, forwardRef } from "react"
import { useDispatch } from "react-redux"

const About = ({ }, _ref: Ref<HTMLDivElement>) => {
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
                    '/about/1.png',
                    '/about/2.png',
                    '/about/3.png',
                    '/about/4.png',
                    '/about/5.png',
                    '/about/6.png',
                    '/about/7.png',
                    '/about/8.png'
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
                            Hey there! I'm Ionut, a passionate web developer based in Romania. With a love for web development, I've been immersed in the dynamic world of freelancing for the past 2 years, collaborating with a diverse range of clients, including noteworthy projects like b-hood.ro.
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
                            In my journey as a freelancer, I've thrived in navigating through ambiguity, finding joy in the challenge of bringing success to both products and the people behind them. From coding elegant solutions to troubleshooting complex issues, I find fulfillment in every step of the web development process.
                            <br /><br />
                            Living, working, and learning in Romania has provided me with a unique perspective, blending my cultural background with my technical skills. I believe in the power of technology to connect people and enhance experiences.
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
                            Outside of coding, you can often find me exploring the latest trends in web development, always eager to expand my skill set. I enjoy taking on new challenges that push my boundaries and contribute to my continuous growth as a developer.
                            <br /><br />
                            If you're curious to learn more or discuss potential collaborations, feel free to reach out at qclashofclans86@gmail.com. Let's chat and explore the exciting possibilities together!
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </SetBackground>
}

export default forwardRef(About)