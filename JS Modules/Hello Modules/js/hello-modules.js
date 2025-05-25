gCount = 0

// TODO: Convert to module
// TODO: Call a function from a service

function onInit() {
    randomNum = getRandomInt(0, 100)
    console.log('Ready with random number -', randomNum)
}

function onIncrement() {
    console.log('Incrementing...', ++gCount)

}

function onReset() {
    gCount = 0
    console.log('Reset complete', gCount)
}