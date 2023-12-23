
import React, {
    useContext,
    useEffect,
    useRef,
    useState
} from "react"

import {
    LayerScrollContext,
    ScrollContext,
    ScrollDataProps,
    ScrollLayerDataProps,
    UseDirection
} from "./core"

import PageSizeCore from './pageSize'
import UseScroll from "./scroll"
import { ScrollBar } from "./scrollbar"
import { ID_SCROLLBAR } from "./settings"
import UseTouch from "./touch"

let totalScrollbars: number = 0
export const getCurrentScrolbars = (): number => totalScrollbars

interface defaultProps {
    id: number
    children: HTMLDivElement | null
}

const def: defaultProps = {
    id: 0,
    children: null
}

let setDefault: defaultProps = def

type ScrollProps = {
    children: React.ReactNode
    touch?: boolean
    scroll?: boolean
    scrollbar?: boolean
    onPos?: (props: {
        x: number,
        y: number,
        maxX: number,
        maxY: number
    }) => void,
    pos?: [number, number]
}
function CoreScroll({
    children,
    touch = false,
    scroll = true,
    scrollbar = true,
    onPos = () => { },
    pos = [0,0]
}: ScrollProps) {
    const [props, setProps] = useState<ScrollDataProps>({
        x: 0,
        y: 0,
        setScroll: () => { },
        inner: {
            x: 0,
            y: 0
        },
        outer: {
            x: 0,
            y: 0
        },
        direction: 'y'
    })

    const [id, setId] = useState<string>('0')
    const ref = useRef<HTMLDivElement>(null)

    const classNameID: string = useContext(LayerScrollContext)?.value.id
    const { value, setValue } = useContext(LayerScrollContext)
    const { direction } = value

    useEffect(() => {
        const [x, y] = pos

        setProps(prev => {
            if (x) prev.x = x

            else if(y) prev.y = y

            return {...prev}
        })
    }, [pos])

    useEffect(() => {
        onPos({
            x: props.x,
            y: props.y,
            maxX: props.inner.x,
            maxY: props.inner.y
        })
    }, [props.x, props.y, props.inner])

    useEffect(() => {
        setId(String(++totalScrollbars))
        setProps(prev => {
            prev.outer = {
                x: ref.current!.offsetWidth,
                y: ref.current!.offsetHeight
            }
            return { ...prev }
        })
        return () => --totalScrollbars as any
    }, [])


    const handlerScroll = (
        { currentTarget }: { currentTarget: HTMLDivElement }
    ) => {
        if (props.direction !== direction)
            return

        if (new Date().getTime() - setDefault.id < 2)
            return

        setDefault = {
            id: new Date().getTime(),
            children: currentTarget
        }

        setValue(prev => {
            prev.id = String(id)
            return { ...prev }
        })
    }

    return <ScrollContext.Provider value={{ props, setProps }}>
        <UseScroll
            hover={id === classNameID}
            scroll={scroll}
        >
            <UseTouch
                hover={id === classNameID}
                id={id}
                set={touch}
            >
                <div
                    style={ScrollStyle}
                    id={ID_SCROLLBAR}
                    className={String(id)}
                    ref={ref}
                    onMouseMove={handlerScroll}
                >
                    {scrollbar && <ScrollBar />}
                    <PageSizeCore>
                        {children}
                    </PageSizeCore>
                </div>
            </UseTouch>
        </UseScroll>
    </ScrollContext.Provider>
}
const ScrollStyle: React.CSSProperties = {
    position: 'relative',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    height: '100vh'
}

export default function Scroll({
    children,
    touch = false,
    scroll = true,
    scrollbar = true,
    onPos = () => { },
    pos = [0, 0]
}: ScrollProps) {
    
    return window.innerWidth > 700 ? <CoreScroll
        pos={pos}
        touch={touch}
        scroll={scroll}
        scrollbar={scrollbar}
        onPos={onPos}
    >{children}</CoreScroll> : <div
        id='normal_scroll'
        style={{
            width: '100%',
            height: '100vh',
            overflow: 'auto'
        }}
        onScroll={(e: any) => {
            const target: HTMLDivElement = e.target
            onPos({
                x: target.scrollLeft,
                y: target.scrollTop,
                maxX: target.scrollWidth,
                maxY: target.scrollHeight
            })
        }}
    >
        {children}
    </div>
}

interface ScrollLayerProps {
    children: React.ReactNode
}

export const ScrollLayer = ({
    children
}: ScrollLayerProps) => {
    const [value, setValue] = useState<ScrollLayerDataProps>({
        id: '0',
        scroll: false,
        direction: 'y',
        start: {
            x: 0,
            y: 0
        },
        focus: false,
        focusID: '0'
    })

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const style = document.createElement("style")

            style.innerHTML = `
                body::-webkit-scrollbar { display: none; }
                body { -ms-overflow-style: none; }
                body { scrollbar-width: none; }
            `

            document.head.appendChild(style)
        }
    }, [])

    return <LayerScrollContext.Provider value={{ value, setValue }}>
        <UseDirection>
            {children}
        </UseDirection>
    </LayerScrollContext.Provider>
}