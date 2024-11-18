window.onload = function() {
    var buttons = document.querySelectorAll('.more-information'); 

    buttons.forEach(function(button) { 
        button.addEventListener('click', function() { 
            var info = this.parentNode;
            var p = document.createElement('p'); 
            p.textContent = 'Aquí va el texto';

            if (info.lastChild.nodeName !== 'P') {
                info.appendChild(p); 
            } else { 
                info.removeChild(info.lastChild);
            }
        });
    });
};