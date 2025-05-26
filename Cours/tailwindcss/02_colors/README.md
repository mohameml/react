# Cour 02 : **Colors**

## 1. **Définition:**

-   **Définition:**

    > Tailwind CSS fournit une **palette de couleurs prédéfinies** que tu peux utiliser directement avec des **classes utilitaires**.

    -   Chaque couleur (comme `blue`, `gray`, `red`, etc.) est disponible en **différents niveaux d’intensité**, notés par des nombres (de `50` à `950`, plus le nombre est élevé, plus la couleur est foncée).

-   **Syntaxe:**

    La **syntaxe générale** des classes de couleurs est :

    ```plaintext
    <propriété>-<couleur>-<intensité>
    ```

    | Propriété      | Utilité                        |
    | -------------- | ------------------------------ |
    | `bg-`          | couleur de fond                |
    | `text-`        | couleur du texte               |
    | `border-`      | couleur de bordure             |
    | `from-`, `to-` | dégradé (gradient)             |
    | `ring-`        | ombre de focus                 |
    | `outline-`     | contour de focus (ex: boutons) |

## 2. **Exemples:**

-   **Couleur de fond:**

    ```html
    <div class="bg-blue-500 text-white p-4 rounded">Fond bleu 500</div>
    ```

-   **Couleur de texte:**

    ```html
    <p class="text-gray-700">Texte gris 700</p>
    ```

-   **Bordure colorée:**

    ```html
    <div class="border-2 border-red-400 p-4">Boîte avec bordure rouge 400</div>
    ```

-   **Hover avec couleur:**

    ```html
    <button
    	class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
    >
    	Hover vert
    </button>
    ```

-   **Dégradé de fond:**

    ```html
    <div
    	class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-4"
    >
    	Dégradé horizontal
    </div>
    ```

### **RQ : Voir les couleurs disponibles**

Tu peux consulter la palette complète ici :
👉 [https://tailwindcss.com/docs/customizing-colors#default-color-palette](https://tailwindcss.com/docs/customizing-colors#default-color-palette)
