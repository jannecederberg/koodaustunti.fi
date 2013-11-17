---
layout: yksi-palsta
title: Blogi
date: 2013-01-01 00:00:00
permalink: /blogi/
jarjestys: 10
ikoni: pencil

---

## Blogiartikkelit

<ul>
	{% for artikkeli in site.posts %}
		<li>{{ artikkeli.date | date:"%d.%m.%Y" }}: <a href="{{ artikkeli.url }}">{{ artikkeli.title }}</a></li>
	{% endfor %}
</ul>