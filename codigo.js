const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
})

const dropdowns1 = document.querySelectorAll('.dropdown1');

dropdowns1.forEach(dropdown1 => {

    const select1 = dropdown1.querySelector('.select1');
    const caret1 = dropdown1.querySelector('.caret1');
    const menu1 = dropdown1.querySelector('.menu1');
    const options1 = dropdown1.querySelectorAll('.menu1 li');
    const selected1 = dropdown1.querySelector('.selected1');

    select1.addEventListener('click', () => {
        select1.classList.toggle('select1-clicked');
        caret1.classList.toggle('caret1-rotate');
        menu1.classList.toggle('menu1-open');
    });

    options1.forEach(option1 => {
        option1.addEventListener('click', () => {
            selected1.innerText = option1.innerText;
            select1.classList.remove('select1-clicked');
            caret1.classList.remove('caret1-rotate');
            menu1.classList.remove('menu1-open');
            options1.forEach(option => {
                option1.classList.remove('active1');
            });
            option1.classList.add('active1');
        });
    });
})

const dropdowns2 = document.querySelectorAll('.dropdown2');

dropdowns2.forEach(dropdown2 => {

    const select2 = dropdown2.querySelector('.select2');
    const caret2 = dropdown2.querySelector('.caret2');
    const menu2 = dropdown2.querySelector('.menu2');
    const options2 = dropdown2.querySelectorAll('.menu2 li');
    const selected2 = dropdown2.querySelector('.selected2');

    select2.addEventListener('click', () => {
        select2.classList.toggle('select2-clicked');
        caret2.classList.toggle('caret2-rotate');
        menu2.classList.toggle('menu2-open');
    });

    options2.forEach(option2 => {
        option2.addEventListener('click', () => {
            selected2.innerText = option2.innerText;
            select2.classList.remove('select2-clicked');
            caret2.classList.remove('caret2-rotate');
            menu2.classList.remove('menu2-open');
            options2.forEach(option => {
                option2.classList.remove('active2');
            });
            option2.classList.add('active2');
        });
    });
})