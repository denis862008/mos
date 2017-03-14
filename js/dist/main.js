webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports) {

var Toggler = function Toggler() {
    var genderContainer = document.querySelector('.gender-section'),
        genderBtns = Array.prototype.slice.call(genderContainer.querySelectorAll('label')),
        toggleContainer = document.querySelector('.toggle-section'),
        toggler = toggleContainer.querySelector('.toggler'),
        radioBtns = genderContainer.querySelectorAll('input');

    genderBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            var target = this.getAttribute('data-target'),
                radioBtn = this.querySelector('input');

            if(this.classList.contains('selected')) {
                radioBtn.checked = true;
                return;
            }

            for (var i = 0; i < genderBtns.length; i++) {
                genderBtns[i].classList.remove('selected');
            }

            for (var j = 0; j < radioBtns.length; j++) {
                radioBtns[j].checked = false;
            }


            radioBtn.checked = true;
            this.classList.add('selected');
            toggler.setAttribute('data-bind', target);
        });
    });
};

module.exports = Toggler;


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var Toggler = __webpack_require__(2);

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


/***/ })

},[7]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3RvZ2dsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG9nZ2xlciA9IGZ1bmN0aW9uIFRvZ2dsZXIoKSB7XHJcbiAgICB2YXIgZ2VuZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlbmRlci1zZWN0aW9uJyksXHJcbiAgICAgICAgZ2VuZGVyQnRucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGdlbmRlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdsYWJlbCcpKSxcclxuICAgICAgICB0b2dnbGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLXNlY3Rpb24nKSxcclxuICAgICAgICB0b2dnbGVyID0gdG9nZ2xlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGVyJyksXHJcbiAgICAgICAgcmFkaW9CdG5zID0gZ2VuZGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgZ2VuZGVyQnRucy5mb3JFYWNoKGZ1bmN0aW9uKGJ0bikge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG4uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2VuZGVyQnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZ2VuZGVyQnRuc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJhZGlvQnRucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcmFkaW9CdG5zW2pdLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJhZGlvQnRuLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZXIuc2V0QXR0cmlidXRlKCdkYXRhLWJpbmQnLCB0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRvZ2dsZXI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdG9nZ2xlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVG9nZ2xlciA9IHJlcXVpcmUoJy4vdG9nZ2xlci5qcycpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjaXRpZXMgPSBbXSxcclxuICAgICAgICBzdGF0aWNDaXRpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9CQ0YDRhdCw0L3Qs9C10LvRjNGB0LonXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9CQ0YHRgtGA0LDRhdCw0L3RjCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAn0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9Ch0L7Rh9C4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfQnNC+0YHQutCy0LAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9CS0LvQsNC00LjQstC+0YHRgtC+0LonXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9Cd0L7QstC+0YHQuNCx0LjRgNGB0LonXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9Cd0LjQttC90LjQuSDQndC+0LLQs9C+0YDQvtC0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogOSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfQldC60LDRgtC10YDQuNC90LHRg9GA0LMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxMCxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfQmtGA0LDRgdC90L7QtNCw0YAnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxMSxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfQoNC+0YHRgtC+0LIt0L3QsC3QlNC+0L3RgydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9CR0LXQu9Cz0L7RgNC+0LQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAxMyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICfQntC80YHQuidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDE0LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9Cl0LDQsdCw0YDQvtCy0YHQuidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDE1LFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ9CS0L7RgNC+0L3QtdC2J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICB2YXIgdG9nZ2xlciA9IG5ldyBUb2dnbGVyKCk7XHJcbiAgICB2YXIgcGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLFxyXG4gICAgICAgIHNob3dQYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctcGFzcycpO1xyXG5cclxuICAgIHNob3dQYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgYnRuID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWNsb3NlZC1leWUnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaWNvbi1vcGVuZWQtZXllJyk7XHJcbiAgICAgICAgcGFzcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hvd1Bhc3MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgYnRuID0gZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLW9wZW5lZC1leWUnKTtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaWNvbi1jbG9zZWQtZXllJyk7XHJcbiAgICAgICAgcGFzcy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncGFzc3dvcmQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuanMtY2hlY2sgaW5wdXRcIikuaUNoZWNrKCk7XHJcbiAgICAvLyAkKCcjcGhvbmUnKS5tYXNrKCcrNyAoMDAwKSAwMDAtMDAtMDAnKTtcclxuXHJcbiAgICBpZighd2luZG93LmxvY2F0aW9uLmhvc3QpIHtcclxuICAgICAgICAkKCdzZWxlY3QnKS5zZWxlY3QyKHtcclxuICAgICAgICAgICAgZGF0YTogc3RhdGljQ2l0aWVzLFxyXG4gICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckNzc0NsYXNzOiAnY3VzdG9tLXNlbGVjdCcsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ3NzQ2xhc3M6ICdjdXN0b20tc2VsZWN0X2Ryb3Bkb3duJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2pzb24vY2l0aWVzLmpzb24nLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IGRhdGEuY2l0aWVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaXRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNpdGllcyxcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ3NzQ2xhc3M6ICdjdXN0b20tc2VsZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNzc0NsYXNzOiAnY3VzdG9tLXNlbGVjdF9kcm9wZG93bidcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=