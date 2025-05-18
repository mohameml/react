Voici un **résumé structuré des étapes pour mettre en place l'authentification dans une application React** avec `React Router` et un contexte global (`AuthContext`) :

---

### ✅ 1. **Créer une route `/login`**

* Utilise `react-router-dom` pour définir la route vers la page de login.

```jsx
// App.jsx ou Routes.jsx
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
</Routes>
```

---

### ✅ 2. **Créer un formulaire de login**

* Champ `email`, `password`, bouton `submit`.
* Envoie les données à un backend via `fetch` ou `axios`.

```jsx
function Login() {
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

### ✅ 3. **Créer un `AuthContext` (React Context)**

* Contient l'état utilisateur (`user`), le `login`, le `logout`.
* Stockage du token si besoin (dans `localStorage` ou `cookie`).

```jsx
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const login = async (email, password) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      setUser({ email }); // ou data.user
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
```

---

### ✅ 4. **Créer un hook `useAuth()`**

* Pour accéder facilement au contexte dans tous les composants.

```jsx
export function useAuth() {
  return React.useContext(AuthContext);
}
```

---

### ✅ 5. **Créer un composant `PrivateRoute`**

* Redirige vers `/login` si l'utilisateur n'est pas connecté.

```jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
```

---

### ✅ 6. **Encapsuler l'app dans le `AuthProvider`**

```jsx
import { AuthProvider } from "./AuthContext";

const Root = () => (
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
```

---

### Optionnel :

* Persister l'état (`user`) via `useEffect` + `localStorage`.
* Gérer l'expiration du token.
* Ajouter un `Register` et `ForgotPassword`.

---

Souhaites-tu que je te crée une structure complète de fichiers (comme `AuthContext.js`, `Login.jsx`, `PrivateRoute.jsx`) ?
