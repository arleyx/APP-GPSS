// --> INIT
setTimeout(function () {
    document.querySelector('#init').classList.remove('show');
    document.querySelector('#main').classList.add('show');
    getQuestion();
}, 2000);

// --> QUESTION
var numQuestion = 0;
var numRandom = [];
var result = 0;

function getQuestion () {
    if (numRandom.length == response.questions.length) {
        document.querySelector('#main').classList.remove('show');
        document.querySelector('#result').innerHTML = result + ' Preguntas correctas';
        document.querySelector('#finish').classList.add('show');
        return false;
    }

    isDiferent = false;

    while (!isDiferent) {
        numQuestion = parseInt(Math.random() * response.questions.length);
        isDiferent = true;
        for (number in numRandom) {
            console.log(numQuestion+' == '+numRandom[number]);
            if (numQuestion == numRandom[number]) {
                isDiferent = false;
            }
        }
    }

    numRandom.push(numQuestion);

    /* LOG
    console.log('Numero de preguntas: '+response.questions.length);
    console.log('Pregunta aleatoria: '+numQuestion);
    console.error('Pregunta ya resultas: ');
    console.error(numRandom);*/

    var objQuestion = response.questions[numQuestion];
    var objAnswer = '';

    /* HABILITAR PARA PREGUNTAS DE RECORRIDO
    if (numQuestion >= response.questions.length) {
        document.querySelector('#main').classList.remove('show');
        document.querySelector('#result').innerHTML = result + ' Preguntas correctas';
        document.querySelector('#finish').classList.add('show');
        return false;
    }*/

    for (var i in objQuestion.answer) {objAnswer += '<li class="option" data-option="' + i + '" data-option-correct="' + objQuestion.correct + '">' + objQuestion.answer[i] + '</li>'}

    document.querySelector('#question').innerHTML = objQuestion.question;
    document.querySelector('#question').parentNode.setAttribute('start', numQuestion + 1);
    document.querySelector('#answer').innerHTML = objAnswer;

    var options = document.querySelectorAll('.option');
    var applause = document.querySelector('#applause');
    var wrong = document.querySelector('#wrong');

    // EVENTOS DE LAS OPCIONES DE LA PREGUNTA
    for (var i = 0; i < options.length; i++) {
        options.item(i).addEventListener('click', function () {
            if (this.getAttribute('data-option') == this.getAttribute('data-option-correct')) {
                this.classList.add('true');
                applause.currentTime = 0
                applause.play();
                message.true();
                message.show();
                if (document.querySelectorAll('.option.false').length < 1) { result += 1; }
                setTimeout(function () { getQuestion(); }, 500);
            } else {
                this.classList.add('false');
                wrong.currentTime = 0
                wrong.play();
                message.false();
                message.show();
            }
        });
    }

    //numQuestion += 1; HABILITAR PARA PREGUNTAS DE RECORRIDO
}

var message;

document.addEventListener('DOMContentLoaded', function () {
    message = new Message('#message');
});
