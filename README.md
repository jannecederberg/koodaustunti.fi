# Koodaustunti.fi

Koodaustunti on yhden tunnin johdatus tietojenkäsittelytieteeseen, joka toteutetaan 9.-15.12.2013 haluamanasi ajankohtana. Koodaustunnin tarkoituksena on tutustuttaa "koodaamiseen" ja tehdä sitä arkipäiväiseksi.

## Kuinka voin auttaa sivuston kehittämisessä?

Voidaksesi täysipainoisesti hyödyntää tässä Git-repositoryssä olevaa sisältöä, on sinulla oltava Linux- tai OSX-käyttöjärjestelmä. Tämän jälkeen on asennettava lisäksi [Ruby](http://www.ruby-lang.org)-ohjelmointikielen tulkki ja [Jekyll](http://jekyllrb.com)-sivugeneraattori.

## Tarvittavien työkalujen asennus

Debian-pohjaisella Linux-koneella pääset liikkeelle antamalla komentorivi-ikkunassa seuraavat komennot:

{% highlight bash %}
sudo apt-get install ruby1.9.1-dev
sudo gem install jekyll
{% endhighlight %}

Tämän jälkeen kloonaa tämä Git-repositoryn sisältö omalle koneellesi: `git clone https://github.com/jannecederberg/koodaustunti.fi.git`. Nyt menemällä komentorivi-ikkunassa juuri luomaasi kansioon komennolla `cd koodaustunti.fi`, antamalla komennon `jekyll serve --watch` ja avaamalla Internet-selaimesi osoitteeseen `localhost:4000` näet Koodaustunti-sivuston omalta koneeltasi tarjoiltuna.