var score = 100

export const scoreService = {
    getScore,
    incScore,
    decScore,
    resetScore,
}

function getScore() {
    return score
}

function incScore() {
    return ++score
}

function decScore() {
    return --score
}

function resetScore() {
    return score = 0
}