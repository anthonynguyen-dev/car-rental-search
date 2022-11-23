var mapsApi = "LIufNV7K9CMHwOjT1tOW3U1cCO7tsagUfZUax-ELVoI";
var weatherLatLongApi = "9f2dbba4f257d4eb625124918b06faf4";
var placesJSON;
//"AIzaSyDWLR5Fp1oZyZjl_joHMNhR8FcDMgb7lJU";

function searchLocation(location) {
  console.log(location);
  var placesAPI = `https://places.ls.hereapi.com/places/v1/discover/here?apiKey=${mapsApi}&at=${location.lat},${location.lon};r=2000&pretty`;
  var browseAPI = `https://places.ls.hereapi.com/places/v1/browse?at=${location.lat},${location.lon}&cat=zoo&apiKey=${mapsApi}`;
  // var searchByZipcodeAPI = `https://geocode.search.hereapi.com/v1/geocode?qq=postalCode=${zipcode}&apiKey=${mapsApi}`;
  fetch(browseAPI)
    .then(function (response) {
      console.log("response: ");
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log("data found is...");
      console.log(data);
      placesJSON;
    });
  console.log(placesAPI);
}

function getLocation(city) {
  var locationApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${weatherLatLongApi}`;

  fetch(locationApi)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var location = {
        lat: data[0].lat,
        lon: data[0].lon,
      };
      searchLocation(location);
    });
}

getLocation("san antonio");
//searchLocation(78250);
