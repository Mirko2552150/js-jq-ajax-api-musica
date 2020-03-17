// SCOPO DEL GIOCO: Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.



// L'evento change si verifica quando il valore di un elemento è stato modificato 
// (funziona solo su <input>, <textarea> e <select> elementi).
$(".selettore-kind").change(function(){
    var opzioneSel = $(this).val(); // mettiamo in variabile l'opzione selezionata
    console.log(opzioneSel);
});


// chiamata con AJAX (JQUERY) all'API boolean
$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music", // chiamata API
    method: "GET",
    success: function(data) {
        // console.log(data); // stampo tutto il contenbuto della chiamata API
        // console.log(data.response); // stampo arrey response (nome dato dall'API)
        var albums = data.response; // assegno VAR all'arrey
        for (var i = 0; i < albums.length; i++) { // ciclo ARRAY
            // console.log(albums[i]); // estrapolo contenuto array ed assegno var
            var album = albums[i];
            // creiamo un oggetto per sostituire le chiavi dell API
            var albumTemplate = {
                immagineAlbum: album.poster, // chiave = alla chive poster raggiunta con il dot notation (oggetti)
                titoloAlbum: album.title,
                artista: album.author,
                anno: album.year,
                genere: album.genre
            };
            // console.log(albumTemplate);
            var templatePop = template(albumTemplate); // popolo con il template con le le chiavi degli oggetti(album)
            $(".gabbia").append(templatePop);
        }

    },
    error: function() {
        alert("ERROR");
    }
});









var source =  $('#template-scheda').html();  // con JQ inserisco ID template creato in HTML
var template = Handlebars.compile(source);   // HB lo gestisce
