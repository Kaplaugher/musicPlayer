const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoia2FwbGF1Z2hlcjk0IiwiYSI6ImNqdXduZndlMTBlOGI0M2xhaDV4YTdub3kifQ._9nMQROgb4-IkUAvOzzqhA';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setupMap(centerPosition) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  });

  const navigationControls = new mapboxgl.NavigationControl();
  map.addControl(navigationControls);

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });
  map.addControl(directionControls, 'top-left');
}

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}
