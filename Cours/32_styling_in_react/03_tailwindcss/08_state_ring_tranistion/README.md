# Cour :

## 1. États

-   **Définition et usage:**

    > Les **états** permettent d’appliquer un style uniquement **quand un élément interagit avec l’utilisateur** : survol, clic, focus du clavier, etc.

    -   En Tailwind, on **préfixe** la classe par l’état.

-   **Tableau des états principaux:**

    | **État**       | **Définition**                                             | **Syntaxe**                    |
    | -------------- | ---------------------------------------------------------- | ------------------------------ |
    | `hover`        | Quand l'utilisateur **survole** l'élément                  | `hover:bg-blue-500`            |
    | `focus`        | Quand l'élément **reçoit le focus** (clavier)              | `focus:outline-none`           |
    | `active`       | Quand l’élément est **cliqué**                             | `active:scale-95`              |
    | `disabled`     | Quand un élément est **désactivé**                         | `disabled:opacity-50`          |
    | `visited`      | Pour un **lien déjà visité**                               | `visited:text-purple-600`      |
    | `checked`      | Quand une **checkbox/radio** est cochée                    | `checked:bg-green-500`         |
    | `group-hover`  | Appliquer un style à un enfant quand le parent est survolé | `group-hover:underline`        |
    | `focus-within` | Quand un **enfant** a le focus                             | `focus-within:border-blue-500` |

-   **Exemples:**

    ```html
    <button
    	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
    	Hover me
    </button>
    ```

    ```html
    <input
    	class="border focus:outline-none focus:ring-2 focus:ring-blue-400"
    	placeholder="Focus me"
    />
    ```

## 2. Ring

-   **Définition:**

    > `ring` permet d’ajouter un **contour visuel (glow/border flou)** autour d’un élément, souvent utilisé sur le **focus**.

-   **Tableau des classes `ring`:**

    | **Classe**            | **Définition**                      | **Exemples de syntaxe**                     |
    | --------------------- | ----------------------------------- | ------------------------------------------- |
    | `ring`                | Active le **contour par défaut**    | `ring`                                      |
    | `ring-{color}`        | Couleur du contour                  | `ring-blue-500`, `ring-red-300`             |
    | `ring-{size}`         | Taille de l’épaisseur               | `ring-1`, `ring-2`, `ring-4`                |
    | `ring-offset-{n}`     | Distance entre l’élément et le ring | `ring-offset-2`                             |
    | `ring-offset-{color}` | Couleur de fond du décalage         | `ring-offset-white`, `ring-offset-gray-100` |

-   **Exemples:**

    ```html
    <input
    	class="ring-2 ring-blue-500 ring-offset-2 ring-offset-white p-2 rounded"
    	placeholder="With ring"
    />
    ```

    ```html
    <button class="focus:ring-4 focus:ring-green-400">Focus me</button>
    ```

## 3. **Transitions & Animations:**

-   **Définition:**

    > Les **transitions** permettent d’ajouter une animation fluide entre deux états (ex : quand on passe de `hover:bg-red` à `bg-blue`).

    -   Tailwind fournit des **classes utilitaires pour activer et contrôler la transition**.

-   **Tableau des classes de transition:**

    | **Classe**          | **Définition**                                       | **Syntaxe**                          |
    | ------------------- | ---------------------------------------------------- | ------------------------------------ |
    | `transition`        | Active une transition de base                        | `transition`                         |
    | `transition-all`    | Transition sur **toutes les propriétés modifiables** | `transition-all`                     |
    | `transition-colors` | Transition sur les **couleurs**                      | `transition-colors`                  |
    | `duration-{ms}`     | Durée de la transition en millisecondes              | `duration-300`, `duration-500`       |
    | `delay-{ms}`        | Délai avant de commencer la transition               | `delay-100`, `delay-200`             |
    | `ease-{type}`       | Fonction d'accélération (courbe d’interpolation)     | `ease-in`, `ease-out`, `ease-in-out` |

-   **Exemples:**

    ```html
    <button
    	class="bg-red-500 hover:bg-red-700 transition-colors duration-300 text-white px-4 py-2"
    >
    	Smooth Hover
    </button>
    ```

    ```html
    <div class="transform hover:scale-110 transition duration-300 ease-in-out">
    	Zoom on hover
    </div>
    ```
