mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGFuLXNpbmdoLTE4IiwiYSI6ImNrcmc3czZhZzI4b2IycHF1bGV6c2x5ZjIifQ.JINkpvq-TLELhV5TC79-OA';

function setMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center, // starting position [lng, lat]
        zoom: 15 // starting zoom
        })

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);

        var directions = new MapboxDirections({
            unit: 'metric',
            accessToken: mapboxgl.accessToken
          })
        map.addControl(directions, 'top-left');
       

}
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy : true})

function successLocation(position)
{
     console.log(position);
     setMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(e)
{
     console.log(e);
}