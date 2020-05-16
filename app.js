// DOM generated content -- to implement afterwards
// remembr: onload="firstLoad()" >> on body

var quizzes = []
var quizCount = 0

function createQuiz() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    bodyContent.innerHTML = '<form id="quizNameForm" name="quizNameForm" onsubmit="return false"><br>' +
                                '<label for="quizName">Enter a quiz name:</label><br>' +
                                '<input type="text" id="quizName" name="quizName"><br><br>' +
                                '<p id="errorBox" name="errorBox"></p><br>' +
                                '<button type="submit" id="insertName--continue" name="insertName--continue" onclick="checkQuizName()">Continue</button>' +
                            '</form>' 
}

function checkQuizName() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    const quizName = quizNameForm.quizName.value

    if (quizName == '') {
        document.getElementById('errorBox').innerHTML = 'insert a valid name'
    }
    else {
        // save quiz name
        console.log('quizName:', document.getElementById('quizName').value) 
        saveQuizName(quizName)
        //
        bodyContent.innerHTML = `<h5><span>Quiz: </span><span id="quizName">${quizName}</span></h5>` +
                                '<form id="inputQuestionForm" name="inputQuestionForm" onsubmit="return false">' +
                                    '<label for="question">Enter a question:</label><br>' +
                                    '<input type="text" id="question" name="question"><br><br>' +
                                    '<p id="errorBoxQuestion" name="errorBoxQuestion"></p>' +

                                    '<label for="options">Options:</label>' +
                                    '<fieldset id="options">' +
                                        '<label for="textOpt1">A.</label><input type="text" id="textOpt1" name="textOpt1"><input type="checkbox" id="checkOpt1" name="checkOpt1"><br>' +
                                        '<label for="textOpt2">B.</label><input type="text" id="textOpt2" name="textOpt2"><input type="checkbox" id="checkOpt2" name="checkOpt2"><br>' +
                                        '<label for="textOpt3">C.</label><input type="text" id="textOpt3" name="textOpt3"><input type="checkbox" id="checkOpt3" name="checkOpt3"><br>' +
                                        '<label for="textOpt4">D.</label><input type="text" id="textOpt4" name="textOpt4"><input type="checkbox" id="checkOpt4" name="checkOpt4"><br>' +
                                    '</fieldset>' +

                                    '<p id="errorBoxAnswers" name="errorBoxAnswers"></p><br>' +

                                    '<button type="submit" id="inputQuestion--continue" name="inputQuestion--continue" onclick="checkQuestionInput()">Add another question</button>' +
                                    '<button type="submit" id="inputQuestion--end" name="inputQuestion--end" onclick="endQuestionInput()">End Questions Input</button>' +
                                '</form>' 
    }
}

function saveQuizName(quizName) {
    var questionsArray = []
    var quiz = {name: quizName, questions: questionsArray}

    quizzes[quizCount] = quiz
        quizCount++;

    console.log(quizzes)
}

function checkQuestionInput() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    if (inputQuestionForm.question.value == '') {
        document.getElementById('errorBoxQuestion').innerHTML = 'insert a valid question'
    }
    else if((inputQuestionForm.textOpt1.value == '') || (inputQuestionForm.textOpt2.value == '') || (inputQuestionForm.textOpt3.value == '') || (inputQuestionForm.textOpt4.value == '')) {
        document.getElementById('errorBoxQuestion').innerHTML = ''
        document.getElementById('errorBoxAnswers').innerHTML = 'insert valid options'
    }
    else if (checkOptChecked()) {
        document.getElementById('errorBoxQuestion').innerHTML = ''
        document.getElementById('errorBoxAnswers').innerHTML = 'mark (one) correct answer'
    }
    else {
        // save question data
        saveQuestionData()
        // rewrite question input
        bodyContent.innerHTML = 'question oke'
    } 
}

function saveQuestionData() {
    const question = inputQuestionForm.question.value

    var options = []
    options[0] = inputQuestionForm.textOpt1.value
    options[1] = inputQuestionForm.textOpt2.value
    options[2] = inputQuestionForm.textOpt3.value
    options[3] = inputQuestionForm.textOpt4.value

    var checks = []
    checks[0] = inputQuestionForm.checkOpt1.checked
    checks[1] = inputQuestionForm.checkOpt2.checked
    checks[2] = inputQuestionForm.checkOpt3.checked
    checks[3] = inputQuestionForm.checkOpt4.checked

    console.log(question, options, checks)
}

function checkOptChecked() {
    var checkedCount = 1;

    if (inputQuestionForm.checkOpt1.checked) { checkedCount++ }
    if (inputQuestionForm.checkOpt2.checked) { checkedCount++ }
    if (inputQuestionForm.checkOpt3.checked) { checkedCount++ }
    if (inputQuestionForm.checkOpt4.checked) { checkedCount++ }

    if(checkedCount == 2) {checkedCount = 0}

    return checkedCount;
}

function endQuestionInput() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    if (inputQuestionForm.question.value == '') {
        document.getElementById('errorBoxQuestion').innerHTML = 'insert a valid question'
    }
    else if((inputQuestionForm.textOpt1.value == '') || (inputQuestionForm.textOpt2.value == '') || (inputQuestionForm.textOpt3.value == '') || (inputQuestionForm.textOpt4.value == '')) {
        document.getElementById('errorBoxQuestion').innerHTML = ''
        document.getElementById('errorBoxAnswers').innerHTML = 'insert valid options'
    }
    else if (checkOptChecked()) {
        document.getElementById('errorBoxQuestion').innerHTML = ''
        document.getElementById('errorBoxAnswers').innerHTML = 'mark (one) correct answer'
    }
    else {
        // save question data
        // show questions recap
        bodyContent.innerHTML = 'question oke -- recap'
    } 
}