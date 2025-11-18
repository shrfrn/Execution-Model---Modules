import { petService } from './services/pet.service.js'

window.onLoadPets = onLoadPets
window.onLoadPet = onLoadPet
window.onRemovePet = onRemovePet
window.onAddPet = onAddPet
window.onUpdatePet = onUpdatePet

function onLoadPets() {
    console.log('Loading pets...')
}

function onLoadPet() {
    // const petId = prompt('Enter pet id')
}

function onRemovePet() {
    // const petId = prompt('Enter pet id')
}

function onAddPet() {
    // const petName = prompt('Enter pet name')
}
    
function onUpdatePet() {
    // const petId = prompt('Enter pet id')
    // if (!petId) return

    // TODO: Get the pet
    // pet.score = prompt('Enter new score', pet.score)
    // TODO: Save the pet and render it
}

function render(data) {
    const petsStr = JSON.stringify(data, null, 4)
    document.querySelector('.data').innerText = petsStr
}

function loadPets() {
    // TODO: load pets, then render them
}