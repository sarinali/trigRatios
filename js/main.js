var degrees = [0, 30,45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
var ratio = ["sin", "cos", "tan"]
var degreesSize = 16
var ratioSize = 3
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
    if (p.ratio === "tan" && p.degree == 0) {
        correctAnswer = "0"
    }
    if (p.ratio === "tan" && (p.degree == 90 || p.degree == 270)) {
        correctAnswer = "undefined"
    } 
    if (p.ratio === "tan" && p.degree == 180) {
        correctAnswer = "0"
    }
    if (p.ratio === "cos" && (p.degree == 30) || p.degree == 330) {
        correctAnswer = "√3/2"
    }
    if (p.ratio === "sin"&& (p.degree == 30 || p.degree == 150)) {
        correctAnswer = "1/2"
    }
    if (p.ratio == "tan" && (p.degree == 30 || p.degree == 210)) {
        correctAnswer = "√3/3"
    }
    if (p.ratio == "cos" && (p.degree == 45 || p.degree == 315)) {
        correctAnswer = "√2/2"
    } 
    if (p.ratio === "sin" && (p.degree == 45 || p.degree == 135)) {
        correctAnswer = "√2/2"
    }
    if (p.ratio === "tan" && (p.degree == 45 || p.degree == 225)) {
        correctAnswer = "1"
    }
    if (p.ratio === "cos" && (p.degree == 60 || p.degree == 300)) {
        correctAnswer = "1/2"
    }
    if (p.ratio === "sin" && (p.degree == 60 || p.degree == 120)) {
        correctAnswer = "√3/2"
    }
    if (p.ratio === "tan" && (p.degree == 60 || p.degree == 240)) {
        correctAnswer = "√3"
    }
    if (p.ratio === "cos" && (p.degree == 120 || p.degree == 240)) {
        correctAnswer = "-1/2"
    }
    if (p.ratio === "cos" && (p.degree == 135 || p.degree == 225)) {
        correctAnswer = "-√2/2"
    }
    if (p.ratio === "cos" && (p.degree == 150 || p.degree == 210)) {
        correctAnswer = "-√3/2"
    }
    if (p.ratio === "tan" && (p.degree == 120 || p.degree == 300)) {
        correctAnswer = "-√3"
    }
    if (p.ratio === "tan" && (p.degree == 135 || p.degree == 315)) {
        correctAnswer = "-1"
    }
    if (p.ratio === "tan" && (p.degree == 150 || p.degree == 330)) {
        correctAnswer = "-√3/2"
    }
    if (p.ratio === "sin" && (p.degree == 210 || p.degree == 330)) {
        correctAnswer = "-1/2"
    }
    if (p.ratio === "sin" && (p.degree == 225 || p.degree == 315)) {
        correctAnswer = "-√2/2"
    }
    if (p.ratio === "sin" && (p.degree == 240 || p.degree == 300)) {
        correctAnswer = "-√3/2"
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
