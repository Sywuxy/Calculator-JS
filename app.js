const resultElement = document.querySelector('#result');
const submitElement = document.querySelector('#submit');

const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multBtn = document.querySelector('#mult');
const divBtn = document.querySelector('#div');

const firstNumber = document.querySelector('#input1');
const secondNumber = document.querySelector('#input2');
let action = '+';

plusBtn.addEventListener('click', function plus(){
    action = '+';
});

minusBtn.addEventListener('click', function minus(){
    action = '-';
});

multBtn.addEventListener('click', function mult(){
    action = '*';
});

divBtn.addEventListener('click', function div(){
    action = '/';
});

function computeNumber(inp1, inp2, actionSymbol){
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    switch (actionSymbol) {
        case '+':
            return num1 + num2;
        
        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;
    }
}

submitElement.addEventListener('click', function(){
    const result = computeNumber(firstNumber, secondNumber, action)

    resultElement.textContent = result;

    if(result < 0){
        resultElement.style.backgroundColor = 'red';
    }else{
        resultElement.style.backgroundColor = 'green';
    }
});