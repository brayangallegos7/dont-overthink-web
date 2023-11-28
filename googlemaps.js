const placeInput = document.getElementById("place-input");
let map;
let autocomplete;
window.initMap = function(){
    const coords = {lat:21.424183, lng:-104.897872};
    map = maps.Map(document.getElementById("map"),{
        zoom: 6,
        center: coords,
    });
    const marker = new google.maps.Marker({
        position: coords,
        map,
        icon:"./icons/marcador.svg",
    });
    google.maps.event.addListener(marker, "click", ()=>{
        map.setCenter(coords);
        map.setZoom(10);
    } )
    searchGoogleMap();
};

const searchGoogleMap = ()=>{
    autocomplete = new google.maps.places.Autocomplete(placeInput);
    autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        map.setZoom(13);
    });
};