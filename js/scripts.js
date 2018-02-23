// scripts.js

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#content');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var data = `
			<div class="row">
				<div id="title">${item.name}</div>
				<div class="col s4 left-align">
			 		<ul id="descriptions">
						<li>Region</li>
						<li>Alt spelling</li>
						<li>Capital</li>
						<li>Land area</li>
						<li>Population</li>
						<li>Language(s)</li>
						<li>Currency</li>
					</ul>
				</div>
				<div class="col s4 left-align">
					<ul id="countries">
						<li>${item.region}</li>
						<li>${item.altSpellings[1]}</li>
						<li>${item.capital}</li>
						<li>${item.area}</li>
						<li>${item.population}</li>
						<li>${item.languages[0].name}</li>
						<li>${item.currencies[0].name}</li>
					</ul>
				</div>
				<div class="col s4 left-align">
					<div id="flag"><img src="${item.flag}" class="flag-img"></div>
				</div>
				<div class="clearfix horizontal"></div>
			</div>
    	`
		$(data).appendTo(countriesList);
	});
}