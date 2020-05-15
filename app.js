// DOM generated content -- to implement afterwards

/* 
remembr: onload="firstLoad()" >> on body

function firstLoad() {
    var par = document.createElement('P');
    var sampletext = document.createTextNode('this is a sample DOM-generated text')
    par.appendChild(sampletext);
    document.getElementById('heading').appendChild(par);
}
*/

function createQuiz() {
    const heading = document.getElementById('heading')
    const bodyContent = document.getElementById('body-content')
    const footer = document.getElementById('footer')

    bodyContent.innerHTML = ''
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
        bodyContent.innerHTML = ''
    }
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
        // rewrite question input
        bodyContent.innerHTML = 'question oke'
    } 
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