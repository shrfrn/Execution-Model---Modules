import { petService } from './services/pet.service.js'

window.onLoadPets = onLoadPets
window.onLoadPet = onLoadPet
window.onRemovePet = onRemovePet
window.onAddPet = onAddPet
window.onUpdatePet = onUpdatePet

function onLoadPets() {
    loadPets()
}

function onLoadPet() {
    const petId = prompt('Enter pet id')
    if (!petId) return

    petService.get(petId)
        .then(render)
}

function onRemovePet() {
    const petId = prompt('Enter pet id')
    if (!petId) return

    petService.remove(petId)
        .then(loadPets)
}

function onAddPet() {
    const petName = prompt('Enter pet name')
    if (!petName) return

    const newPet = petService.getEmptyPet(petName)
    newPet.name = petName

    petService.save(newPet)
        .then(pet => console.log(pet.id, 'Added'))
        .then(loadPets)
}
    
function onUpdatePet() {
    const petId = prompt('Enter pet id')
    if (!petId) return

    petService.get(petId)
        .then(pet => {
            const score = prompt('Enter new score', pet.score)
            pet.score = score
            return pet
        })
        .then(petToSave => petService.save(petToSave))
        .then(savedPet => console.log(savedPet))
        .then(loadPets)
}

function render(data) {
    const petsStr = JSON.stringify(data, null, 4)
    document.querySelector('.data').innerText = petsStr
}

function loadPets() {
    petService.query()
        .then(res => render(res))
}