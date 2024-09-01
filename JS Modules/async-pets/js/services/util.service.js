const gPetNames = ['Bob', 'Charlie', 'Chippi', 'Rorri', 'Toto', 'Duki']
const gPetTypes = ['cat', 'dog', 'bird', 'fish', 'rabbit', 'snale']

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

export function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomPetName() {
    return gPetNames[parseInt(Math.random() * gPetNames.length)]
}

export function randomPetType() {
    return gPetTypes[parseInt(Math.random() * gPetTypes.length)]
}

export function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7
    
    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}