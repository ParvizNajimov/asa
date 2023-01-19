/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// let imgg = document.querySelectorAll(".promo__adv img")
//  imgg.array.forEach((img) => {
//     img.remove()
//  });

let inp = document.querySelector('.add input')
 let images = document.querySelectorAll('.promo__adv img');

images.forEach((img) => {
    img.remove()

// 2 
let genre = document.querySelector('.promo__genre')

genre.innerHTML = 'ДРАМА'

// 3
let bg = document.querySelector('.promo__bg')

function changeImg() {
    bg.style.backgroundImage = "url('./img/bg.jpg')"
}
changeImg()


})


inp.onkeyup() => {
    console.log('ddddd');
}



function myFunction(inp) {
    inp = movieDB
    return(inp) 
}





// let promoForm = document.forms.login
// let btn = document.querySelector('.add button')
// let inp = document.querySelector('.add .adding__input')
// let checkInp = document.querySelector('.checkInput')

// inp.onkeyup = () => {
//     if (inp.value === movieDB.movies[0]) {
//         btn.style.backgroundColor = 'red'
//         btn.disabled === true
//         btn.style.display = 'none'
//     } else if (inp.value === movieDB.movies[1]) {
//         btn.style.backgroundColor = 'red'
//         btn.disabled === true
//         btn.style.display = 'none'
//     } else if (inp.value === movieDB.movies[2]) {
//         btn.style.backgroundColor = 'red'
//         btn.disabled === true
//         btn.style.display = 'none'
//     } else if (inp.value === movieDB.movies[3]) {
//         btn.style.backgroundColor = 'red'
//         btn.disabled === true
//         btn.style.display = 'none'
//     } else if (inp.value === movieDB.movies[4]) {
//         btn.style.backgroundColor = 'red'
//         btn.disabled === true
//         btn.style.display = 'none'
//     } else {
//         btn.style.backgroundColor = '#FFD500'
//         btn.style.display = 'block'
//     }
// }