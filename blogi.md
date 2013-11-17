---
layout: yksi-palsta
title: Blogi
date: 2013-01-01 00:00:00
permalink: /blogi/
jarjestys: 10
ikoni: pencil

---

Koulutukset listattuna, uusin ylimpänä.

<table class="table">
	<tr>
		<th>Päivämäärä</th>
		<th>Aika</th>
		<th>Otsikko</th>
		<th>Koulutuspaikka</th>
		<th>Kouluttaja(t)</th>
	</tr>
	{% for artikkeli in site.posts %}
	<tr>
		<td>{{ artikkeli.date | date:"%d.%m.%Y" }}</td>
		<td>{{ artikkeli.aika }}</td>
    	<td><a href="{{ artikkeli.url }}">{{ artikkeli.title }}</a></td>
    	<td>{{ artikkeli.paikka }}</td>
    	<td>{{ artikkeli.kouluttaja }}</td>
    </tr>
	{% endfor %}
</table>