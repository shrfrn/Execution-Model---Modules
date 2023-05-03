import { itemService } from './services/item.service.js'
import { petService } from './services/pet.service.js'


window.onLoadPets = onLoadPets

function onLoadPets() {
    console.log('Loading pets...')
}

function renderPets(pets) {
    const petsStr = JSON.stringify(pets, null, 4)
    document.querySelector('.pet-list').innerText = petsStr
}

// Simple exaple:

// var items = itemService.getItems()
// itemService.addItem('')
// itemService.addItem('popo')
// items = itemService.getItems()
// console.log('Items', items)

// Lets test the petService

// petService.query()
//     .then(pets => {
//         console.log('Got Pets:', pets)
//         return pets
//     })
//     .then((pets) => {
//         // Update the first pet
//         const pet = {...pets[0]}
//         pet.name += '!'
//         return petService.save(pet)
//     })
//     .then((savedPet) => {
//         console.log('Updated:', savedPet)
//     })
//     .then(() => {
//         const pet = petService.getEmptyPet('Chipi', 80)
//         return petService.save(pet)
//     })
//     .then((savedPet) => {
//         console.log('Added:', savedPet)
//     })
//     .then(() => {
//         petService.setFilterBy({ txt: 'b' })
//         petService.query()
//             .then(pets => {
//                 console.log('Got Pets:', pets)
//             })
//     })
//     .then(() => {
//         // petService.remove('5qRK9')
//         //     .then(() => {
//         //         console.log('Pet removed:')
//         //     })
//     })