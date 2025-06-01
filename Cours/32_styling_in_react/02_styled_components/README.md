Voici une **introduction complète à Styled Components** en React, avec définition, base, syntaxe et exemples.

---

### 🌟 Définition

**Styled Components** est une **bibliothèque pour React et React Native** qui permet d’utiliser le **CSS-in-JS**, c’est-à-dire écrire du CSS directement dans vos fichiers JavaScript. Elle repose sur l'idée des composants encapsulés et stylisés, en utilisant les **template literals** (backticks `` ` ``) de JavaScript.

---

### ⚙️ Base / Fonctionnement

-   Elle utilise **ES6 template literals** pour définir les styles.
-   Elle **crée des composants React stylisés**, ce qui garantit **l'encapsulation des styles**.
-   Elle permet aussi de **passer des props** pour modifier dynamiquement le style.
-   Les styles sont **générés automatiquement dans le head** du document HTML.

---

### 🧾 Syntaxe de base

Voici comment créer un composant stylisé :

```jsx
import styled from "styled-components";

// Création d'un bouton stylisé
const Button = styled.button`
	background-color: #007bff;
	color: white;
	padding: 10px 16px;
	border: none;
	border-radius: 4px;
	font-size: 16px;

	&:hover {
		background-color: #0056b3;
	}
`;
```

Et ensuite, vous l’utilisez comme un composant React :

```jsx
function App() {
	return (
		<div>
			<Button>Cliquer ici</Button>
		</div>
	);
}
```

---

### ⚙️ Props dynamiques

Vous pouvez changer les styles selon les props passées :

```jsx
const Button = styled.button`
	background-color: ${(props) => (props.primary ? "#007bff" : "gray")};
	color: white;
	padding: 10px 16px;
	border: none;
	border-radius: 4px;
`;

function App() {
	return (
		<div>
			<Button primary>Primary</Button>
			<Button>Secondaire</Button>
		</div>
	);
}
```

---

### 🧩 Avantages

-   Styles **scopés** automatiquement au composant.
-   Prise en charge du **thème** avec `ThemeProvider`.
-   Syntaxe proche du CSS natif.
-   Meilleure organisation dans les projets à grande échelle.

---

### 🧪 Exemple complet

```jsx
import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 12px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	width: 300px;
`;

const Title = styled.h2`
	font-size: 24px;
	color: #333;
`;

const Description = styled.p`
	color: #666;
`;

function App() {
	return (
		<Card>
			<Title>Bienvenue</Title>
			<Description>
				Voici un composant stylisé avec Styled Components.
			</Description>
		</Card>
	);
}
```

---

Souhaites-tu que je t’explique aussi l'utilisation de `ThemeProvider`, ou l’intégration avec Tailwind/Emotion ?

Parfait ! Entrons maintenant dans deux fonctionnalités importantes de Styled Components : **`createGlobalStyle`** (pour les styles globaux) et la fonction **`css`** (pour les blocs de styles réutilisables).

---

## 🌍 1. `createGlobalStyle` — Définir des styles globaux

### 🧾 Définition

`createGlobalStyle` permet d’injecter des **styles CSS globaux** dans votre application (polices, resets, body, etc.). C’est souvent utilisé pour définir une base cohérente pour tous les composants.

### 🛠️ Exemple de base

```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
    color: #212529;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
```

### 💡 Utilisation

Il faut **inclure le composant `GlobalStyle` une seule fois** dans votre app, souvent dans le composant `App`.

```jsx
import React from "react";
import GlobalStyle from "./GlobalStyle";
import HomePage from "./HomePage";

function App() {
	return (
		<>
			<GlobalStyle />
			<HomePage />
		</>
	);
}
```

---

## 🧩 2. `css` — Créer des blocs de style réutilisables

### 🧾 Définition

La fonction `css` permet de définir un **bloc de styles réutilisable** que vous pouvez **partager entre plusieurs composants**. Très utile pour éviter la duplication.

### 🛠️ Exemple de base

```jsx
import styled, { css } from "styled-components";

const buttonStyles = css`
	padding: 10px 16px;
	font-size: 16px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
`;

// Composants réutilisant le bloc
const PrimaryButton = styled.button`
	${buttonStyles}
	background-color: #007bff;
	color: white;
`;

const SecondaryButton = styled.button`
	${buttonStyles}
	background-color: gray;
	color: white;
`;
```

---

### 🔁 Combinaison avec des conditions

```jsx
const Button = styled.button`
	${buttonStyles}
	background-color: ${(props) => (props.primary ? "#007bff" : "gray")};
	color: white;
`;
```

---

## ✅ Résumé

| Fonction            | Rôle                                              | Quand l'utiliser                        |
| ------------------- | ------------------------------------------------- | --------------------------------------- |
| `createGlobalStyle` | Définir des styles globaux (body, reset, polices) | Une seule fois dans l'app               |
| `css`               | Créer des blocs de styles réutilisables           | Pour factoriser du CSS entre composants |

---

Souhaites-tu un exemple combiné avec `ThemeProvider` ou une structure d’architecture styled-components dans un vrai projet ?
