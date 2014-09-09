# Koodaustunti.fi

Koodaustunti on yhden tunnin johdatus tietojenkäsittelytieteeseen, joka toteutetaan 9.-15.12.2013 haluamanasi ajankohtana. Koodaustunnin tarkoituksena on tutustuttaa "koodaamiseen" ja tehdä sitä arkipäiväiseksi.

## Disclaimer

Sivuston koodipohja ei ole tällä hetkellä kaikista elegantein sikäli, että jonkin verran sisältöä esim. footeriin ja muihin elementteihin liittyen on layout-tiedostoissa.

## Kuinka voin auttaa sivuston kehittämisessä?

Näiden ohjeiden avulla aika helpostikin :)

1. Luo itsellesi tunnus GitHub.com -palveluun
2. Mene osoitteeseen github.com/jannecederberg/koodaustunti.fi (taidat olla jo oikeassa paikassa kun luet kerran tätä :)
3. Klikkaa oikealta ylhäältä "Fork" -nappia
4. Saat oman kopion sivuston tiedostosta
5. Mene github.com/omatunnuksesi/koodaustunti.fi ja valitse _config.yml -tiedosto ja sen jälkeen oikealta suht. ylhäältä kynäkuvake (muokkaus)
6. Muuta rivi "domain: http://koodaustunti.fi" muotoon "domain: http://omatunnuksesi.github.io/koodaustunti.fi" tämän jälkeen kirjoita alareunaan kuvaus muutoksesta (voi jättää tyhjäksi tässä kohtaa) ja paina "Commit changes"
7. Mene osoitteeseen http://omatunnuksesi.github.io/koodaustunti.fi
8. Näet sivustosta oman versiosi, jota pääset nyt muokkaamaan.
9. Kokeile muokata vaikkapa Pajat-sivua niinkuin esim. Jarin tapauksessa voisi olla mielekästä.
10. Kun olet tehnyt haluamasi muutokset, kirjoittanut muutoksen selityksen alareunaan ja painanut "Commit changes" niin:
11. Mene taas (tai virkistä/refresh) osoite http://omatunnuksesi.github.io/koodaustunti.fi
12. Näet nyt (max parin minuutin viiveellä) tekemäsi muutokset omassa kopiossasi koodaustunti.fi-sivustoa
13. Tee tarvittaessa lisää kokeiluja/muutoksia
14. Tee pull request, jolloin koodaustunti.fi:n ylläpitäjät (minä ja ehkä muitakin) saamme ilmoituksen muutosehdotuksesta. Pull requestin teko-ohjeet: https://help.github.com/articles/creating-a-pull-request

Vaiheita on "muutama", mutta kun kokeilet niin huomaat, ettei ole niin vaikeata kuin ensin ehkä tuntuisi :)


## Entä jos en halua muokata tiedostoja selaimessa?

Voidaksesi täysipainoisesti hyödyntää tässä Git-repositoryssä olevaa sisältöä, on sinulla oltava Linux- tai OSX-käyttöjärjestelmä. Tämän jälkeen on asennettava lisäksi [Ruby](http://www.ruby-lang.org)-ohjelmointikielen tulkki ja [Jekyll](http://jekyllrb.com)-sivugeneraattori.

Voit myös tehdä tarvittavat muutokset selaimen kautta, siis GitHubissa, kirjautumalla sisään ja klikkaamalla "edit" halauamasi tiedoston yläreunassa. Selaimenkin kautta voi siis lähettää pull-pyynnön!

### Debian-pohjaiset Linux-koneet

Debian-pohjaisella Linux-koneella pääset liikkeelle antamalla komentorivi-ikkunassa seuraavat komennot:

``` bash
sudo apt-get install ruby1.9.1-dev
sudo gem install jekyll
```

Tämän jälkeen kloonaa tämä Git-repositoryn sisältö omalle koneellesi:

``` bash
git clone https://github.com/jannecederberg/koodaustunti.fi.git
```

Nyt menemällä komentorivi-ikkunassa juuri luomaasi kansioon komennolla `cd koodaustunti.fi`, antamalla komennon `jekyll serve --watch` ja avaamalla Internet-selaimesi osoitteeseen `localhost:4000` näet Koodaustunti-sivuston omalta koneeltasi tarjoiltuna.

### Mites OSX-käyttiksellä (eli Applella)?

Googlaamalla löydät vastaavat ohjeet _Ruby1.9.1-dev_:n ja _Jekyll_:n asentamiseksi. (Apuun tulee esim. `homebrew`-komento.)

### Entä Windowsilla?

Selvitä miten saat Ruby-tulkin ja Jekyll:n asennettua ja käyttöön Windows-koneella. Tämän jälkeen pääset vauhtiin. JOKU HALUKAS VOI TÄYDENTÄÄ NÄITÄ OHJEITA PULL REQUESTIN KAUTTA :)

## Mitäs sitten kun asennus on tehty?

Käyttämällä HTML, CSS ja Javascript sekä tarpeen mukaan vähän Jekylliä sekä Liquid-template-kieltä pääset muokkaamaan sivua. Kun olet tehnyt muokkauksia/parannuksia, voit ehdottaa niitä _pull request_ -toiminnon kautta tähän pääversioon.
