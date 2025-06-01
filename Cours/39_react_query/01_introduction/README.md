# Cour 01 : **Introduction:**

## 1. **Qu’est-ce que React Query ?**

> **React Query** est une bibliothèque pour React qui permet de **gérer efficacement les requêtes serveur**, comme les appels à une API REST ou GraphQL. Elle automatise la **gestion de l’état côté client lié aux données distantes** (fetching, caching, synchronisation), tout en améliorant les performances et l’expérience utilisateur.

-   **À quoi ça sert ?:**

    -   Gérer les **requêtes HTTP** et les réponses (données, erreurs, loading).
    -   Éviter le **code répétitif** avec `useEffect` et `useState` pour chaque appel API.
    -   **Synchroniser** l’état client avec les données serveur de manière fluide.

-   **Quand l’utiliser ?:**

    -   Quand ton application interagit fréquemment avec un serveur (API REST/GraphQL).
    -   Lorsque tu veux un **cache client** efficace pour éviter de recharger les mêmes données.
    -   Pour **rafraîchir automatiquement** des données après certaines actions (mutation, navigation...).
    -   Dans les apps où la **performance et l’expérience utilisateur** sont prioritaires (chargement rapide, offline, etc.).

-   **Quand est-ce overkill ?:**

    -   Pour une **petite application** avec peu ou pas d’appel API (ex: un formulaire simple).
    -   Si tu fais **une seule requête ponctuelle**, sans logique de cache, de re-fetching ou d’invalidation.
    -   Si tu utilises déjà un **state manager global** (comme Redux Toolkit Query ou Apollo) qui couvre ces besoins.

## 2. **Avantages clés de React Query**

-   **Caching automatique**
    Stocke les résultats des requêtes pour éviter de refaire les appels inutiles — améliore la rapidité et réduit les charges réseau.

-   **Pre-fetching**
    Permet de charger à l’avance les données dont on aura bientôt besoin (ex: données d’une page avant navigation).

-   **Re-fetching automatique**
    Peut recharger automatiquement les données après une mutation ou à intervalles réguliers, pour garder les données à jour.

-   **Mutations faciles**
    Gère les actions POST/PUT/DELETE avec des callbacks (`onSuccess`, `onError`, etc.) pour actualiser ou invalider le cache automatiquement.

-   **Support offline et synchronisation**
    Fonctionne même en mode hors-ligne, et peut synchroniser les données dès que l’utilisateur revient en ligne.

Voici une **suite logique** à ton introduction, avec un focus sur l’installation et la mise en place de base de React Query, incluant les DevTools :

## 3. **Installation de React Query & DevTools**

> Tu peux installer React Query (officiellement appelé `@tanstack/react-query`) avec npm ou yarn :

```bash
npm install @tanstack/react-query
```

> Pour ajouter les **React Query Devtools** (interface de debug très pratique) :

```bash
npm install @tanstack/react-query-devtools
```

-   **Setup de React Query**

    -   **Créer un client React Query**

        Avant d’utiliser React Query, tu dois **initialiser un QueryClient** avec des options par défaut (facultatif) :

        ```tsx
        // src/queryClient.ts
        import { QueryClient } from "@tanstack/react-query";

        const queryClient = new QueryClient({
        	defaultOptions: {
        		queries: {
        			staleTime: 5 * 60 * 1000, // 5 minutes
        			retry: 2,
        			refetchOnWindowFocus: false,
        		},
        	},
        });

        export default queryClient;
        ```

    -   **Fournir le client dans ton app**

        Tu dois utiliser le `QueryClientProvider` pour injecter le client dans ton application :

        ```tsx
        // src/main.tsx ou src/index.tsx
        import React from "react";
        import ReactDOM from "react-dom/client";
        import { QueryClientProvider } from "@tanstack/react-query";
        import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
        import App from "./App";
        import queryClient from "./queryClient";

        ReactDOM.createRoot(document.getElementById("root")!).render(
        	<React.StrictMode>
        		<QueryClientProvider client={queryClient}>
        			<App />
        			<ReactQueryDevtools initialIsOpen={false} />
        		</QueryClientProvider>
        	</React.StrictMode>
        );
        ```
