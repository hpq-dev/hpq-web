import { EventHandler, useEffect, useState } from "react"
import Links from "./links"
import Nav from "./nav"
import useWindow from "@/util/window"
import { motion } from 'framer-motion'

const Layout = () => {
    const [show, setShow] = useState<boolean>(true)

    const [innerWidth] = useWindow()

    useEffect(() => {
        setShow(true)

        if (innerWidth > 700)
            return

        let Y: number = 0
        let X: number = 0

        const handlerStart = (e: TouchEvent) => {
            Y = e.changedTouches[0].pageY
            X = e.changedTouches[0].pageX
        }
        document.addEventListener('touchstart', handlerStart)

        const handler = (e: TouchEvent) => {
            const { pageY, pageX } = e.changedTouches[0]
            const distY: number = Y - pageY
            const distX: number = X - pageX
    
            if(Math.abs(distX) > Math.abs(distY)) return
            
            setShow(distY < 1)
        }
        document.addEventListener('touchend', handler)

        return () => {
            document.removeEventListener('touchend', handler)
            document.removeEventListener('touchstart', handlerStart)
        }
    }, [innerWidth])

    return <>
        <motion.img
            className="left-20 fixed top-16 mix-blend-difference z-10 max-md:left-2 max-md:top-2"
            src='/logo.svg'
            alt="logo"
            animate={!show ? {
                opacity: 0,
                translateY: -100
            } : {
                opacity: 1,
                translateY: 0
            }}
        />
        <Nav show={show} />
        <Links />
    </>
}

export default Layout