const $input = document.querySelector('.inp'),
$checkbox = document.querySelector('.main-container__checkbox'),
$btnLength = document.querySelector('.main-container__btnLength'),
$btnFilter = document.querySelector('.main-container__btnFilter');
let checkFetch = false;
let $output = document.querySelector('.textOut');
let data = [];


aboutFetch('http://www.mrsoft.by/data.json', $input.value);


function aboutFetch(url) {
    fetch(url)
    .then(response => response.json())
    .then(info =>  {
        checkFetch = true;
        for(let item in info) {
            data = info[item];
            // return data;
        }
    })
    .catch(function(err) {
        console.log(`Error: ${err}`);
    });
}

document.addEventListener('click', (e) => {
    if(e.target === $btnLength) {
        onBtnLengthClick();
    } else if(e.target === $btnFilter) {
        onBtnFilterClick();
    }
}); 

function onBtnLengthClick() {
    inputCheck();
    console.log(data);
}

function onBtnFilterClick() {
    inputCheck();
    console.log(data);
}

function inputCheck() {
    const enteredValue = Number($input.value.trim());
    if(enteredValue === 0) {
        console.log('empty');
    } else if(isNaN(enteredValue)) {
        // function for string entered
        console.log('string');
    } else if(!isNaN(enteredValue)) {
        // function for number entered
        console.log('number');
    }
}