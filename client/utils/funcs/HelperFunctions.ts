export function stringToBoolean(value: string | null): boolean {
    const trueValues = new Set(['true', '1', 'yes'])
    return !!value && trueValues.has(value.toLowerCase())
}

export function getTimeStringWithoutZone(date: Date) {
    const dateStrArr = date.toLocaleString().split(" ")
    const time = (dateStrArr[1] + "").split(":").slice(0, -1).join(":")

    dateStrArr[1] = time
    return dateStrArr.join(" ")
}