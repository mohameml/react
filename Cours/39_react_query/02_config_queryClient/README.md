# Cour 02 : **Config QuryClient:**

## 1. **Définition de `QueryClient`**

-   Le `QueryClient` est **le cœur de React Query**. C’est l’objet qui :

    -   Gère le **cache**,
    -   Contrôle les comportements de **fetching, re-fetching**, etc.,
    -   Définit les **options par défaut** de toutes les requêtes et mutations.

    > Il est **créé une seule fois** (souvent dans un fichier comme `queryClient.ts`) et passé à l’application via le `QueryClientProvider`.

-   **Syntaxe de base :**

    ```ts
    import { QueryClient } from "@tanstack/react-query";

    const queryClient = new QueryClient();
    ```

-   **Exemple avec options :**

    ```ts
    const queryClient = new QueryClient({
    	defaultOptions: {
    		queries: {
    			staleTime: 1000 * 60 * 5, // 5 minutes
    			refetchOnWindowFocus: false,
    		},
    		mutations: {
    			retry: 1,
    		},
    	},
    });
    ```

## 2. **`defaultOptions` — Définition & Détail**

> `defaultOptions` permet de **définir des comportements par défaut** pour toutes les requêtes (`queries`) et mutations (`mutations`), sans avoir à les spécifier dans chaque appel à `useQuery` ou `useMutation`.

### a. **`defaultOptions.queries`**

-   Ces options s’appliquent à toutes les `useQuery`.

    | Option                 | Description                                                                                      | Valeur par défaut |
    | ---------------------- | ------------------------------------------------------------------------------------------------ | ----------------- |
    | `staleTime`            | Durée (en ms) pendant laquelle les données sont considérées comme fraîches.                      | `0`               |
    | `cacheTime`            | Temps (en ms) pendant lequel les données sont conservées en cache après être devenues inactives. | `5 * 60 * 1000`   |
    | `refetchOnWindowFocus` | Re-fetch quand l’onglet devient actif ?                                                          | `true`            |
    | `refetchOnMount`       | Re-fetch quand le composant est monté ?                                                          | `true`            |
    | `refetchInterval`      | Intervalle pour re-fetch auto (en ms ou `false` pour désactiver).                                | `false`           |
    | `retry`                | Nombre de tentatives de retry en cas d’échec.                                                    | `3`               |
    | `enabled`              | Active ou désactive le fetch (utile pour lazy queries).                                          | `true`            |

-   **Exemple :**

    ```ts
    const queryClient = new QueryClient({
    	defaultOptions: {
    		queries: {
    			staleTime: 300000, // 5 minutes
    			cacheTime: 600000, // 10 minutes
    			refetchOnWindowFocus: false,
    			retry: 2,
    			refetchOnMount: true,
    		},
    	},
    });
    ```

### b. **`defaultOptions.mutations`**

-   Ces options s’appliquent à toutes les `useMutation`:

    | Option      | Description                                                 | Valeur par défaut |
    | ----------- | ----------------------------------------------------------- | ----------------- |
    | `retry`     | Nombre de tentatives de retry en cas d’échec.               | `3`               |
    | `onError`   | Callback déclenché lorsqu’une requête ou mutation échoue.   | `undefined`       |
    | `onSuccess` | Callback déclenché lorsqu’une requête ou mutation réussit.  | `undefined`       |
    | `onSettled` | Callback déclenché **dans tous les cas** (succès ou échec). | `undefined`       |

-   **Exemple complet:**

```ts
// queryClient.ts
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 300000,
			cacheTime: 600000,
			retry: 2,
			refetchOnWindowFocus: false,
			refetchOnMount: true,
		},
		mutations: {
			retry: 1,
			onError: (error) => console.error("Erreur mutation :", error),
		},
	},
});

export default queryClient;
```
