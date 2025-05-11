# Cour : **Abort Signal**

## 1. **Introduction**

-   Quand on utilise `fetch` pour faire des appels réseau en JavaScript, on obtient une **Promise**. Par défaut, cette Promise ne peut **pas** être annulée : si le réseau est lent ou si on change de page, l’appel continue jusqu’au bout.

-   Pour résoudre ça, l’API **AbortController** a été introduite : elle permet **d’annuler proprement** un appel `fetch` en cours.

-   **AbortController : Qu’est-ce que c’est ?**

    > C’est une API qui crée un **signal** (objet `AbortSignal`) qu’on peut passer à `fetch`. Si on déclenche l’abort, le signal avertit `fetch` d’arrêter.

-   **Schéma :**

    → `AbortController` = chef d’orchestre
    → `AbortSignal` = message qu’il envoie
    → `fetch` = exécutant qui écoute ce message

-   **Structure du code**

    Voici le schéma général :

    ```js
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
    	.then((response) => response.json())
    	.then((data) => console.log(data))
    	.catch((err) => {
    		if (err.name === "AbortError") {
    			console.log("Fetch aborted!");
    		} else {
    			console.error("Fetch error:", err);
    		}
    	});

    // Pour annuler l’appel :
    controller.abort();
    ```

-   **Comment ça fonctionne ?**

    1️⃣ On crée un `AbortController`.
    2️⃣ On extrait son `.signal`.
    3️⃣ On passe ce signal dans les options `{ signal }` du `fetch`.
    4️⃣ Si à un moment on fait `controller.abort()`, le fetch s’interrompt.
    5️⃣ Dans le `.catch`, on peut vérifier si l’erreur est de type `'AbortError'` pour savoir si l’annulation vient de nous.

## 2. **Utilisation avec `useEffect`:**

-   **Définition :**

    > Quand on utilise `fetch` dans un composant React (souvent à l’intérieur d’un `useEffect`), il faut **nettoyer** l’appel réseau si le composant est démonté avant la fin du fetch.

    -   Pour éviter ça, on utilise **AbortController** pour annuler le fetch quand l’effet se nettoie (`cleanup`).

-   **Syntaxe générale**

    Dans `useEffect`, tu écris :

    ```js
    useEffect(() => {
    	const controller = new AbortController();
    	const signal = controller.signal;

    	fetch(url, { signal })
    		.then((response) => response.json())
    		.then((data) => {
    			/* mettre à jour l’état */
    		})
    		.catch((err) => {
    			if (err.name === "AbortError") {
    				console.log("Fetch annulé");
    			} else {
    				console.error(err);
    			}
    		});

    	// Fonction de nettoyage appelée à la fin ou au démontage
    	return () => {
    		controller.abort();
    	};
    }, [dépendances]);
    ```

### **RQ** : ⚠ **À bien retenir**

-   **Toujours utiliser cleanup dans `useEffect`** pour éviter des fuites mémoire.
-   **Vérifier le type d’erreur** (`AbortError`) pour ne pas confondre avec une vraie erreur réseau.
-   **Ne jamais essayer de faire `setState` après un abort**, sinon React protestera (car le composant est démonté).
