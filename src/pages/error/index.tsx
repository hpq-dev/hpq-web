import { useRouteError } from "react-router-dom"


const Error = () => {
    const error = useRouteError() as any
    return <div>
        <h1 className="relative font-pain w-fit m-auto mt-[35vh] text-black text-[12vh]">{error.statusText}</h1>
    </div>
}

export default Error