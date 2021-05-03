'use sctict';

const $input = document.querySelector('.inp'),
      $checkbox = document.querySelector('.main-container__checkbox'),
      $btnLength = document.querySelector('.main-container__btnLength'),
      $btnFilter = document.querySelector('.main-container__btnFilter');

let $output = document.querySelector('.textOut'),
    $stringsCount = document.querySelector('.stringsCount');

let data, resultArr = [];

const oops = getData('http://www.mrsoft.by/data.json');

// Try to take data from return in getData. Now it takes by declaration data from getData and using like a local variable
// Input gets clear by 'click', not by focus
// inputCheck() needs to be 2 functions, not one
// add parameters for functions
// add features for exceptions
// create view.js and script.js as 2 scripts
// maybe come back to $element.addEventL from doc.addEventL

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
        // $input.value = '';
        $output.innerHTML = '';
        $stringsCount.innerHTML = '';
    }
}); 


// function inputCheck() {
    //     const enteredValue = Number($input.value.trim());
    //     if(enteredValue === 0) {
        //         console.log('empty');
        //         alert('Please, enter something!');
        //     } else if(isNaN(enteredValue)) {
            //         console.log('string');
            //         // function for string entered
            //         data.forEach(item => {
                //             if($checkbox.checked) {
                    //                 // 'aAa' != 'aaa'
                    //                 console.log(item.indexOf($input.value.trim()));
                    //                 if(item.indexOf($input.value.trim()) != -1) {
                        //                     resultArr.push(item);
                        //                 }
                        //             } else {
                            //                 // 'aAa' === 'aaa'
                            //                 console.log(item.indexOf($input.value.trim()));
                            //                 if(item.toLowerCase().indexOf($input.value.toLowerCase().trim()) != -1) {
                                //                     resultArr.push(item);
                                //                 }
                                //             }
                                //         });
                                //         $output.innerHTML = `Output strings: <br> ${resultArr}`;
                                //         // $stringsCount.innerHTML = resultArr.length;
                                //         $stringsCount.innerHTML = `Amount of output strings: <br> ${resultArr.length}`;
                                //         resultArr = [];
                                
                                //     } else if(!isNaN(enteredValue)) {
                                    //         // function for number entered
                                    //         console.log('number');
                                    //     {
    
//             data.forEach(item => {
//                 if(item.length > enteredValue) {
//                     console.log(item.length);
//                     resultArr.push(item);
//             }});
//             // $output.innerHTML = resultArr;
//             $output.innerHTML = `Output strings: <br> ${resultArr}`;
//             $stringsCount.innerHTML = `Amount of output strings: <br> ${resultArr.length}`;
//             resultArr = [];
//         }
//     }
// }


function inputCheck() {
    // const enteredValue = Number($input.value.trim());
    const enteredValue = $input.value.trim();
    if(enteredValue === '') {
        console.log('empty');
        alert('Please, enter something!');
    } else if(isNaN(Number(enteredValue))) {
        findForSubstring(enteredValue);
        toOutput($output, $stringsCount, resultArr);
        // $output.innerHTML = `Output strings: <br> ${resultArr}`;
        // $stringsCount.innerHTML = resultArr.length;
        // $stringsCount.innerHTML = `Amount of output strings: <br> ${resultArr.length}`;
        resultArr = [];
    } else if(!isNaN(Number(enteredValue))) {
        // function for number entered
        findForLength(enteredValue);
            // $output.innerHTML = resultArr;
            toOutput($output, $stringsCount, resultArr);
            // $output.innerHTML = `Output strings: <br> ${resultArr}`;
            // $stringsCount.innerHTML = `Amount of output strings: <br> ${resultArr.length}`;
            resultArr = [];
    }
}

function onBtnLengthClick() {
    inputCheck();
}

function onBtnFilterClick() {
    inputCheck();
    
}

function findForLength(value) {
console.log('number');
            data.forEach(item => {
                if(item.length > value) {
                    console.log(item.length);
                    resultArr.push(item);
            }});
}

function findForSubstring(value) {
    console.log('string');
    // function for string entered
    data.forEach(item => {
        if($checkbox.checked) {
            // 'aAa' != 'aaa'
            // console.log(item.indexOf($input.value.trim()));
            if(item.indexOf($input.value.trim()) != -1) {
                resultArr.push(item);
            }
        } else {
            // 'aAa' === 'aaa'
            // console.log(item.indexOf($input.value.trim()));
            if(item.toLowerCase().indexOf($input.value.toLowerCase().trim()) != -1) {
                resultArr.push(item);
            }
        }
    });
}

function toOutput(outputForStrings, outputForAmount, resultArray) {
    outputForStrings.innerHTML = `Output strings: <br> ${resultArray}`;
    // $stringsCount.innerHTML = resultArr.length;
    outputForAmount.innerHTML = `Amount of output strings: <br> ${resultArray.length}`;
    // resultArray = [];
}