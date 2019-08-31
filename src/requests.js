/* eslint-disable */
const getCurrentStateAndCity = async () => {
    const location = await getLocation()
    const { region, city, country } = location
    return { region, city, country }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=1a11bd55cc8f9c')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch the location')
    }
}

export { getCurrentStateAndCity }