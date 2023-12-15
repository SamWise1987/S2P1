









const number1 = document.getElementById('Number1')
const number2 = document.getElementById('number2')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const times = document.getElementById('times')
const divide = document.getElementById('divide')
const result = document.getElementById('result')


function sum(){
    const result = Number(number1.value) + Number(number2.value);
    result.innerHTML = '<p>' + resultSum + '</p>'

}

plus.addEventListener('click',() => {
    sum()
})

function minus(){
    const resultMinus = Number(number1.value) - Number(number2.value);
    result.innerHTML = '<p>' + resultMinus + '</p>'

}

minus.addEventListener ('click',() =>{
    minus()
})

function times (){
    const resultTimes = Number(number1.value) * Number(number2.value);
    result.innerHTML = '<p>' + resultTimes + '</p>'

}

times.addEventListener ('click', () => {
    times()
})

function divide (){
    const resultDivide = Number(number1.value) / Number(number2.value);
    result.innerHTML = '<p>' + resultTimes + '</p>'

}

divide.addEventListener ('click', () => {
    divide()
})
