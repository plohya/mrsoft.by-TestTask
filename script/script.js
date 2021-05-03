'use sctict';

// Объявление переменных
const $input = document.querySelector('.inp'),
      $checkbox = document.querySelector('.main-container__checkbox'),
      $btnLength = document.querySelector('.main-container__btnLength'),
      $btnFilter = document.querySelector('.main-container__btnFilter');

let $output = document.querySelector('.textOut'),
    $stringsCount = document.querySelector('.stringsCount');

let data, resultArr = [];

getData('http://www.mrsoft.by/data.json');

// Подписываем на событие весь документ
document.addEventListener('click', (e) => {
    if(e.target === $btnLength) {
        onBtnLengthClick($input.value, data);
    } else if(e.target === $btnFilter) {
        onBtnFilterClick($input.value, data);
    } else if (e.target === $input) {
        $output.innerHTML = '';
        $stringsCount.innerHTML = '';
    }
}); 

// Функция, которая получает данные по HTTP запросу
function getData(url) {
    fetch(url)
    .then(response => response.json())
    .then(info =>  {
        for(let item in info) {
            data = info[item];
        }
    })
    .catch(function(err) {
        console.log(`Error: ${err}`);
    }); 
}

// Было бы удобнее сделать одну кнопку, которая решала бы по какому параметру ей искать 
// (по длине или по подстроке) исходя из введенного значение

// Функция, которая начинает выполнение других функция, в зависимости от нажатой кнопки (нажата кнопка поиска по длине строки)
function onBtnLengthClick(value, fromData) {
    inputCheck(value, 'length');
    findForLength(value, fromData);
    toOutput($output, $stringsCount, resultArr);
    resultArr = [];
}

// Функция, которая начинает выполнение других функция, в зависимости от нажатой кнопки (нажата кнопка поиска по подстроке)
function onBtnFilterClick(value, fromData) {
    findForSubstring(value, fromData);
    toOutput($output, $stringsCount, resultArr);
    resultArr = [];
}

// Функция, которая проверяет правильная ли кнопка нажата, в зависимости от введенного в input значения 
function inputCheck(value, filter) {
    const enteredValue = value.trim();
    if(enteredValue === '') {
        alert('Please, enter something! (if you need to find something :) )');
    } else if(isNaN(Number(enteredValue)) && filter === 'length') {    
        alert('You need to Enter a number (for this button)');
    } 
}

// Функция поиска по длине строки
function findForLength(value, fromData) {
    fromData.forEach(item => {
        if(item.length > value) {
            resultArr.push(item);
        }
    });
}

// Функция поиска по подстроке
function findForSubstring(value, fromData) {    
    fromData.forEach(item => {
        if($checkbox.checked) {
            // case sensitive
            if(item.indexOf(value.trim()) != -1) {
                resultArr.push(item);
            }
        } else {
            // case insensitive
            if(item.toLowerCase().indexOf(value.toLowerCase().trim()) != -1) {
                resultArr.push(item);
            }
        }
    });
}

// Функция вывода результата в специальное поле
function toOutput(outputForStrings, outputForAmount, resultArray) {
    outputForStrings.innerHTML = `Output strings: <br> ${resultArray}`;
    outputForAmount.innerHTML = `Amount of output strings: <br> ${resultArray.length}`;
}