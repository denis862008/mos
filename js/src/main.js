var Toggler = require('./toggler.js');

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

    var toggler = new Toggler();
    var pass = document.getElementById('password'),
        showPass = document.getElementById('show-pass');

    showPass.addEventListener('mousedown', function(e) {
        var btn = e.target;

        btn.classList.remove('icon-closed-eye');
        btn.classList.add('icon-opened-eye');
        pass.setAttribute('type', 'text');
    });

    showPass.addEventListener('mouseup', function(e) {
        var btn = e.target;

        btn.classList.remove('icon-opened-eye');
        btn.classList.add('icon-closed-eye');
        pass.setAttribute('type', 'password');
    });

    $(".js-check input").iCheck();
    // $('#phone').mask('+7 (000) 000-00-00');

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
