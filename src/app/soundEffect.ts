import { useEffect } from "react"

import bgMusic from '@/assets/sounds/bg.mp3'
import Click from '@/assets/sounds/click.wav'
import Hover from '@/assets/sounds/hover.wav'

let soundActive: boolean = false
export const getSoundActive = () => soundActive

const soundEffect = () => {
    useEffect(() => {
        const hovers = document.querySelectorAll('.hover')
        const clicks = document.querySelectorAll('.click')

        const hoverHandler = () => {
            if (!soundActive)
                return

            const audio = new Audio(Hover)
            audio.volume = .1
            audio.play()
        }

        const clickHandler = () => {
            if (!soundActive) {
                const sound = new Audio(bgMusic)

                sound.volume = .1
                sound.play()
                soundActive = true
            }
            const audio = new Audio(Click)

            audio.volume = .05
            audio.play()
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