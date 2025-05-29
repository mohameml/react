# Cour : **`createAsyncThunk` de Redux Toolkit**

## 1. Définition de `createAsyncThunk`

> `createAsyncThunk` est une fonction de Redux Toolkit qui permet de gérer **les appels asynchrones** (comme les requêtes API) dans Redux, **de manière simple et centralisée**.

-   Elle génère automatiquement des **actions Redux** pour représenter les trois états d’une promesse :

    -   `pending` → L'appel commence
    -   `fulfilled` → L'appel réussit
    -   `rejected` → L'appel échoue

-   **Syntaxe:**

    ```js
    import { createAsyncThunk } from '@reduxjs/toolkit'

    const nomThunk = createAsyncThunk('sliceName/actionName',          // [1] Nom du thunk (type d’action générée)
        async (argument, thunkAPI) => {  // [2] Fonction asynchrone principale
            // Utiliser des appels API ici, ex:
            const response = await fetch(...);

            // [3] The Return Data is The Payload of reducer in fulfilled case :
            return await response.json();
    });

    ```

    -   **Nom** (type) de l’action Redux générée.
    -   **Fonction asynchrone** recevant `argument` (passé lors du dispatch), `thunkAPI` (accès à dispatch, getState, etc.).
    -   **Options avancées** (`condition`, `extra`, `serializeError`, etc.).

## 2. **Exemple complet:**

> Objectif : Récupérer une liste de posts depuis une API

-   **Créer le thunk:**

    ```js
    // features/posts/postsThunk.js
    import { createAsyncThunk } from "@reduxjs/toolkit";

    export const fetchPosts = createAsyncThunk(
    	"posts/fetchPosts",
    	async (_, thunkAPI) => {
    		try {
    			const response = await fetch(
    				"https://jsonplaceholder.typicode.com/posts"
    			);
    			if (!response.ok) throw new Error("Failed to fetch posts");
    			const data = await response.json();
    			return data;
    		} catch (error) {
    			return thunkAPI.rejectWithValue(error.message);
    		}
    	}
    );
    ```

-   **Le slice Redux:**

    ```js
    // features/posts/postsSlice.js
    import { createSlice } from "@reduxjs/toolkit";
    import { fetchPosts } from "./postsThunk";

    const postsSlice = createSlice({
    	name: "posts",
    	initialState: {
    		posts: [],
    		loading: false,
    		error: null,
    	},
    	reducers: {}, // pour les actions synchrones
    	extraReducers: (builder) => {
    		builder
    			.addCase(fetchPosts.pending, (state) => {
    				state.loading = true;
    				state.error = null;
    			})
    			.addCase(fetchPosts.fulfilled, (state, action) => {
    				state.loading = false;
    				state.posts = action.payload;
    			})
    			.addCase(fetchPosts.rejected, (state, action) => {
    				state.loading = false;
    				state.error = action.payload || action.error.message;
    			});
    	},
    });

    export default postsSlice.reducer;
    ```

-   **Utilisation dans un composant React:**

    ```jsx
    // components/PostsList.jsx
    import React, { useEffect } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { fetchPosts } from "../features/posts/postsThunk";

    const PostsList = () => {
    	const dispatch = useDispatch();
    	const { posts, loading, error } = useSelector((state) => state.posts);

    	useEffect(() => {
    		dispatch(fetchPosts());
    	}, [dispatch]);

    	if (loading) return <p>Chargement...</p>;
    	if (error) return <p>Erreur : {error}</p>;

    	return (
    		<ul>
    			{posts.map((post) => (
    				<li key={post.id}>{post.title}</li>
    			))}
    		</ul>
    	);
    };

    export default PostsList;
    ```

### 📚 Résumé

| Élément                | Rôle                                                             |
| ---------------------- | ---------------------------------------------------------------- |
| `createAsyncThunk`     | Crée un thunk asynchrone avec `pending`, `fulfilled`, `rejected` |
| `thunkAPI`             | Accès à `dispatch`, `getState`, `rejectWithValue`, etc.          |
| `extraReducers`        | Permet de gérer les 3 états de la promesse dans un slice         |
| `rejectWithValue(err)` | Renvoie une erreur customisée                                    |
