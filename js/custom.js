$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
  });
});

// const genre_1 = 'фэнтези';
// const genre_2 = 'драма';
// const genre_3 = 'комедия';
// const genre_4 = 'мультфильм';
// const genre_5 = 'боевик';

// const films = [
//     {
//         start: '10:00',
//         name: 'Человек-паук',
//         genre: `${genre_1}, ${genre_5}`
//     },
//     {
//         start: '12:00',
//         name: 'Собачья жизнь 2',
//         genre: `${genre_1}, ${genre_2}, ${genre_3}`
//     },
//     {
//         start: '14:00',
//         name: 'История игрушек 4',
//         genre: `${genre_4}, ${genre_1}, ${genre_3}`
//     },
//     {
//         start: '16:00',
//         name: 'Люди в черном: Интернешнл',
//         genre: `${genre_1}, ${genre_5}, ${genre_3}`
//     }
// ];



// const film_start_1 = document.getElementById('film_start_1')
// const film_name_1 = document.getElementById('film_name_1')
// const film_genre_1 = document.getElementById('film_genre_1')

// film_start_1.innerHTML = films[0].start;
// film_name_1.innerHTML = films[0].name;
// film_genre_1.innerHTML = films[0].genre;

// const film_start_2 = document.getElementById('film_start_2')
// const film_name_2 = document.getElementById('film_name_2')
// const film_genre_2 = document.getElementById('film_genre_2')

// film_start_2.innerHTML = films[1].start;
// film_name_2.innerHTML = films[1].name;
// film_genre_2.innerHTML = films[1].genre;

// const film_start_3 = document.getElementById('film_start_3')
// const film_name_3 = document.getElementById('film_name_3')
// const film_genre_3 = document.getElementById('film_genre_3')

// film_start_3.innerHTML = films[2].start;
// film_name_3.innerHTML = films[2].name;
// film_genre_3.innerHTML = films[2].genre;

// const film_start_4 = document.getElementById('film_start_4')
// const film_name_4 = document.getElementById('film_name_4')
// const film_genre_4 = document.getElementById('film_genre_4')

// film_start_4.innerHTML = films[3].start;
// film_name_4.innerHTML = films[3].name;
// film_genre_4.innerHTML = films[3].genre;


const button = $('#submit');
const form = $('#form');
button.on('click', function(event){
    event.preventDefault();
    let data = form.serialize()
    console.log(data)
})