// var degrees = [0, 30,45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
// var ratio = ["sin", "cos", "tan"]
// var degreesSize = 16
// var ratioSize = 3
var degreesSize = 4
var ratioSize = 2
var degrees = [0, 90, 180, 270];
var ratio = ["sin", "cos"]
const problemElement = document.querySelector(".problem")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
const mistakes = document.querySelector(".mistakes")
const curAccuracy = document.querySelector(".accuracy")
let state = {
    wrongAnswers: 0,
    accuracy: 0.0,
    totalquestions: 0,
    correctAnswers: 0,
}
function updateProblem() {
    state.currentProblem = generateProblem()
    problemElement.innerHTML = `${state.currentProblem.ratio}${state.currentProblem.degree}`
    ourField.value = ""
    ourField.focus()
}

updateProblem()

function generateDegree() {
    return degrees[(Math.floor(Math.random()*degreesSize))]
}
function generateRatio() {
    return ratio[(Math.floor(Math.random()*ratioSize))]
}

function generateProblem() {
    return {
        ratio: generateRatio(),
        degree: generateDegree(),
    }
}
function handleSubmit(e){
    e.preventDefault()
    state.totalquestions++
    let correctAnswer
    const p = state.currentProblem
    if (p.ratio === "sin" && (p.degree == 0 || p.degree == 180)) {
        correctAnswer = "0"
    } 
    if (p.ratio === "cos" && (p.degree == 90) || p.degree == 270) {
        correctAnswer = "0"
    }
    if (p.ratio === "sin" && p.degree == 270) {
        correctAnswer = "-1"
    }
    if (p.ratio === "cos" && p.degree == 180) {
        correctAnswer = "-1"
    }
    if (p.ratio === "cos" && p.degree == 0) {
        correctAnswer = "1"
    }
    if (p.ratio === "sin" && p.degree == 90) {
        correctAnswer = "1"
    }
    // add the other trig ratios later
    if (ourField.value === correctAnswer) {
        state.correctAnswers++
        updateProblem()
    } else {
        state.wrongAnswers++
        mistakes.textContent = state.wrongAnswers
    }
    state.accuracy = (state.correctAnswers/state.totalquestions) *100
    curAccuracy.textContent = state.accuracy.toFixed(2)
}

ourForm.addEventListener("submit", handleSubmit)
