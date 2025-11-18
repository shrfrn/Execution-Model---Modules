import { storageService } from './async-storage.service.js'
import { makeId, randomPastTime, loadFromStorage, saveToStorage, getRandomIntInclusive, getRandomInt } from './util.service.js'

export const petService = {
	query,
	get,
	remove,
    save,
	getEmptyPet,
}

const gPetNames = ['Bob', 'Charlie', 'Chippi', 'Rorri', 'Toto', 'Duki']
const gPetTypes = ['cat', 'dog', 'bird', 'fish', 'rabbit', 'snale']

const STORAGE_KEY = 'pet'
_createPets()

function query() {}

function get() {}

function remove() {}

function save() {}

function getEmptyPet(name = '', score = 0) {
    var pet = _createPet(name, score)
	return { ...pet, id: '' }
}

function _createPets() {
	const pets = loadFromStorage(STORAGE_KEY)
	if (!pets || pets.length === 0) _createDemoPets()
}

function _createDemoPets() {
	const petNames = ['Bobi', 'Charli', 'Pinchi']
	const petDescs = ['Bobi is an amazing dog', 'Charli is a curious cat', 'Just one look at Pinchi']
    
	const pets = petNames.map((petName, i) => {
        const pet = _createPet(petName)
		pet.desc = petDescs[i]
		return pet
	})
    
	saveToStorage(STORAGE_KEY, pets)
}

function _createPet(name, score) {
    const petDescs = ['Amazing cutie', 'Curious chap', 'Super clever', 'Playful and happy']
    const idx = getRandomInt(0, petDescs.length)
    
	const pet = {
        id: makeId(),
        name: name || _randomPetName(type),
        type: _randomPetType(),
        birth: randomPastTime(),
        score: score || getRandomIntInclusive(1, 10),
        desc: petDescs[idx],
    }
    
    return pet
}

function _randomPetName() {
    return gPetNames[parseInt(Math.random() * gPetNames.length)]
}

function _randomPetType() {
    return gPetTypes[parseInt(Math.random() * gPetTypes.length)]
}
