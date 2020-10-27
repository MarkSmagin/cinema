const GEO_API = 'http://api.sypexgeo.net/',
      CITIES_API = 'http://glavpunkt.ru/api/get_rf_cities';




$(($) => {
    let city, cities;

    $.ajax({
        url: GEO_API,
        type: 'GET',
        dataType: 'json',
        success: function(result){
            city = result.city.name_ru;
            $('#city_name').html(city);
        },
        error: function(){
            getCitiesList();
        }
    })

    $('#city_name').on('click', getCitiesList);

    function getCitiesList(){
        $.fancybox.open({
            src  : '#choose_city',
            type : 'inline',
        });
        if(!cities){
            $.ajax({
                url: CITIES_API,
                type: 'GET',
                dataType: 'json',
                success: function(result){;
                    cities = result;
                },
                error: function(){
                    $('#search_result').html('Невозможно подключиться к списку городов');
                }
            })
        }
    }

    $('[name = city_choose]').on('keyup', function(){
        let search = $(this).val(),
            result = '<ul>',
            counter = 0;

        for(let i = 0; i < cities.length; i++){
            if(cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5){
                result += '<li>' + cities[i].name + '</li>';
                counter++;
            }
        }

        result += '</ul>';

        if(!counter){
            result = 'Ничего не найдено'
        }

        $('#search_result').html(result);

        $('body').on('click', '#search_result li', function(){
            $('#city_name').html($(this).html());
            $.fancybox.close();
        })
    })
})

// $(document).ready(($) => {
// )