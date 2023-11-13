import { useProcentage } from "."

export const getPosition = (
    value: number,
    max: number,
    distance: number = 2.0
) => {
    const center: number = value - (max / 2)
    return useProcentage(center, max / 2) * distance
}