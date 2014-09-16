---
layout: kaksi-palstaa
title: Blogi
permalink: /blogi/
tilastot: true
---

## Blogiartikkelit

<ul>
	{% for artikkeli in site.posts %}
		<li>{{ artikkeli.date | date:"%d.%m.%Y" }}: <a href="{{ site.root_url }}{{ artikkeli.url }}">{{ artikkeli.title }}</a></li>
	{% endfor %}
</ul>
