import { scoreService } from './services/score.service.js'
import { getRandomInt } from './services/util.service.js'
var gCount = 0

// TODO: Convert to module
// TODO: Call a function from a service (export function)
// TODO: Create a score service and access it (export service object)
const app = {}
window.app = app

app.onInit = onInit
app.onIncrement = onIncrement
app.onReset = onReset

app.onGetScore = onGetScore
app.onIncScore = onIncScore
app.onDecScore = onDecScore
app.onResetScore = onResetScore

function onInit() {
	const randomNum = getRandomInt(0, 100)
	console.log('Ready with random number -', randomNum)
}

function onIncrement() {
	console.log('Incrementing...', ++gCount)
}

function onReset() {
	gCount = 0
	console.log('Reset complete', gCount)
}

function onGetScore() {
    const score = scoreService.getScore()
    console.log(score)
}

function onIncScore() {
    const score = scoreService.incScore()
    console.log(score)
}

function onDecScore() {
    const score = scoreService.decScore()
    console.log(score)
}

function onResetScore() {
    const score = scoreService.resetScore()
    console.log(score)
}
