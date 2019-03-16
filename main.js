document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: false
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
});

var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
    accordion: false
});

$(document).ready(function () {
    $('.collapsible').collapsible();
});