---
title: Ma première présentation
subtitle: coucou
theme: sky
initialization:
  slideNumber: c/t
  transition: concave
---

§id:monintro§;

## Intro
On utilise le markdown pour la mise en forme.
On débute une nouvelle diapositive avec le mot clé "§ new"

§new

## Faire des notes
Pour faire des notes, c'est "§ notes"

S pour voir les notes

§notes
Ceci est une note

§new

## Diapo verticales
Il suffit de remplacer le "§ new" par "§ break"

§break

## Slide 3.1

§break

## Slide 3.2

§new

## Fragment

Le mot clé "§ fragment" ou "§ fragment:N§;" (N : l'ordre).

- element 2 §fragment:2§;
- element 1 §fragment:1§;
- element 3 §fragment:3§;

§new

## Configuration

Tous les paramètres de configuration présentés dans le [README de reveal.js](https://github.com/hakimel/reveal.js#configuration) peuvent être spécifier dans l'en-tête YAML, attribut *initialization*

§break

## Configuration par Diapo

§slide: data-background=#ff0000 §;

Toutes les configuration utilisant des attributs data-* dans les balises *<section>* sont compatibles.

Transitions, background...

Il suffit d'ajouter la commande "§ slide:data-ATTR1=VAL1§ data-ATTR2=VAL2§;"

