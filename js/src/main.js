var vendors = require('./init.js');

(function() {
    vendors();
})();

window.addEventListener('load', function() {
    var cities = [],
        staticCities = [
            {
                id: 1,
                text: 'Архангельск'
            },
            {
                id: 2,
                text: 'Астрахань'
            },
            {
                id: 3,
                text: 'Санкт-Петербург'
            },
            {
                id: 4,
                text: 'Сочи'
            },
            {
                id: 5,
                text: 'Москва'
            },
            {
                id: 6,
                text: 'Владивосток'
            },
            {
                id: 7,
                text: 'Новосибирск'
            },
            {
                id: 8,
                text: 'Нижний Новгород'
            },
            {
                id: 9,
                text: 'Екатеринбург'
            },
            {
                id: 10,
                text: 'Краснодар'
            },
            {
                id: 11,
                text: 'Ростов-на-Дону'
            },
            {
                id: 12,
                text: 'Белгород'
            },
            {
                id: 13,
                text: 'Омск'
            },
            {
                id: 14,
                text: 'Хабаровск'
            },
            {
                id: 15,
                text: 'Воронеж'
            }
        ];

    if(!window.location.host) {
        $('select').select2({
            data: staticCities,
            minimumResultsForSearch: Infinity,
            containerCssClass: 'custom-select',
            dropdownCssClass: 'custom-select_dropdown'
        });
    } else  {
        $.ajax({
            type: 'GET',
            url: 'json/cities.json',
            dataType: 'json',
            cache: false,
            success: function(data) {
                var items = data.cities;

                items.forEach(function(item, index) {
                    cities.push({
                        id: index + 1,
                        text: item.title
                    });
                });

                $('select').select2({
                    data: cities,
                    minimumResultsForSearch: Infinity,
                    containerCssClass: 'custom-select',
                    dropdownCssClass: 'custom-select_dropdown'
                });
            }
        });
    }
});
