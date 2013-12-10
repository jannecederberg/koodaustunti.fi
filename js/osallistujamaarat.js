---
# Tyhjä YAML front-matter, jotta tavoitemuuttuja saadaan parsittua mukaan.
# Ilman tätä YAML:ia ei parsita.
---

/**
 * Osallistujatiedot Google Drivessa olevasta taulukosta sivulle
 * 
 * @author Janne Cederberg
 * @date 22.11.2013
 */

var tavoite = {{ site.osallistujatavoite }};

var gsheet = gsheet || {};

gsheet.parse_value = function(str) {
	return str.substring(str.indexOf(':')+2);
};

gsheet.show_enrollments = function(json) {
	var opettajia = gsheet.parse_value(json.feed.entry[0].content.$t);
	var opiskelijoita = parseInt(gsheet.parse_value(json.feed.entry[1].content.$t));
	$('#opettajia').text(opettajia);
	$('#opiskelijoita').text(opiskelijoita);
	var puuttuu = tavoite-opiskelijoita;
    if ( puuttuu > 0 ) {
        $('#osallistuja-status').html('Tavoitteesta puuttuu vielä <span id="opiskelijoita-puuttuu">' +puuttuu+ '</span> opiskelijaa!');
    } else {
        $('#osallistuja-status').html('Tavoite ylitetty <span id="opiskelijoita-puuttuu">' +Math.round((opiskelijoita/tavoite-1)*100)+ '%</span>:lla!');
    }
};