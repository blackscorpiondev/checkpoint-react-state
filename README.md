# Checkpoint React State

Une application React démontrant l'utilisation des états (state) et des cycles de vie des composants.

## Description

Cette application est un profil utilisateur interactif qui illustre les concepts fondamentaux de React, notamment :

- Gestion de l'état local avec `this.state`
- Manipulation du state avec `this.setState`
- Utilisation des méthodes de cycle de vie : `componentDidMount` et `componentWillUnmount`
- Affichage conditionnel basé sur l'état
- Timer qui compte le temps écoulé depuis le montage du composant

## Fonctionnalités

- **Affichage/Masquage du profil** : Un bouton permet de basculer l'affichage des informations du profil
- **Timer intégré** : Compte le nombre de secondes écoulées depuis le chargement de l'application
- **Design moderne** : Interface utilisateur élégante avec animations et transitions fluides
- **Profil personnalisé** : Affiche les informations d'une personne (nom, profession, bio et image)

## Structure du Projet

```
checkpoint-react-state/
├── public/                 # Fichiers statiques
├── src/
│   ├── App.js             # Composant principal de l'application
│   ├── App.css            # Styles pour le composant App
│   ├── index.js           # Point d'entrée de l'application
│   └── index.css          # Styles globaux
└── package.json           # Dépendances et scripts du projet
```

## Technologies Utilisées

- React 19.2.3
- React DOM 19.2.3
- Create React App (configuration)
- CSS3 (animations et transitions)

## Démarrage Rapide

### Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure)

### Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/votre-username/checkpoint-react-state.git
```

2. Accédez au répertoire du projet :
```bash
cd checkpoint-react-state
```

3. Installez les dépendances :
```bash
npm install
```

### Lancement de l'application

Démarrez l'application en mode développement avec la commande :

```bash
npm start
```

L'application s'ouvrira automatiquement dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Scripts Disponibles

- `npm start` : Lance l'application en mode développement
- `npm test` : Lance les tests en mode watch
- `npm run build` : Crée une version optimisée pour la production
- `npm run eject` : Expose la configuration sous-jacente (opération irréversible)

## Concepts React Démontrés

1. **State (état local)** : Utilisation de `this.state` pour stocker les données du composant
2. **setState** : Modification de l'état avec `this.setState` pour déclencher un nouveau rendu
3. **Méthodes de cycle de vie** :
   - `componentDidMount` : Démarrage du timer après le montage du composant
   - `componentWillUnmount` : Nettoyage du timer avant le démontage
4. **Rendu conditionnel** : Affichage du profil uniquement si `montre` est `true`
5. **Gestion des événements** : Utilisation de `onClick` pour basculer l'affichage du profil

## Auteur

Développé dans le cadre d'un exercice sur la gestion d'état dans React.


