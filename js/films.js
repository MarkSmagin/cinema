$(document).ready(function(){
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.1';

    const films = [
      568413,
      530,
      1045172,
      1005878,
      535341,
      178707
    ];
    
    const halls = [
        {
            number: 1,
            space: 10
        },
        {
            number: 2,
            space: 20
        },
        {
            number: 3,
            space: 30
        },
        {
            number: 4,
            space: 40
        }
    ]
    
    let places = [];
    let hallsPlaces = [];
    let numberHall;
    for(let i = 0; i < films.length; i++){
        numberHall = getRandomNumber(1, 5);
        for(let j = 0; j < halls.length; j++){
            if (halls[j].number === numberHall){
                for(let x = 1; x <= halls[j].space; x++){
                    places[x - 1] = {
                        number: x,
                        booking: ((Math.round(Math.random() * (10 - 1) + 1) > 5) ? true : false),
                        price: ((x % 10 <= 3 || x % 10 >= 7) ? 100 : 200)
                    }
                }
            }
        }
        hallsPlaces[i] = places;
        places = [];
    }
    
    const getFilmById = function (id) {
      return new Promise(function(resolve, reject){
            fetch(`${url}/films/${id}`, {
              headers: {
                "X-API-KEY": "5bd7916f-c619-4777-8d8b-78d1606e44ba"
              }
            }).then(response => response.json()).then(resolve)
      })
    }
    
    function getRandomNumber(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
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
        
        getPrice: function() {
            let maxPrice = 0;
            for(let i = 0; i < hallsPlaces.length; i++){
                for(let j = 0; j < hallsPlaces[i].length; j++){
                    if (maxPrice < hallsPlaces[i][j].price){
                        maxPrice = hallsPlaces[i][j].price;
                    }
                } 
            }
            let minPrice = maxPrice;
            for(let i = 0; i < hallsPlaces.length; i++){
                for(let j = 0; j < hallsPlaces[i].length; j++){
                    if (minPrice > hallsPlaces[i][j].price){
                        minPrice = hallsPlaces[i][j].price;
                    }
                } 
            }
            return `от ${minPrice} до ${maxPrice}`;
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
                <td class="movie-list__price movie-list__cell_size">${film.getPrice.call(this)} рублей</td>
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
    films.forEach(function(item, index){    
        let newFilm = getFilmById(item);
        newFilm.then(result => {
            let newRow = film.renderFilmRow.call(result.data);
            let tr = document.createElement("tr");
            tr.classList.add('movie-list__row');
            tr.classList.add(`${index}`);
            tr.innerHTML = newRow;
            tableDOM.appendChild(tr);
    
            let newBlock = film.renderFilmBlock.call(result.data);
            let div = document.createElement("div");
            div.classList.add("block-movies__movie");
            div.innerHTML = newBlock;
            blockDOM.appendChild(div);
            numberFilms++;
            
    
            function filmClick(event) {
                event.preventDefault();

                let name = document.getElementById('user_name');
                let nameParent = name.parentNode;
                nameParent.classList.remove('error');
                nameParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';

                let phone = document.getElementById('user_phone');
                let phoneParent = phone.parentNode;
                phoneParent.classList.remove('error');
                phoneParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
    
                buy_ticket.classList.remove('hidden');
                let buyTicketName = document.getElementById('buyTicketName');
                buyTicketName.innerHTML = result.data.nameRu;
    
                let buyTicketStart = document.getElementById('buyTicketStart');
                buyTicketStart.innerHTML = tr.getElementsByClassName('movie-list__time')[0].innerHTML;
    
                let buyTicketGenre = document.getElementById('buyTicketGenre');
                buyTicketGenre.innerHTML = film.getGenre.call(result.data);
    
                let buyTicketPrice = document.getElementById('buyTicketPrice');
                buyTicketPrice.innerHTML = tr.getElementsByClassName('movie-list__price')[0].innerHTML;
                
                let blockSquares = document.createElement('div');
                blockSquares.classList.add('places');
                blockSquares.id = "places";
                $(blockSquares).insertAfter($("input:last").parent(div));
    
                let p = document.createElement("p");
                p.innerHTML = 'Выберите место:';
                blockSquares.appendChild(p);

                for(let i = 0; i < hallsPlaces.length; i++){
                    if(i === index){
                        for(let j = 0; j < hallsPlaces[i].length; j++){
                            let newSquare = document.createElement("div");
                            newSquare.addEventListener('click', order);
                            newSquare.addEventListener('click', placeToggle);
                            newSquare.addEventListener('contextmenu', placeContext)
                            newSquare.addEventListener('mouseover', placeHower);
                            newSquare.addEventListener('mouseout', placeHowerOut);
                            newSquare.classList.add("places_square");
                            if(!hallsPlaces[i][j].booking) {
                                newSquare.classList.add("places_booked");
                            }
                            else{
                                newSquare.classList.add("places_free");
                            }
                            newSquare.classList.add(`${hallsPlaces[i][j].price}`)
                            newSquare.innerHTML = hallsPlaces[i][j].number;
                            blockSquares.appendChild(newSquare);
                        }
                    }
                }
            }
    
            
            const closeBuyTicket = document.getElementById('buy_ticket_close');
            function filmClickClose(event) {
                event.preventDefault();
                document.getElementById('places').remove();
                buyTicketPlaces.innerHTML = '';
                buyTicketPlacesSum.innerHTML = '';
                buyTicketPriceSum.innerHTML = ''; 
                buy_ticket.classList.add('hidden');
                selectedPlaces = [];
            };
    
            tr.addEventListener('click', filmClick);

            closeBuyTicket.addEventListener('click', filmClickClose); 

            const sendForm = document.getElementById('submitBuyTicket');
            sendForm.addEventListener('click', sendBuyTicketForm);
            function sendBuyTicketForm(event){
                event.preventDefault();

                let name = document.getElementById('user_name');
                let nameParent = name.parentNode;
                nameParent.classList.remove('error');
                nameParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
                if(!checkInput(name.value)){
                nameParent.classList.add('error');
                nameParent.getElementsByClassName('form_error_massage')[0].innerHTML = 'Заполните поле Имя';
                }

                let phone = document.getElementById('user_phone');
                let phoneParent = phone.parentNode;
                phoneParent.classList.remove('error');
                phoneParent.getElementsByClassName('form_error_massage')[0].innerHTML = '';
                if(!checkInput(phone.value)){
                phoneParent.classList.add('error');
                phoneParent.getElementsByClassName('form_error_massage')[0].innerHTML = 'Заполните поле Телефон';
                }
            }

            function checkInput(value) {
                if (value)
                  return true;
                return false
            }
        })
    })
    
    let selectedPlaces = [];
    function order(e) {
        let el = e.target;
        if(el.classList.contains('places_free')) {
            if(selectedPlaces.includes(el.innerHTML)){
                for(let i = 0; i < selectedPlaces.length; i++) {
                    if (selectedPlaces[i] == el.innerHTML) {  
                        selectedPlaces.splice(i, 1);
                    }
                }
            }   
            else{
                selectedPlaces.push(el.innerHTML);
            }
            console.log(selectedPlaces)
            buyTicketPlaces.innerHTML = selectedPlaces;
            buyTicketPlacesSum.innerHTML = selectedPlaces.length;
            let total = 0;
            for(let i = 0; i < selectedPlaces.length; i++){
                if(selectedPlaces[i] % 10 <= 3 || selectedPlaces[i] % 10 >= 7 ){
                    total = total + 100;
                }
                else{
                    total = total + 200;
                }
            }
            buyTicketPriceSum.innerHTML = `${total} рублей`;
        }
        else {
            alert('Место забронировано');
        }
    }
    
    function placeToggle(e) {
        let el = e.target;
        if(el.classList.contains('places_free')) {
            el.classList.toggle('yellow_place');
        }
    }
    
    function placeContext(e) {
        let el = e.target;
        if(el.classList.contains('100')){
            alert(`Цена билета 100 рублей`)
        }
        if(el.classList.contains('200')){
            alert(`Цена билета 200 рублей`)
        }
    }
    
    function placeHower(e) {
        let el = e.target;
        el.classList.add('places_grey');
    }
    
    function placeHowerOut(e) {
        let el = e.target;
        el.classList.remove('places_grey');
    }
    
    setTimeout(function ready(){
        if (numberFilms == films.length){
          $(".owl-carousel").owlCarousel({
            nav:true,
            loop:true,
          })
        }
        else
        {
            setTimeout(ready);
        }
    })
})



