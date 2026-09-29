export const padNumber = (value: number, length = 2) => String(value).padStart(length, '0')

export const currentYear = () => new Date().getFullYear()
