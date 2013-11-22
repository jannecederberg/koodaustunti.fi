/**
 * Osallistujatiedot Google Drivessa olevasta taulukosta sivulle
 * 
 * @author Janne Cederberg
 * @date 22.11.2013
 */

var tavoite = 10000;

var gsheet = gsheet || {};
gsheet.spreadsheet_url = 'http://spreadsheets.google.com/feeds/list/0Ahxw_PAkk4mkdDNESF9SbU8zZ2lIbWdzUHZwTFJyTWc/2/public/basic?alt=json';

gsheet.parse_value = function(str) {
	return str.substring(str.indexOf(':')+2);
};

//$(document).ready( function() {
  var $xhr = $.ajax(gsheet.spreadsheet_url)
  	.done( function() {
		var json = JSON.parse($xhr.responseText);
		var opettajia = gsheet.parse_value(json.feed.entry[0].content.$t);
		var opiskelijoita = gsheet.parse_value(json.feed.entry[1].content.$t);
		$('#opettajia').text(opettajia);
		$('#opiskelijoita').text(opiskelijoita);
		var puuttuu = tavoite-parseInt(opiskelijoita);
		$('#opiskelijoita-puuttuu').text(puuttuu.toString());
  	});
//});