# Documentation Technique Ascenseurs

Application React de documentation technique pour les ascenseurs (Schindler, Otis, Autinor, ThyssenKrupp/TKE, Kone, MEA, et autres marques).

## Fonctionnalités

- **Codes défauts** : 800+ codes d'erreur structurés par marque et catégorie
- **Recherche** globale et par marque
- **Thèmes** : sombre, clair, minuit, contraste élevé
- **Personnalisation** : couleur d'accent, taille de texte, effets visuels
- **Gestion du contenu** : réorganiser, renommer, déplacer documents et catégories
- **Import PDF** : extraction automatique de codes défauts via IA
- **Documents legacy** : compatibilité avec les anciens HTML/PDF

## Démarrage

```bash
cd app
npm install
npm run dev
```

L'application sera accessible sur `http://localhost:3000`.

## Structure

```
doc-ascenseurs/
├── app/                  # Application React (Vite + TailwindCSS)
│   ├── src/
│   │   ├── pages/        # Pages (Home, BrandPage, DocPage, Settings, etc.)
│   │   ├── components/   # Composants réutilisables
│   │   ├── data/         # Données : brands.js, docs.js
│   │   └── contexts/     # ThemeContext (thème + overrides)
│   └── public/logos/     # Logos SVG des marques
├── schindler/, otis/...  # Documents HTML legacy
└── *.pdf, *.html         # Anciens documents
```

## Build

```bash
cd app
npm run build
```

## Stack

- React 18 + Vite 5
- React Router v6
- TailwindCSS
- Lucide Icons
