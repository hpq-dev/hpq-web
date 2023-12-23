import { itemProjectProps } from "./types"
import { motion } from 'framer-motion'

const ItemProject = ({ width, height, src }: itemProjectProps) => {
    return <motion.div
        whileTap={{
            scale: .95
        }}
    >
        <div
            className="relative"
            style={{ width: width + 'px', height: height + 'px' }}
        >
            <img
                className="relative w-full h-full object-contain pointer-events-none object-top"
                width={width}
                height={height}
                src={src}
                alt="projects"
            />
        </div>
    </motion.div>
}

export default ItemProject