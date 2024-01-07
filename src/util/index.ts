
export const RandomEx = (min: number, max: number) => min + Math.floor(Math.random() * (max - min))
export const useProcentage = (value: number, max: number) => (100 * value) / max

export const range = (
    value: number, 
    ofValue: number, 
    range: number
): boolean => {
    const div = range / 2
    return !(value < ofValue - div || value > ofValue + div)
}