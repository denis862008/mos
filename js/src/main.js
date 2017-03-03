var vendors = require('./init.js');

(function() {
    vendors();
})();


window.addEventListener('load', function() {
    var cities = [];

    $.ajax({
        type: 'GET',
        url: 'json/cities.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    });

    $('select').select2({
        minimumResultsForSearch: Infinity,
        containerCssClass: 'custom-select',
        tags: "true",
        dropdownCssClass: 'custom-select_dropdown'
    });
});
