import store, { RootState } from '@/hooks'
import { setScroll } from '@/hooks/scroll'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import About from './about'
import Contact from './contact'
import Home from './home'
import Projects from './projects'


const Index = () => {
    const dispatch = useDispatch()

    const { root } = useSelector((state: RootState) => state.mouse.value)
    const refs = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null)
    ]

    useEffect(() => {
        let ind: number = { 'Home': 0, 'About': 1, 'Projects': 2, 'Contact': 3 }[root] ?? 0

        const children: HTMLDivElement | null = refs[ind].current

        if (!children)
            return

        const { y } = store.getState().scroll.value
        const { top } = children.getBoundingClientRect()

        dispatch(setScroll([0, (y + top) + 2]))

        setTimeout(() => dispatch(setScroll([0, 0])), Math.abs(y + top) / 3);
    }, [root])

    return <>
        <Home ref={refs[0]} />
        <About ref={refs[1]} />
        <Projects ref={refs[2]} />
        <Contact ref={refs[3]} />
    </>
}

export default Index