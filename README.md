# Test technique

Ce test a pour objectif d'évaluer les compétences suivantes :

- Git
- HTML
- CSS / SASS
- Intégration responsive
- Soucis du détail
- SEO
- JavaScript / ES6
- Vue.js (optionnel)

## Installation

Ce test est basé sur Vue.js, mais il n'est pas nécessaire de connaître ce framework pour effectuer les exercices

```
yarn install
```

```
yarn serve
```

## Consignes

### Avant de te lancer :

- Aucune durée n'est imposée, prends le temps que tu juges nécessaire
- Si tu n'es pas à l'aise avec Vue.js, tu es libre de ne pas utiliser de composant et de mettre directement ton html et css dans le fichier `src/pages/HomePage.vue`
- Dans un composant Vue.js, tu peux mettre ton JavaScript dans la méthode **mounted** (qui correspond à l'évènement DOMContentLoaded)
- Préférer le JavaScript moderne 
- Pas de jQuery
- Tu peux utiliser autant de librairies que tu le souhaites
- Nous n'attendons pas de PixelPerfect, nous voulons simplement avoir un aperçu de ta logique d'intégration
- Les images nécessaires à l'intégration se trouvent dans le fichier `src/assets/images`
- Les textes sont en 13px avec une épaisseur de 400
- Les titres ont une épaisseur de 700
- Le ratio des images produits est de 125%
- La bannière **Femme** prend 100% de la hauteur de l'écran

### À faire :

1. Créer un répertoire GitHub ou GitLab avec ce test
2. Créer une branche develop où tu commiteras ton travail
3. Importer la typographie **Open Sans**
4. Intégrer la maquette située à la racine du projet `maquette.png`
5. Rendre l'intégration responsive
6. Faire un header sticky
7. Quand le header devient sticky, lui appliquer un fond blanc et mettre son contenu en noir
8. En mobile, transformer la liste des produits en slider
9. Ajouter un effet au hover sur les boutons
10. Afficher la deuxième image du produit au hover 
11. Compléter le fichier `public/index.html` afin d'optimiser le SEO
12. Au clic sur l'icon panier, afficher une popin qui indique que le panier est vide

#### Bonus :

- Créer une page **FAQ** qui reprend le composant **BannerLarge**, mais avec un contenu différent
- Ajouter un lien vers la page **FAQ** dans le header
- Dans la page **FAQ**, afficher 3 questions. Au clic sur la question, la réponse apparaît en dessous avec une transition
- Remplacer les 4 produits statiques par des produits récupérés dynamiquement grâce à cette [API](https://fakestoreapi.com/)
- Stocker ces produits dans un store avec **Vuex**