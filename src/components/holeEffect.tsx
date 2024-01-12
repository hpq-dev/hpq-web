import { useEffect, useRef } from "react"

interface props {
    speed: number
    itemSize: [number, number]
}

const HoleEffect = ({
    speed,
    itemSize
}: props) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

    }, [])

    return <div
        className="absolute h-full w-full top-0"
        ref={ref}
    >

    </div>
}

export default HoleEffect