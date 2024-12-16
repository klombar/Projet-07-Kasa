# Kasa - Refonte du site de location d’appartements entre particuliers

![Kasa](https://github.com/user-attachments/assets/54cf7695-9717-43c6-bb4a-ce5c32efe632)

## Contexte

Kasa est une entreprise leader dans la location d’appartements entre particuliers en France, avec plus de 500 annonces publiées chaque jour. Après plus de 10 ans d'existence, le site a été développé en ASP.NET avec un code legacy important. Afin de moderniser la plateforme et améliorer les performances, une refonte complète est lancée avec une nouvelle stack en JavaScript : **Node.js** pour le back-end et **React** pour le front-end.

Le but du projet est de développer un site dynamique et responsive en suivant les nouvelles maquettes Figma et les spécifications fonctionnelles données par l’équipe.

## Mission

En tant que développeur front-end freelance, vous êtes chargé de démarrer le projet React, de développer l’ensemble de l’application et de créer les composants React nécessaires. Vous devez également mettre en place React Router pour gérer les routes du site tout en suivant les maquettes Figma responsives.

Vous serez responsable de :
- La création de l’ensemble des pages de l’application.
- Le développement de composants React pour afficher les logements et autres éléments dynamiques.
- L’intégration des maquettes Figma pour garantir une expérience utilisateur conforme aux attentes.
- L’implémentation des fonctionnalités spécifiques (ex. : galerie d’images avec navigation circulaire, collapse pour afficher les informations détaillées).

## Objectifs

- **Créer le front-end avec React**, en suivant les maquettes Figma.
- **Gérer les routes avec React Router** pour un site à page unique.
- **Intégrer les maquettes responsives** et les rendre dynamiques.
- **Développer des composants réutilisables** tels que la galerie d’images et les collapses.
- **Assurer un code propre, maintenable et de qualité**, en suivant les bonnes pratiques de développement.

## Fonctionnalités principales

- **Galerie d'images dynamique** :
    - Le défilement des images se fait en boucle (lorsque l’on atteint la première ou la dernière image).
    - Si une seule image est présente, les boutons de navigation et la numérotation sont invisibles.
    - Les images sont coupées et centrées pour rester uniformes en taille.

- **Collapse** : 
    - Par défaut, tous les collapses sont fermés à l’initialisation.
    - Le clic sur un collapse l’ouvre ou le ferme.
  
## Technologies

- **React** : Pour la construction de l'interface utilisateur.
- **Node.js** : Back-end pour gérer l’ensemble des données (bien que temporairement non disponible, le développement front-end se fait avec un fichier JSON simulant les données).
- **React Router** : Pour gérer la navigation entre les différentes pages.
- **Sass** : Pour la gestion modulaire du style CSS.
- **Figma** : Pour les maquettes et prototypes de design.
- **CSS Animations** : Pour animer les menus déroulants et autres éléments interactifs du site.

## Contraintes

- Le back-end n'est pas encore opérationnel, vous devez donc travailler avec un fichier JSON contenant les 20 dernières annonces de logements pour simuler les données.
- **Responsive Design** : Le site doit être responsive et fonctionner sur mobile, tablette et desktop.
- Utilisation de **Sass** pour le style CSS.
- Implémentation des **animations CSS** pour les menus déroulants (collapse).

## Maquettes et prototypes

Les maquettes Figma du site (mobile et desktop) ainsi que les prototypes d’animation sont fournis. Vous pouvez les consulter pour obtenir les ressources visuelles et les comportements attendus de l’application.

**Pièce jointe :** Maquettes Figma, code front-end et back-end (sous forme de fichier JSON).
