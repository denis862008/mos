module.exports = function() {
    window.$ = require('jquery');
    window.jQuery = window.$;

    require('select2/dist/js/select2.full.js');
    require('../lib/icheck.js');
};
