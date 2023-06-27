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