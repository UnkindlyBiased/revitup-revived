export function stringToBoolean(value: string | null): boolean {
    const trueValues = new Set(['true', '1', 'yes'])
    return !!value && trueValues.has(value.toLowerCase())
}