document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: false
    });
});
var milktick = document.getElementById("milktick");
var breadtick = document.getElementById("breadtick");
var bisctick = document.getElementById("bisctick");
var starchtick = document.getElementById("starchtick");
var watertick = document.getElementById("watertick");

var fev = document.getElementById("fev");
var com = document.getElementById("com");
var mot = document.getElementById("mot");
var cut = document.getElementById("cut");
var bite = document.getElementById("bite");

var milk = document.getElementById("milk");
var bread = document.getElementById("bread");
var biscuits = document.getElementById("biscuits");
var starch = document.getElementById("starch");
var water = document.getElementById("water");

var fever = document.getElementById("fever");
var cold = document.getElementById("cold");
var motions = document.getElementById("motions");
var injuries = document.getElementById("injuries");
var insect = document.getElementById("insect");

var bed = document.getElementById("bed");
var toil = document.getElementById("toil");
var tow = document.getElementById("tow");
var rain = document.getElementById("rain");
var pads = document.getElementById("pads");

var bedsheets = document.getElementById("bedsheets");
var toiletry = document.getElementById("toiletry");
var towels = document.getElementById("towels");
var raincoats = document.getElementById("raincoats");
var sanitary = document.getElementById("sanitary");

milk.addEventListener("click",function () {
    if(milktick.classList.contains("fa-check")){
        milktick.classList.remove("fa-check");
    }
    else{
        milktick.classList.add("fa-check");
    }
});
bread.addEventListener("click", function () {
    if (breadtick.classList.contains("fa-check")) {
        breadtick.classList.remove("fa-check");
    }
    else {
        breadtick.classList.add("fa-check");
    }
});
biscuits.addEventListener("click", function () {
    if (bisctick.classList.contains("fa-check")) {
        bisctick.classList.remove("fa-check");
    }
    else {
        bisctick.classList.add("fa-check");
    }
});
water.addEventListener("click", function () {
    if (watertick.classList.contains("fa-check")) {
        watertick.classList.remove("fa-check");
    }
    else {
        watertick.classList.add("fa-check");
    }
});
starch.addEventListener("click", function () {
    if (starchtick.classList.contains("fa-check")) {
        starchtick.classList.remove("fa-check");
    }
    else {
        starchtick.classList.add("fa-check");
    }
});
fever.addEventListener("click", function () {
    if (fev.classList.contains("fa-check")) {
        fev.classList.remove("fa-check");
    }
    else {
        fev.classList.add("fa-check");
    }
});
cold.addEventListener("click", function () {
    if (com.classList.contains("fa-check")) {
        com.classList.remove("fa-check");
    }
    else {
        com.classList.add("fa-check");
    }
});
motions.addEventListener("click", function () {
    if (mot.classList.contains("fa-check")) {
        mot.classList.remove("fa-check");
    }
    else {
        mot.classList.add("fa-check");
    }
});
injuries.addEventListener("click", function () {
    if (cut.classList.contains("fa-check")) {
        cut.classList.remove("fa-check");
    }
    else {
        cut.classList.add("fa-check");
    }
});
insect.addEventListener("click", function () {
    if (bite.classList.contains("fa-check")) {
        bite.classList.remove("fa-check");
    }
    else {
        bite.classList.add("fa-check");
    }
});

bedsheets.addEventListener("click", function () {
    if (bed.classList.contains("fa-check")) {
        bed.classList.remove("fa-check");
    }
    else {
        bed.classList.add("fa-check");
    }
});
toiletry.addEventListener("click", function () {
    if (toil.classList.contains("fa-check")) {
        toil.classList.remove("fa-check");
    }
    else {
        toil.classList.add("fa-check");
    }
});
towels.addEventListener("click", function () {
    if (tow.classList.contains("fa-check")) {
        tow.classList.remove("fa-check");
    }
    else {
        tow.classList.add("fa-check");
    }
});
raincoats.addEventListener("click", function () {
    if (rain.classList.contains("fa-check")) {
        rain.classList.remove("fa-check");
    }
    else {
        rain.classList.add("fa-check");
    }
});
sanitary.addEventListener("click", function () {
    if (pads.classList.contains("fa-check")) {
        pads.classList.remove("fa-check");
    }
    else {
        pads.classList.add("fa-check");
    }
});

var x = document.getElementById("demo");
var latlng;
var address;
geocoder = new google.maps.Geocoder();
function success(position){
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                address = results[0].address_components[0].short_name + "," + results[0].address_components[1].short_name + "," + results[0].address_components[2].short_name + "," + results[0].address_components[3].short_name;
                //console.log(address);
                x.innerHTML = address;
                // Render Stuff
            } else {
                error("Unable to reverse Geocode");
            }
        }
    });
}
function error(msg) {
    console.log(msg);
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} 
else {
    error('HTML 5 Geolocation not supported');
}
