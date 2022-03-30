let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.seconds')
const start = document.querySelector('.start-btn')
const pause = document.querySelector('.pause-btn')
const rest = document.querySelector('.rest-btn')
const pomodoro = document.querySelector('.pomodoro')
const shortBreak = document.querySelector('.short-break')
const longBreak = document.querySelector('.long-break')
const loop = document.querySelector('.loop')
let customTimer = document.querySelector('.custom-time')
let cartoon = document.querySelector('.cartoon')
let customTimerPopup = document.querySelector('.custom-time-popup')
let closeTimer = document.querySelector('.close-popup-timer')
let whatIsPomodoroBtn = document.querySelector('.what-is-pomodoro-btn')
let whatIsPomodoro = document.querySelector('.what-is-pomodoro-timer')
let closeWhatIsPomodoro = document.querySelector('.close-what-is-pomodoro')
let closeAddTaks = document.querySelector('.close-add-task')
let pomodoroInput = document.querySelector('.pomodoro-input')
let shortBreakInput = document.querySelectorAll('.short-break-input')
let longBreakInput = document.querySelector('.long-break-input')
let addTask = document.querySelector('.add-task')
let todoBtn = document.querySelector('.todo-btn')
let customSaveButton = document.querySelector('.custom-save-btn')
let tittleInputTask = document.querySelector('.tittle-task')
let taskList = document.querySelector('list')
let textAreaTask = document.querySelector('.textarea-task')
let saveTaskBtn = document.querySelector('.save-task-btn')
let timer;
let countSeconds = 59
let countMinutes = 24

function zeroLeft(){
    if (countSeconds < 10) {
        seconds.innerHTML = '0' + countSeconds
    }

    if (countMinutes < 10) {
        minutes.innerHTML = '0' + countMinutes
    }
}

function minTimer() {
    if (countSeconds == 1 && countMinutes == 0) {
        clearInterval(timer)
    }
}

function countDownMinutes(){
    seconds.innerHTML = countSeconds--
    if(countSeconds == 0) {
        minutes.innerHTML = countMinutes-- - 1 /*Eu não sei oq fiz, mas deu certo  */
        countSeconds = 59
    }
    
}



saveTaskBtn.addEventListener('click', function(){
    addTask.remove('open')
})

start.addEventListener('click', function(){
    setTimeout(function(){
        minutes.innerHTML = countMinutes
    }, 1000)
    timer = setInterval(()=> {
        console.log('Starting...')
        countDownMinutes()
        zeroLeft()
        minTimer()
    }, 1000)
})

pause.addEventListener('click', function(){
    clearInterval(timer)
})

rest.addEventListener('click', function(){
    clearInterval(timer)
    timer = 0
    countSeconds = 59
    countMinutes = 24
    minutes.innerHTML = '25'
    seconds.innerHTML = '00'
})

pomodoro.addEventListener('click', function(){
    cartoon.innerHTML = '<img src="/pomodoroAPP/img/tomato-cartoon.svg" alt="">'
    minutes.innerHTML = '25'
    countMinutes = 24
    countSeconds = 59
})

shortBreak.addEventListener('click', function(){
    cartoon.innerHTML = '<img src="/pomodoroAPP/img/chill-Tomato-cartoon-1.svg" alt="">'
    minutes.innerHTML = '05'
    countMinutes = 4
    countSeconds = 59
})

longBreak.addEventListener('click', function(){
    cartoon.innerHTML = '<img src="/pomodoroAPP/img/tea-tomato-cartoon-1.svg" alt="">'
    minutes.innerHTML ='15'
    countMinutes = 14
    countSeconds = 59
})

loop.addEventListener('click', function(){
    cartoon.innerHTML = '<img src="/pomodoroAPP/img/tomato-cartoon.svg" alt="">'
    minutes.innerHTML = '25'
    countMinutes = 24
    countSeconds = 59
})

customTimer.addEventListener('click', function(){
    customTimerPopup.classList.add('open')
})

closeTimer.addEventListener('click', function(){
    customTimerPopup.classList.remove('open')
})

whatIsPomodoroBtn.addEventListener('click', function(){
    whatIsPomodoro.classList.add('open')
})

closeWhatIsPomodoro.addEventListener('click', function(){
    whatIsPomodoro.classList.remove('open')
})

todoBtn.addEventListener('click',function(){
    addTask.classList.add('open')
})

closeAddTaks.addEventListener('click',function(){
    addTask.classList.remove('open')
})

function pomodoroCustom () {
    minutes.innerHTML = pomodoroInput.value
    seconds.innerHTML = '00'
    countMinutes = pomodoroInput.value - 1
    countSeconds = 59
}


customSaveButton.addEventListener('click', function(){
    customTimerPopup.classList.remove('open')
        pomodoroCustom()
})


