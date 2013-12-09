# Koodaustunti.fi

Koodaustunti on yhden tunnin johdatus tietojenkäsittelytieteeseen, joka toteutetaan 9.-15.12.2013 haluamanasi ajankohtana. Koodaustunnin tarkoituksena on tutustuttaa "koodaamiseen" ja tehdä sitä arkipäiväiseksi.

## Kuinka voin auttaa sivuston kehittämisessä?

Voidaksesi täysipainoisesti hyödyntää tässä Git-repositoryssä olevaa sisältöä, on sinulla oltava Linux- tai OSX-käyttöjärjestelmä. Tämän jälkeen on asennettava lisäksi [Ruby](http://www.ruby-lang.org)-ohjelmointikielen tulkki ja [Jekyll](http://jekyllrb.com)-sivugeneraattori.

## Tarvittavien työkalujen asennus

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

Voit yrittää, mutta tod.näk. kyseessä ei oikeen ole miellyttävä kokemus välttämättä, valitettavasti :) Mutta ideana: selvitä miten saat Ruby-tulkin ja Jekyll:n asennettua ja käyttöön Windows-koneella.

## Mitäs sitten kun asennus on tehty?

Käyttämällä HTML, CSS ja Javascript sekä tarpeen mukaan vähän Jekylliä sekä Liquid-template-kieltä pääset muokkaamaan sivua. Kun olet tehnyt muokkauksia/parannuksia, voit ehdottaa niitä _pull request_ -toiminnon kautta tähän pääversioon.