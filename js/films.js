const url = 'https://kinopoiskapiunofficial.tech/api/v2.1';

const films = [
  568413,
  530,
  1045172,
  1005878,
  535341,
  178707
];

const getFilmById = function (id) {
  return new Promise(function(resolve, reject){
        fetch(`${url}/films/${id}`, {
          headers: {
            "X-API-KEY": "5bd7916f-c619-4777-8d8b-78d1606e44ba"
          }
        }).then(response => response.json()).then(resolve)
  })
}

const film = {
    getName: function() {

        return this.nameRu;
    },

    getCountry: function() {
        let countries = '';
        this.countries.forEach(function(item){
            countries += `${item.country} `
        })
        return countries;
    },

    getYear: function() {
        return this.year;
    },

    getDescription: function() {
        return this.description;
    },

    getImg: function() {
        return this.posterUrl;
    },

    getLink: function() {
        return this.webUrl;
    },

    getStart: function() {
        function getRandomNumber(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
             return Math.floor(Math.random() * (max - min)) + min;
        }
    
        let time1, time2, time3, time4;
    
        time1 = getRandomNumber(0, 2);
        time3 = getRandomNumber(0, 5);
        time4 = getRandomNumber(0, 9);
    
        switch (time1){
            case 0:
            case 1:
                time2 = getRandomNumber(0, 9);
            default:
                time2 = getRandomNumber(0, 3);
        }
    
        return `${time1}${time2}:${time3}${time4}`;
    },

    getGenre: function() {
        let genres = '';
        this.genres.forEach(function(item){
           genres += `${item.genre} `
        })
        return genres;
    },

    renderFilmRow: function(){
        return `
            <td class="movie-list__time movie-list__cell_size">${film.getStart.call(this)}</td>
            <td class="movie-list__name movie-list__cell_size">${film.getName.call(this)}</td>
            <td class="movie-list__genre movie-list__cell_size">${film.getGenre.call(this)}</td>
        `
    },

    renderFilmBlock: function() {
        return `<div class="block-movies__relative">
                    <div class="movie__bg">
                        <img src="${film.getImg.call(this)}" alt="">
                    </div>
                    <div class="movie__descr">
                        <div class="movie__name">
                            ${film.getName.call(this)}
                        </div>
                        <div class="movie__sep"></div>
                        <div class="movie__text">${film.getDescription.call(this).substr(0, 150)}...</div>
                        <div class="movie__links">
                            <a href="#" target="_blank"><i class="icon icon-twitter" title="twitter"></i></a>
                            <a href="#" target="_blank"><i class="icon icon-facebook" title="facebook"></i></a>
                            <a href="#"><i class="icon icon-camera" title="camera"></i></a>
                        </div>
                    </div>
                </div>`;
    }
}

let numberFilms = 0;
let tableDOM = document.getElementById("filmsTable");
let blockDOM = document.getElementById("filmsBlock");
films.forEach(function(item, i){    
    let newFilm = getFilmById(item);
    newFilm.then(result => {
        let newRow = film.renderFilmRow.call(result.data);
        let tr = document.createElement("tr");
        
        tr.classList.add('movie-list__row')
        if((i + 1) % 3 === 0) {
            tr.classList.add('movie-list__row_third')
        }
        if((i + 1) % 2 === 0){
            tr.classList.add('movie-list__row_light')
        }
        else{
            tr.classList.add('movie-list__row_dark')
        }
        tr.innerHTML = newRow;
        tableDOM.appendChild(tr);

        let newBlock = film.renderFilmBlock.call(result.data);
        let div = document.createElement("div");
        div.classList.add("block-movies__movie");
        div.innerHTML = newBlock;
        blockDOM.appendChild(div);
        numberFilms++;
    })
})

let filmsTableReady = setTimeout(function ready(){
    if (numberFilms == films.length){
      $(".owl-carousel").owlCarousel({
        nav:true,
        loop:true,
      })
    }
    else
    {
        filmsTableReady = setTimeout(ready);
    }
})


