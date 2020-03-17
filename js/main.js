// SCOPO DEL GIOCO: Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.






// chiamata con AJAX (JQUERY) all'API boolean
$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data) {
        console.log(data); // stampo tutto
        for (var i = 0; i < data.length; i++) {
            console.log(data.response);
        }
    },
    error: function() {
        alert("ERROR");
    }
});








var source =  $('#template-scheda').html();  // con JQ inserisco ID template creato in HTML
var template = Handlebars.compile(source);   // HB lo gestisce

var template = template();
$(".gabbia").append(template)
