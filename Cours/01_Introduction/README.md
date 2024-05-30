# cour 01 : **Introduction**

## 1. **Introduction à React JS:**

- **Description:**

  > React JS est une bibliothèque JavaScript open-source développée par Facebook pour construire des interfaces utilisateur (UI) interactives et dynamiques. Lancée en 2013, elle permet de créer des applications web rapides, modulaires et maintenables. React se distingue par son approche basée sur les composants, où chaque partie de l'interface est encapsulée dans un composant réutilisable et indépendant. Cette approche permet de simplifier le développement, la maintenance et l'évolutivité des applications.

## 2. **les différences entre React JS et JavaScript Vanilla:**

> Ce tableau met en évidence les principaux avantages de React JS par rapport à JavaScript Vanilla en termes de gestion du DOM, réutilisabilité, gestion de l'état, performance, modularité, mises à jour de l'interface, et optimisation des rendus.

| Aspect                          | JavaScript Vanilla                                                    | React JS                                                                 |
| ------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Gestion du DOM**              | Manipulation directe, souvent complexe et inefficace                  | Utilisation du Virtual DOM pour des mises à jour optimisées              |
| **Réutilisabilité**             | Difficile sans structure standard pour les composants                 | Encouragée par la création de composants réutilisables et modulaires     |
| **Gestion de l'état**           | État global manuel, souvent dispersé et sujet à des bugs              | État local et global géré de manière cohérente et prédictible            |
| **Performance**                 | Manipulations DOM fréquentes peuvent entraîner des problèmes          | Virtual DOM réduit les opérations DOM coûteuses, optimisations possibles |
| **Modularité**                  | Code souvent difficile à maintenir à mesure que l'application grandit | Composants indépendants facilitent la maintenance et l'évolution         |
| **Mises à jour de l'interface** | Synchronisation manuelle entre état et interface                      | Composants réagissent automatiquement aux changements d'état             |
| **Optimisation des rendus**     | Nécessite une gestion manuelle des mises à jour du DOM                | Méthodes comme `shouldComponentUpdate` pour un contrôle fin des rendus   |

## 3. **Création d'un projet React avec `Vite`:**

### 3.1 .**Introduction à `Vite`:**

> Vite est un outil de construction rapide et léger pour les applications web modernes. Il a été créé par Evan You, le développeur de Vue.js, pour améliorer l'expérience de développement. Vite est conçu pour être plus rapide que les outils traditionnels comme Webpack en utilisant des fonctionnalités modernes du navigateur et une architecture de développement optimisée.

### 3.2 .**Commandes pour lancer un projet React avec Vite:**

- **Installer Vite**

  - Assurez-vous d'avoir Node.js et npm (ou yarn) installés sur votre machine.

- **Créer un nouveau projet Vite avec React**

  - Ouvrez un terminal et exécutez la commande suivante :

  ```sh
  npm create vite@latest
  ```

  - Vous serez invité à entrer le nom de votre projet. Par exemple : `my-react-app`.
  - Ensuite, choisissez `react` comme framework et `react-ts` si vous voulez utiliser TypeScript.

- **Accéder au répertoire du projet**

  - Déplacez-vous dans le répertoire de votre nouveau projet :

  ```sh
  cd my-react-app
  ```

- **Installer les dépendances**

  - Exécutez la commande suivante pour installer les dépendances du projet :

  ```sh
  npm install
  ```

- **Lancer le serveur de développement**

  - Démarrez le serveur de développement en utilisant la commande suivante :

  ```sh
  npm run dev
  ```

  - Vous devriez voir une sortie indiquant que le serveur de développement est en cours d'exécution, généralement sur `http://localhost:5173`.

- **Exemple de commandes complètes:**

  Voici un résumé des commandes à exécuter :

  ```sh
  npm create vite@latest
  # Suivez les instructions pour nommer votre projet et choisir React
  cd my-react-app
  npm install
  npm run dev
  ```

  Après avoir exécuté ces commandes, vous pouvez ouvrir votre navigateur et accéder à l'URL indiquée (par défaut, `http://localhost:5173`) pour voir votre nouvelle application React en cours d'exécution.

## 4. **créer une application React avec l'outil `create-react-app`:**

Pour créer une nouvelle application React avec l'outil `create-react-app`, vous pouvez suivre ces étapes :

1. **Installer Node.js et npm :**
   Assurez-vous que Node.js et npm (Node Package Manager) sont installés sur votre machine. Vous pouvez vérifier cela en ouvrant un terminal et en exécutant les commandes suivantes :

   ```bash
   node -v
   npm -v
   ```

   Si vous n'avez pas Node.js et npm installés, vous pouvez les télécharger et les installer depuis [le site officiel de Node.js](https://nodejs.org/).

2. **Installer create-react-app globalement :**
   Installez `create-react-app` en utilisant npm. Ouvrez un terminal et exécutez la commande suivante :

   ```bash
   npm install -g create-react-app
   ```

3. **Créer une nouvelle application React :**
   Une fois que `create-react-app` est installé, vous pouvez créer une nouvelle application en exécutant la commande suivante dans le terminal :

   ```bash
   npx create-react-app nom-de-votre-application
   ```

   Remplacez `nom-de-votre-application` par le nom que vous souhaitez donner à votre projet.

4. **Naviguer dans le répertoire de votre application :**
   Après la création de l'application, allez dans le répertoire de votre nouvelle application :

   ```bash
   cd nom-de-votre-application
   ```

5. **Lancer l'application :**
   Vous pouvez maintenant lancer votre application en utilisant npm. Exécutez la commande suivante :

   ```bash
   npm start
   ```

   Cette commande démarre le serveur de développement et ouvre automatiquement votre nouvelle application dans votre navigateur par défaut à l'adresse [http://localhost:3000](http://localhost:3000).

### RQ :

> Voici un résumé des commandes à exécuter :

```bash
# Installer create-react-app globalement
npm install -g create-react-app

# Créer une nouvelle application React
npx create-react-app nom-de-votre-application

# Aller dans le répertoire de l'application
cd nom-de-votre-application

# Lancer l'application
npm start
```

## 5. **La structure d'un projet `React`:**

La structure d'un projet React peut varier en fonction des besoins du projet et des préférences du développeur. Cependant, une structure de base couramment utilisée, particulièrement lorsque l'on utilise `create-react-app`, pourrait ressembler à ceci :

```
my-react-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   ├── components/
│   │   ├── App.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   └── ...
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── index.css
│   │   └── ...
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock / package-lock.json
```

### Description des dossiers et fichiers

1. **node_modules/** :

   - Contient toutes les dépendances du projet installées via npm ou yarn.

2. **public/** :

   - Contient des fichiers statiques accessibles directement dans le navigateur.
   - `index.html` : Le fichier HTML principal.
   - `favicon.ico`, `logo192.png`, `logo512.png` : Fichiers d'icônes et de logo.

3. **src/** :

   - Contient le code source de l'application.
   - **assets/** : Dossier pour les ressources statiques comme les images, les polices, etc.
   - **components/** : Contient les composants React réutilisables.
   - **pages/** : Contient les composants de pages, souvent utilisés avec des routeurs pour des applications multi-pages.
   - **services/** : Contient les services d'accès aux données, comme les appels API.
   - **styles/** : Contient les fichiers CSS et autres fichiers de styles.
   - **utils/** : Contient les utilitaires et les fonctions d'aide.
   - `App.js` : Composant principal de l'application.
   - `App.test.js` : Fichier de test pour le composant App.
   - `index.js` : Point d'entrée principal de l'application.
   - `reportWebVitals.js` : Utilisé pour mesurer les performances de l'application.
   - `setupTests.js` : Configuration pour les tests avec Jest.

4. **.gitignore** :

   - Spécifie les fichiers et dossiers que Git doit ignorer.

5. **package.json** :

   - Contient les métadonnées du projet et les dépendances.

6. **README.md** :

   - Contient la documentation du projet.

7. **yarn.lock / package-lock.json** :
   - Fichier de verrouillage des dépendances, assure que les mêmes versions de dépendances sont installées sur chaque machine.
