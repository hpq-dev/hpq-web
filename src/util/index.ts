
export const RandomEx = (min: number, max: number) => min + Math.floor(Math.random() * (max - min))
export const useProcentage = (value: number, max: number) => (100 * value) / max