const $input = document.querySelector('.inp'),
$checkbox = document.querySelector('.main-container__checkbox'),
$btnLength = document.querySelector('.main-container__btnLength'),
$btnFilter = document.querySelector('.main-container__btnFilter');
let $output = document.querySelector('.textOut'),
$stringsCount = document.querySelector('.stringsCount');
let data, resultArr = [];

getData('http://www.mrsoft.by/data.json');

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
    return data;
}

document.addEventListener('click', (e) => {
    if(e.target === $btnLength) {
        onBtnLengthClick();
    } else if(e.target === $btnFilter) {
        onBtnFilterClick();
    } else if (e.target === $input) {
        $output.innerHTML = '';
        $stringsCount.innerHTML = '';
    }
}); 

function onBtnLengthClick() {
    inputCheck();
    // console.log(data);
}

function onBtnFilterClick() {
    inputCheck();
    // console.log(data);
}

function findForLength() {

}

function inputCheck() {
    const enteredValue = Number($input.value.trim());
    if(enteredValue === 0) {
        console.log('empty');
        alert('Please, enter something!');
    } else if(isNaN(enteredValue)) {
        console.log('string');
        // function for string entered
        data.forEach(item => {
            if($checkbox.checked) {
                // 'aAa' != 'aaa'
                console.log(item.indexOf($input.value.trim()));
                if(item.indexOf($input.value.trim()) != -1) {
                    resultArr.push(item);
                }
            } else {
                // 'aAa' === 'aaa'
                console.log(item.indexOf($input.value.trim()));
                if(item.toLowerCase().indexOf($input.value.toLowerCase().trim()) != -1) {
                    resultArr.push(item);
                }
            }
        });
        $output.innerHTML = `Output strings: <br> ${resultArr}`;
        // $stringsCount.innerHTML = resultArr.length;
        $stringsCount.innerHTML = `Amount of output strings: <br> ${resultArr.length}`;
        resultArr = [];

    } else if(!isNaN(enteredValue)) {
        // function for number entered
        console.log('number');
    {
            data.forEach(item => {
                if(item.length > enteredValue) {
                    console.log(item.length);
                    resultArr.push(item);
            }});
            // $output.innerHTML = resultArr;
            $output.innerHTML = `Output strings: <br> ${resultArr}`;
            $stringsCount.innerHTML = `Amount of output strings: <br> ${resultArr.length}`;
            resultArr = [];
        }
    }
}