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
