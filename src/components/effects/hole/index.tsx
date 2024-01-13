import { useObserverOfScroll } from "@/components/customScroll/utils"
import { useEffect, useMemo, useState } from "react"
import Item from "./item"

interface props {
    className?: string
    speed: number
    items: string[]
    size?: number
    range?: number
    render?: number
}

const HoleEffect = ({
    items,
    size = 20,
    range = 30,
    render = 10,
    className = ''
}: props) => {
    const [ref, inView] = useObserverOfScroll({ range: 1.6, triggerTop: true })
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        if (!ref.current)
            return

        const { height } = ref.current.getBoundingClientRect()

        setHeight(height)
    }, [ref])

    const view = useMemo(() => window.innerWidth > 500, [])

    if(!view)
        return null

    const density: number = useMemo(() => Math.floor(height / (size * 10)), [height])

    return <div
        className={className}
        style={{ width: range + 'vw' }}
        ref={ref}
    >
        {inView && <>
            {[...new Array(render)].map((_, i) => <Item
                key={i}
                src={items[i % items.length]}
                ind={i % density}
                size={size}
            />)}
        </>}
    </div>
}

export default HoleEffect