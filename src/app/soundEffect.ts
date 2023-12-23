import { useEffect, useState } from "react"

import Hover1 from '@/assets/sounds/hover_0.ogg'
import Hover2 from '@/assets/sounds/hover_1.ogg'
import Hover3 from '@/assets/sounds/hover_2.ogg'

import Click1 from '@/assets/sounds/click_0.ogg'
import Click2 from '@/assets/sounds/click_1.ogg'


const soundEffect = () => {
    const [, setHoverID] = useState<number>(0)
    const [, setClickID] = useState<number>(0)

    useEffect(() => {
        const hovers = document.querySelectorAll('.hover')

        const clicks = document.querySelectorAll('.click')

        const hoverHandler = () => {
            setHoverID(prev => {
                new Audio([
                    Hover1,
                    Hover2,
                    Hover3
                ][prev]).play()

                prev = ++prev % 3
                return prev
            })
        }

        const clickHandler = () => {
            setClickID(prev => {
                new Audio([
                    Click1,
                    Click2
                ][prev]).play()

                prev = ++prev % 2
                return prev
            })
        }

        clicks.forEach(element =>
            element.addEventListener('click', clickHandler)
        )
        hovers.forEach(element =>
            element.addEventListener('mouseenter', hoverHandler)
        )
        return () => {
            hovers.forEach(elements =>
                elements.removeEventListener('mouseenter', hoverHandler)
            )
            clicks.forEach(elements =>
                elements.removeEventListener('click', clickHandler)
            )
        }
    }, [])
}

export default soundEffect