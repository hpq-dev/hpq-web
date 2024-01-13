import { motion } from 'framer-motion'

interface props {
    className?: string
}

const ParticleEffect = ({ className }: props) => {
    return <div className={className + " pointer-events-none z-[-1]"}>
        <motion.img
            className="w-full h-full absolute top-0 left-0"
            src="/stars.png"
            animate={{
                opacity: [0, 1, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity
            }}
        />
        <motion.img
            className="w-full h-full absolute top-[-5vh] left-[-3vh]"
            src="/stars.png"
            animate={{
                opacity: [0, 1, 0]
            }}
            transition={{
                duration: 2,
                delay: .5,
                repeat: Infinity
            }}
        />
        <motion.img
            className="w-full h-full absolute top-[5vh] left-[3vh]"
            src="/stars.png"
            animate={{
                opacity: [0, 1, 0]
            }}
            transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity
            }}
        />
    </div>
}

export default ParticleEffect