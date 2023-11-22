import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/hooks"
import { motion } from 'framer-motion'
import { useProcentage } from "@/util"

const Links = () => {
    const { y, maxY } = useSelector((state: RootState) => state.scroll.value)

    const progress = useProcentage(y, maxY);
    return <div className="fixed bottom-10 right-10 w-fit">
        <div className="flex text-[black] font-pain text-[15px] gap-6">
            <a href="#" className="click hover">Instagram</a>
            <a href="#" className="click  hover">Github</a>
            <a href="#" className="click hover">Linkdin</a>
        </div>
        <div className="relative w-full h-2 bg-[#0000002B] rounded-full mt-2">
            <motion.div
                className="absolute left-0 bg-[black] h-full rounded-full"
                animate={{
                    width: (progress > 0 ? progress : 0) + '%'
                }}
                transition={{
                    duration: .1
                }}
            />
        </div>
    </div>
}

export default Links