import Box3D from "@/components/model3D"
import { motion } from 'framer-motion'
import { memo } from "react"
import { itemProjectProps } from "./types"

const ItemProject = ({ width, height, src }: itemProjectProps) => {
    return <Box3D>
        <motion.div
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
    </Box3D>
}

export default memo(ItemProject)