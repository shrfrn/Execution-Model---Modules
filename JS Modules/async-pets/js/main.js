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
    // ...
    // const score = prompt('Enter new score')
}

function render(data) {
    const petsStr = JSON.stringify(data, null, 4)
    document.querySelector('.data').innerText = petsStr
}

function loadPets() {
    const pets = petService.query()
    render(pets)
}