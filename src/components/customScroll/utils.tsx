import { useEffect, useRef, useState } from "react"

interface props {
    range?: number
    triggerTop?: boolean
}

export const useObserverOfScroll = ({
    range = 1,
    triggerTop = false
}: props): [React.MutableRefObject<HTMLDivElement | null>, boolean] => {
    const [inView, setInView] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current)
            return

        const element: HTMLDivElement = ref.current
        const timer = setInterval(() => {
            const { y } = element.getBoundingClientRect()

            const size: number = window.innerHeight * range

            if (!triggerTop) setInView(y < size)
            else setInView((y > window.innerHeight - size && y < size))
        }, 10)

        return () => clearInterval(timer)
    }, [ref])

    return [
        ref,
        inView
    ]
}