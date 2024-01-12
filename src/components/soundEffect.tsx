import { useEffect, useMemo, useState } from "react"

import bgMusic from '@/assets/sounds/bg.mp3'
import Click from '@/assets/sounds/click.wav'
import Hover from '@/assets/sounds/hover.wav'
import store, { RootState } from "@/hooks"
import { setMouseTitle } from "@/hooks/mouse"
import { setSoundToggle } from "@/hooks/sound"
import { useDispatch, useSelector } from "react-redux"

const easeOut = (
    currentFrame: number,
    start: number,
    end: number,
    totalFrames: number
) => {
    const distance: number = end - start
    const t = currentFrame / totalFrames - 1;
    return distance * (t * t * t + 1) + start;
}

const audioVolumeTransition = (audio: HTMLAudioElement, start: number, end: number, DURATION: number = 2000, MAX_FRAMES: number = 60) => {
    let currentFrame = 0
    const requirestFrames = () => {
        const frames: number = MAX_FRAMES * (DURATION / 1000)
        if (++currentFrame >= frames) {
            clearInterval(interval)
            return
        }

        audio.volume = easeOut(currentFrame, start, end, frames)
    }

    const interval = setInterval(requirestFrames, 1)
}

const soundEffect = () => {
    const [started, setStarted] = useState<boolean>(false)

    const { toggle } = useSelector((state: RootState) => state.sound.value)
    const dispatch = useDispatch()

    const audioMusicBg = useMemo(() => new Audio(bgMusic), [])

    useEffect(() => {
        if (toggle) {
            audioVolumeTransition(audioMusicBg, 0, .1)
            audioMusicBg.play()
            setStarted(true)
        } else {
            audioVolumeTransition(audioMusicBg, .1, 0)
        }
    }, [toggle])

    useEffect(() => {
        if(!started)
            return

        const timer = setInterval(() => {
            audioMusicBg.currentTime = 0
        }, audioMusicBg.duration * 1000)

        return () => clearInterval(timer)
    }, [started])

    useEffect(() => {
        const getSoundActive = (): boolean => store.getState().sound.value.toggle

        const hovers = document.querySelectorAll('.hover')
        const clicks = document.querySelectorAll('.click')

        const hoverHandler = () => {
            if (!getSoundActive())
                return

            const audio = new Audio(Hover)
            audio.volume = .1
            audio.play()
        }

        const clickHandler = () => {
            if (!getSoundActive())
                return

            const audio = new Audio(Click)

            audio.volume = .05
            audio.play()
        }

        const handler = () => {
            dispatch(setSoundToggle(true))
            dispatch(setMouseTitle(''))
            window.removeEventListener('click', handler)
        }

        window.addEventListener('click', handler)

        clicks.forEach(element =>
            element.addEventListener('click', clickHandler)
        )
        hovers.forEach(element =>
            element.addEventListener('mouseenter', hoverHandler)
        )
        return () => {
            window.removeEventListener('click', handler)
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