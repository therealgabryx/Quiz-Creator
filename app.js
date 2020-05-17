// DOM generated content -- to implement afterwards
// remembr: onload="firstLoad()" >> on body

var quizzes = []
var quizCount = 0
var questionsTempCount = 0;

function createQuiz() {
    questionsTempCount = 0;
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

        // write insert question 1
        bodyContent.innerHTML = `<h5><span>Quiz: </span><span id="quizName">${quizName}</span></h5>` +
                                '<form id="inputQuestionForm" name="inputQuestionForm" onsubmit="return false">' +
                                    `<label for="question">Enter question [${questionsTempCount + 1}]:</label><br>` +
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
    var quiz = {quizName: quizName, questions: questionsArray, length: 0}

    quizzes[quizCount] = quiz;
    quizCount++;

    console.log("quizzes: ", quizzes)
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
        saveQuestionData()

        // rewrite question input
        bodyContent.innerHTML = `<h5><span>Quiz: </span><span id="quizName">${quizzes[quizCount - 1].quizName}</span></h5>` +
                                '<form id="inputQuestionForm" name="inputQuestionForm" onsubmit="return false">' +
                                    `<label for="question">Enter question [${questionsTempCount + 1}]:</label><br>` +
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

function saveQuestionData() {
    const questionText = inputQuestionForm.question.value

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

    var question = {questionText: questionText, options: options, checks: checks}

    quizzes[quizCount - 1].questions[questionsTempCount] = question;
    quizzes[quizCount - 1].length++
    questionsTempCount++;
    console.log(quizzes)
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
        // save question dataù
        saveQuestionData()

        // show questions recap
        bodyContent.innerHTML = `<h5><span>Quiz Recap</span><br><br><span>Quiz Name: </span><span id="quizName">${quizzes[quizCount - 1].quizName}</span></h5><br>`

        for (var i = 0; i < quizzes[quizCount -1].length; i++) {
            bodyContent.innerHTML += `<fieldset id="question${i + 1}"> 
                                        <legend>Question ${i + 1}: ${quizzes[quizCount - 1].questions[i].questionText}</legend>
                                        <label for="opt1">A.</label><span id="opt1"> ${quizzes[quizCount - 1].questions[i].options[0]}</span><br>
                                        <label for="opt2">B.</label><span id="opt2"> ${quizzes[quizCount - 1].questions[i].options[1]}</span><br>
                                        <label for="opt3">C.</label><span id="opt3"> ${quizzes[quizCount - 1].questions[i].options[2]}</span><br>
                                        <label for="opt4">D.</label><span id="opt4"> ${quizzes[quizCount - 1].questions[i].options[3]}</span><br>
                                    </fieldset><br>`
        }

        bodyContent.innerHTML += '<button type="button" onclick="takeQuiz()">Take Quiz</button>'
    } 
}

function takeQuiz() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    bodyContent.innerHTML = `<span id="quizNameTitle"><h5><span>Taking Quiz: </span><span id="quizName">${quizzes[quizCount - 1].quizName}</span></h5></span><br>`

    for (var i = 0; i < quizzes[quizCount -1].length; i++) {
        bodyContent.innerHTML += `<fieldset id="question${i + 1}"> 
                                    <legend>Question ${i + 1}: ${quizzes[quizCount - 1].questions[i].questionText}</legend><br><span id="isCorrect${i + 1}"></span><br>
                                    <input type="checkbox" id="checkOpt1Q${i + 1}"><label for="opt1">A.</label><span id="opt1"> ${quizzes[quizCount - 1].questions[i].options[0]}</span><br>
                                    <input type="checkbox" id="checkOpt2Q${i + 1}"><label for="opt2">B.</label><span id="opt2"> ${quizzes[quizCount - 1].questions[i].options[1]}</span><br>
                                    <input type="checkbox" id="checkOpt3Q${i + 1}"><label for="opt3">C.</label><span id="opt3"> ${quizzes[quizCount - 1].questions[i].options[2]}</span><br>
                                    <input type="checkbox" id="checkOpt4Q${i + 1}"><label for="opt4">D.</label><span id="opt4"> ${quizzes[quizCount - 1].questions[i].options[3]}</span><br>
                                </fieldset>
                                <p id="errorBox${i + 1}"></p><br>`
    }   

    bodyContent.innerHTML += '<span id="buttonCheck"><button type="button" onclick="validateAnswers()">Check Answers</button><span>'
}

function validateAnswers() {
    if (checkIfCorrectSelection()) { // If only 1 answer per question is selected 
        blankErrorBoxes(); // voids all error boxes 
        disableCheckBoxes();
        checkCorrectAnswers();
    }
    // check that all checkboxes have only (1) option selected --> disable all checkboxes & say which answers are correct
}

function checkCorrectAnswers() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    document.getElementById('quizNameTitle').innerHTML = `<h5><span>Quiz Results</span><br><br><span>Quiz Name: </span><span id="quizName">${quizzes[quizCount - 1].quizName}</span></h5>`
    document.getElementById('buttonCheck').innerHTML = '<button type="button" onclick="endQuiz()">End Quiz</button>'

    var correctAnswers = calcPoints();

    console.log(">> correct answers: ", correctAnswers, " out of ", quizzes[quizCount -1].length)
}

function calcPoints() {
    var correctAnswers = 0

    for (let i = 0; i < quizzes[quizCount -1].length; i++) {
        if ((document.getElementById(`checkOpt1Q${i + 1}`).checked == true) && (quizzes[quizCount - 1].questions[i].checks[0])) { correctAnswers++ }
        if ((document.getElementById(`checkOpt2Q${i + 1}`).checked == true) && (quizzes[quizCount - 1].questions[i].checks[1])) { correctAnswers++ }
        if ((document.getElementById(`checkOpt3Q${i + 1}`).checked == true) && (quizzes[quizCount - 1].questions[i].checks[2])) { correctAnswers++ }
        if ((document.getElementById(`checkOpt4Q${i + 1}`).checked == true) && (quizzes[quizCount - 1].questions[i].checks[3])) { correctAnswers++ }  
        
        if (correctAnswers) {
            document.getElementById(`isCorrect${i + 1}`).innerHTML = '<span style="color:green;">✔ CORRECT ✔</span><br>'
        } else {
            document.getElementById(`isCorrect${i + 1}`).innerHTML = '<span style="color:red;">❌ WRONG ❌</span><br>'
        }
    }   

    return correctAnswers
}

function endQuiz() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    bodyContent.innerHTML = 'Quiz ended :D'
}

function disableCheckBoxes() {
    for (let i = 0; i < quizzes[quizCount -1].length; i++) {
        document.getElementById(`checkOpt1Q${i + 1}`).disabled = true
        document.getElementById(`checkOpt2Q${i + 1}`).disabled = true
        document.getElementById(`checkOpt3Q${i + 1}`).disabled = true
        document.getElementById(`checkOpt4Q${i + 1}`).disabled = true
    }   
}

function blankErrorBoxes() {
    for (let i = 0; i < quizzes[quizCount -1].length; i++) {
        document.getElementById(`errorBox${i + 1}`).innerHTML = ''
    }   
}

function checkIfCorrectSelection() {
    // Check that only 1 answer per question is selected --> else: SIGNAL in error box & ret. false

    var selections = []

    for (let i = 0; i < quizzes[quizCount -1].length; i++) {
        if (checkFieldsetSelection(i)) {
            selections[i] = true;
        } else {
            selections[i] = false;
        }
    }   

    console.log("selections: ", selections)

    var rtn = false

    var falseCount = 0;
    for (let i = 0; i < selections.length; i++) {
        if (selections[i] == false) { falseCount++ }
    }

    if (falseCount == 0) { console.log("Eval: TRUE"); rtn = true; } else { console.log("Eval: FALSE"); }

    return rtn;
}

function checkFieldsetSelection(i) {

    var checkedCount = 1;
        if (document.getElementById(`checkOpt1Q${i + 1}`).checked) { checkedCount++ }
        if (document.getElementById(`checkOpt2Q${i + 1}`).checked) { checkedCount++ }
        if (document.getElementById(`checkOpt3Q${i + 1}`).checked) { checkedCount++ }
        if (document.getElementById(`checkOpt4Q${i + 1}`).checked) { checkedCount++ }
        if(checkedCount == 2) { 
            checkedCount = 0 
        } else {
            document.getElementById(`errorBox${i + 1}`).innerHTML = '<span style="color:red;">select (one) option</span>'
        }

    var rtn = false;
    if (checkedCount == 0) {
        rtn = true;
    }
    
    return rtn;
}