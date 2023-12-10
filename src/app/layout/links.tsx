import { motion } from 'framer-motion'
import { getScrollProgress } from "@/hooks/scroll"

const Links = () => {
    const progress = getScrollProgress()

    return <div className="fixed bottom-10 right-10 w-fit z-10 mix-blend-difference">
        <div className="flex text-white font-pain text-[15px] gap-6">
            <a href="#" className="click hover">Instagram</a>
            <a href="#" className="click  hover">Github</a>
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