
import { RootState } from "@/hooks"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Background = () => {
    const background = useSelector((state: RootState) => state.background.value.backgroundColor)

    return <div
        className="fixed w-full h-full top-0 left-0 z-[-1]"
        style={{
            background
        }}
    />
}

export default Background