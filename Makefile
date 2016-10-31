# Makefile for www.koodaustunti.fi

.PHONY: serve build update default

serve:
	bundle exec jekyll serve

build:
	bundle exec jekyll build

update:
	git push

default: serve
