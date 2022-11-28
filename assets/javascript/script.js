var mapsApi = "LIufNV7K9CMHwOjT1tOW3U1cCO7tsagUfZUax-ELVoI";
var weatherLatLongApi = "9f2dbba4f257d4eb625124918b06faf4";
var placesJSON;
var citySearch = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var searchResults = document.querySelector(".search-results");
var listEl = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

citySearch.addEventListener("submit", function (event) {
  event.preventDefault();
  var cityName = searchInput.value.trim();
  getLocation(cityName);
});

function searchLocation(location) {
  console.log(location);
  var placesAPI = `https://places.ls.hereapi.com/places/v1/discover/here?apiKey=${mapsApi}&at=${location.lat},${location.lon};r=2000&pretty`;
  var browseAPI = `https://places.ls.hereapi.com/places/v1/browse?at=${location.lat},${location.lon}&cat=zoo&apiKey=${mapsApi}`;
  fetch(browseAPI)
    .then(function (response) {
      console.log("response: ");
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      addSearchResults(data.results);
    });
  console.log(placesAPI);
  console.log("I am here...");
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

function addSearchResults(results) {
  console.log(results.items[0].title);
  for (var i = 0; i < results.items.length; i += 1) {
    //searchResults.textContent = results.items[i].title;
    let li = document.createElement("li");
    let br = document.createElement("br");
    searchResults.append(
      results.items[i].title,
      br,
      results.items[i].vicinity.replaceAll("<br/>", ", "),
      li
    );
  }
}
