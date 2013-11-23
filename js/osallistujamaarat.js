/**
 * Osallistujatiedot Google Drivessa olevasta taulukosta sivulle
 * 
 * @author Janne Cederberg
 * @date 22.11.2013
 */

var tavoite = 10000;

var gsheet = gsheet || {};

gsheet.parse_value = function(str) {
	return str.substring(str.indexOf(':')+2);
};

gsheet.show_enrollments = function(json) {
	var opettajia = gsheet.parse_value(json.feed.entry[0].content.$t);
	var opiskelijoita = gsheet.parse_value(json.feed.entry[1].content.$t);
	$('#opettajia').text(opettajia);
	$('#opiskelijoita').text(opiskelijoita);
	var puuttuu = tavoite-parseInt(opiskelijoita);
	$('#opiskelijoita-puuttuu').text(puuttuu);
};