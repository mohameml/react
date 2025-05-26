### 🔁 Qu’est-ce qu’un **middleware** en Redux ?

Un **middleware Redux** est une **fonction intermédiaire** qui s’exécute **entre le moment où une action est dispatchée** (`dispatch(action)`) et le moment où elle **atteint les reducers**.

Il permet :

-   de **filtrer, modifier, retarder ou logger** des actions,
-   d’effectuer des **effets secondaires** (side effects) comme les appels API,
-   ou de **déclencher plusieurs actions** en chaîne.

---

### 📌 Illustration simple

Sans middleware :

```
dispatch(action) → reducer → store (new state)
```

Avec middleware(s) :

```
dispatch(action)
   ↓
[ middleware 1 ]
   ↓
[ middleware 2 ]
   ↓
reducer → store
```

---

### 🧠 À quoi sert un middleware ?

| Cas d’usage      | Exemple                                                        |
| ---------------- | -------------------------------------------------------------- |
| Logging          | Afficher les actions dans la console (`redux-logger`)          |
| Asynchrone       | Effectuer des appels API (`redux-thunk`, `redux-saga`)         |
| Analytics        | Envoyer des données de tracking à chaque action                |
| Sécurité         | Bloquer certaines actions selon l'état utilisateur             |
| Retry / debounce | Gérer des délais, des répétitions ou annuler certaines actions |

---

### 🧱 Syntaxe d’un middleware Redux

Un middleware Redux est une **fonction curryfiée en 3 niveaux** :

```js
const monMiddleware = (store) => (next) => (action) => {
	console.log("Action interceptée :", action);

	// On peut modifier, stopper ou passer l'action
	return next(action); // Passe l'action au prochain middleware ou au reducer
};
```

-   `store` : contient `dispatch` et `getState`
-   `next` : fonction pour transmettre l’action au prochain middleware ou au reducer
-   `action` : l’action dispatchée

---

### 🛠 Exemple d’un middleware custom

```js
const loggerMiddleware = (store) => (next) => (action) => {
	console.log("Avant :", store.getState());
	console.log("Action :", action);

	const result = next(action); // On laisse passer l'action

	console.log("Après :", store.getState());
	return result;
};
```

### ➕ Intégration dans le store

```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
```

---

### 🧠 Résumé

| Terme               | Définition                                                               |
| ------------------- | ------------------------------------------------------------------------ |
| **Middleware**      | Fonction qui intercepte les actions dans Redux                           |
| **Utilité**         | Gérer des effets secondaires, logger, bloquer ou transformer des actions |
| **Exemples connus** | `redux-thunk`, `redux-saga`, `redux-logger`                              |

---

Souhaites-tu que je t’explique comment **plusieurs middleware** sont chaînés ensemble ou comment **écrire ton propre middleware complexe** ?

---

Excellente question ! Voici **comment utiliser un middleware en Redux**, étape par étape, avec un **exemple clair**.

---

## ✅ Étapes pour utiliser un middleware Redux

### 1. 📦 Crée ou installe un middleware

#### Exemple 1 : middleware custom (logger)

```js
const loggerMiddleware = (store) => (next) => (action) => {
	console.log("Action :", action);
	return next(action); // passe l'action au middleware suivant ou au reducer
};
```

#### Exemple 2 : middleware existant (redux-thunk)

```bash
npm install redux-thunk
```

---

### 2. 🧠 Intègre le middleware dans le `store`

Avec `applyMiddleware` de Redux :

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import loggerMiddleware from "./middlewares/logger";

const store = createStore(
	rootReducer,
	applyMiddleware(thunk, loggerMiddleware) // tu peux en mettre plusieurs
);
```

---

### 3. 🚀 Utilise Redux normalement

Une fois branché, le middleware **s’exécutera automatiquement** à chaque fois qu’une action est `dispatch()`.

---

## 🎯 Exemple complet avec middleware custom

### Fichier : `middlewares/logger.js`

```js
const loggerMiddleware = (store) => (next) => (action) => {
	console.log("Dispatching:", action);
	let result = next(action);
	console.log("Next state:", store.getState());
	return result;
};

export default loggerMiddleware;
```

### Fichier : `store.js`

```js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from "./middlewares/logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
```

### Fichier : `actions.js`

```js
export const increment = () => {
	return { type: "INCREMENT" };
};
```

### Fichier : `reducer.js`

```js
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		default:
			return state;
	}
};

export default counterReducer;
```

---

### 🔁 Quand tu fais :

```js
store.dispatch(increment());
```

Tu verras dans la console :

```
Dispatching: { type: 'INCREMENT' }
Next state: 1
```

---

## 🧠 Résumé

| Étape                                           | Description                                        |
| ----------------------------------------------- | -------------------------------------------------- |
| 1. Créer ou importer un middleware              | fonction curryfiée `(store) => (next) => (action)` |
| 2. L’ajouter au `store` via `applyMiddleware()` | Redux l’insère dans le pipeline                    |
| 3. Utiliser Redux normalement                   | `dispatch()` déclenchera les middleware            |

---

Souhaites-tu que je t’aide à écrire un **middleware personnalisé** (ex: bloquer des actions, journaliser seulement certaines, ajouter un `timestamp`, etc.) ?
