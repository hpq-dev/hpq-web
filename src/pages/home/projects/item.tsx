import { itemProjectProps } from "./types"

const ItemProject = ({ width, height, src }: itemProjectProps) => {
    return <div
        className="relative"
        style={{ width: width + 'px', height: height + 'px' }}
    >
        <img
            className="relative w-full h-full object-contain pointer-events-none object-top"
            src={src}
            alt="projects"
        />
    </div>
}

export default ItemProject