const $input = document.querySelector('.inp'),
      $checkbox = document.querySelector('.main-container__checkbox'),
      $btnLength = document.querySelector('.main-container__btnLength'),
      $btnFilter = document.querySelector('.main-container__btnFilter');

let $output = document.querySelector('.textOut');

      $btnLength.addEventListener('click', onBtnLengthClick);
      $btnFilter.addEventListener('click', onBtnFilterClick);

    function aboutFetch(url, option) {
        fetch(url)
            .then(response => response.json())
            .then(data =>  {
                let msg = '';
                for(let item in data) {
                    if(isNaN(option)) {
                        console.log('String entered');
                    } else {
                        console.log('Number entered');
                    }
                    $output.innerHTML = data[item];
                }
            })
            .catch(function(err) {
                console.log(`Error: ${err}`);
            });
    }

    function onBtnLengthClick() {
        if(isCheckboxChecked()) {
            console.log('Учитываем регистр');
        } else {
            console.log('Не учитываем регистр');
        }
        aboutFetch('http://www.mrsoft.by/data.json', $input.value);
    }

    function onBtnFilterClick() {
        if(isCheckboxChecked()) {
            console.log('Учитываем регистр');
        } else {
            console.log('Не учитываем регистр');
        }
        aboutFetch('http://www.mrsoft.by/data.json', $input.value);
    }

    function isCheckboxChecked() {
        if($checkbox.checked) {
            console.log('checkbox clicked');
            return true;
        } else {
            console.log('checkbox not clicked');
            return false;
        }
    }
