import { getScrollProgress } from "@/hooks/scroll"
import { motion } from 'framer-motion'

const Links = () => {
    const progress = getScrollProgress()

    return <div className="fixed bottom-10 right-10 w-fit z-[1] mix-blend-difference max-md:right-0 max-md:bottom-0 max-md:w-full">
        <div className="flex text-white font-pain text-[15px] gap-6 max-md:justify-around max-md:text-2xl">
            <a href="https://www.instagram.com/ionut.hpq/" className="click hover" target="_blank">Instagram</a>
            <a href="https://github.com/hpq-dev" className="click  hover" target='_blank'>Github</a>
            <a href="#" className="click hover">Linkdin</a>
        </div>
        <div className="relative w-full h-2 bg-[#ffffff2B] rounded-full mt-2">
            <motion.div
                className="absolute left-0 bg-white h-full rounded-full"
                animate={{
                    width: progress + '%'
                }}
                transition={{
                    duration: .1
                }}
            />
        </div>
    </div>
}

export default Links