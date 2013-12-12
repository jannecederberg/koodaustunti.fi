---
layout: kaksi-palstaa
title: Kumppanit
permalink: /kumppanit/
tilastot: true
---

## Yritys tai yhteisö, tule kumppaniksi

Tule kumppaniksi tukemaan digitaitojen tuomista jokaiselle koululaiselle tunnin mittaisen intron muodossa. Olemme avoimia ideoille erilaisille yhteystyön muodoille; oleellista on lasten ja nuorten, mutta myös opettajien innostaminen kokeilemaan koodaamista!

## Ota yhteyttä

mikko.jordman()gmail.com

## Koodaustunnin kumppanit

<ul class="kumppanit clearfix">
    {% for k in site.data.kumppanit %}
        {% if k.logo %}<li><a href="{{ k.url }}"><img src="/kuvat/kumppanit/{{ k.logo }}" alt="{{ k.nimi }}"></a></li>{% endif %}
    {% endfor %}
</ul>
