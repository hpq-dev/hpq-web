import Scroll from "@/components/customScroll"
import projects from '@/data/projects'
import { motion } from 'framer-motion'
import { memo, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

import { IoClose } from "react-icons/io5"

const backgroundID: string = 'background_project'

const Project = () => {
    const [end, setEnd] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => setActive(location.pathname.includes('/project/')), [location])

    if (!active)
        return

    const { projectID } = useParams()

    const { src, images } = projects[parseInt(projectID || '0')]
    const imgs: string[] = images ?? []

    const handler = () => {
        setEnd(true)
        setTimeout(() => {
            navigate('/')
            setEnd(false)
        }, 300);
    }

    return <motion.div
        className="fixed left-0 top-0 w-[100vw] h-[100vh] bg-[#00000040] backdrop-blur-md opacity-0 z-[1]"
        id={backgroundID}
        animate={!end ? {
            backdropFilter: ['blur(0vh)', 'blur(2vh)'],
            opacity: [0, 1]
        } : {
            backdropFilter: ['blur(2vh)', 'blur(0vh)'],
            opacity: [1, 0]
        }}
    >
        <Scroll
            touch={true}
            scrollbar={false}
        >
            <motion.div
                className="relative w-[4vh] h-[4vh] bg-[#ffffff20] hover:bg-[#ffffff35] transition-colors duration-300 rounded-full shadow-lg text-white text-[3vh] grid place-items-center m-auto mt-[10vh]"
                animate={{
                    translateY: [-100, 0]
                }}
                onClick={handler}
                whileTap={{
                    scale: .95
                }}
            >
                <IoClose />
            </motion.div>
            <div className="relative w-[120vh] pt-[20vh] m-auto h-[300vh]">
                <h1 className="text-[12vh] font-pain whitespace-nowrap absolute mix-blend-difference text-white -translate-y-1/2">EGYPT AND WORLD</h1>
                <div className="flex gap-[2vh] text-justify">
                    <img
                        className="pointer-events-none"
                        src={src}
                    />
                    <p className="text-white mt-[6vh]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="overflow-hidden mt-[16vh] w-full flex flex-wrap justify-around gap-[3vh]">
                    {imgs.map((img) => <img
                        className="w-[48%] pointer-events-none"
                        src={img}
                        alt="project"
                    />)}
                </div>
            </div>
        </Scroll>
    </motion.div>

}

export default memo(Project)