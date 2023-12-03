import { useState, useEffect } from 'react'

type clickMouseProps = [boolean, boolean]

const useMouseClick = (): clickMouseProps => {
    const [click, setClick] = useState<clickMouseProps>([false, false])

    useEffect(() => {
        const handlerMouseDown = ({ button }: MouseEvent) =>
            setClick(prev => (!button ? [true, prev[1]] : [prev[0], true]))

        window.addEventListener('mousedown', handlerMouseDown)

        const handlerMouseUp = ({ button }: MouseEvent) =>
            setClick(prev => (!button ? [false, prev[1]] : [prev[0], false]))

        window.addEventListener('mouseup', handlerMouseUp)

        return () => {
            window.removeEventListener('mousedown', handlerMouseDown)
            window.removeEventListener('mouseup', handlerMouseUp)
        }
    }, [])

    return click
}

export default useMouseClick