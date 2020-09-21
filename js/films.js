const genre = ['фэнтези', 'драма', 'комедия', 'мультфильм', 'боевик']


const films = [
    ['10:00', 'Человек-паук', [0, 4]],
    ['12:00', 'Собачья жизнь 2', [0, 1, 2]],
    ['14:00', 'История игрушек 4', [0, 2, 3]],
    ['16:00', 'Люди в черном: Интернешнл', [0, 2, 4]]
];


for (var i = 0; i < films.length; i++) {
    const film_start = document.getElementById('film_start_' + (i + 1))
    const film_name = document.getElementById('film_name_' + (i + 1))
    const film_genre = document.getElementById('film_genre_' + (i + 1))
    film_start.innerHTML = films[i][0];
    film_name.innerHTML = films[i][1];
    for (var j = 0; j < films[i][2].length; j++) {
        for (var x = 0; x < genre.length; x++) {
            if (films[i][2][j] == x)
            films[i][2][j] = genre[x];
        }
    }
    film_genre.innerHTML = films[i][2];
}


// Задачка на будущее
// const newEl = document.createElement('tr');
// newEl.classList.add('movie-list__row')
// newEl.classList.add('movie-list__row_dark')

// const newTD = document.createElement('td');
// newTD.classList.add('movie-list__time')
// newTD.classList.add('movie-list__cell_size')

// newEl.appendChild(newTD)

// console.log(newEl);

// var child = element.appendChild(child);

