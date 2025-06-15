# Cour : **Compound Component Pattern en React**

## 1. **Définition:**

> Le **Compound Component Pattern** est un **design pattern React** dans lequel plusieurs composants travaillent **ensemble** de manière **liée et cohérente**.

-   Il s'agit de composants **parents** et **enfants** qui **communiquent via un contexte interne**, permettant une API naturelle :

    ```jsx
    <Tabs>
    	<Tabs.List>
    		<Tabs.Trigger>Tab 1</Tabs.Trigger>
    		<Tabs.Trigger>Tab 2</Tabs.Trigger>
    	</Tabs.List>
    	<Tabs.Content>Contenu du tab</Tabs.Content>
    </Tabs>
    ```

-   Utilisation

    -   Construction d’**interfaces dynamiques** où plusieurs sous-composants doivent partager un état commun.
    -   Idéal pour des composants complexes : `Tabs`, `Accordion`, `Modal`, `Form`, etc.

-   Avantages

    | Avantage        | Description                                                  |
    | --------------- | ------------------------------------------------------------ |
    | API naturelle   | Syntaxe déclarative proche du HTML                           |
    | Réutilisabilité | Les enfants sont réutilisables en dehors du parent           |
    | Encapsulation   | L’état est géré en interne par le parent                     |
    | Flexibilité     | Les développeurs peuvent structurer librement les composants |

## 2. **Implémentation étape par étape**

-   **Plan :**

    -   Créer un **Contexte React**
    -   Créer le **composant parent** qui expose le contexte
    -   Créer les **composants enfants** qui consomment le contexte
    -   Attacher les enfants comme **propriétés du composant parent**

-   **Étape 1 : Créer le Contexte**

    ```jsx
    import React, { createContext, useContext, useState } from "react";

    const ToggleContext = createContext();
    const useToggle = () => {
    	const context = useContext(ToggleContext);
    	if (!context) throw new Error("Must be used within <Toggle />");
    	return context;
    };
    ```

-   **Étape 2 : Créer le composant parent**

    ```jsx
    const Toggle = ({ children }) => {
    	const [on, setOn] = useState(false);
    	const toggle = () => setOn((prev) => !prev);

    	return (
    		<ToggleContext.Provider value={{ on, toggle }}>
    			{children}
    		</ToggleContext.Provider>
    	);
    };
    ```

-   **Étape 3 : Créer les composants enfants**

    ```jsx
    Toggle.Button = () => {
    	const { toggle } = useToggle();
    	return <button onClick={toggle}>Toggle</button>;
    };

    Toggle.On = ({ children }) => {
    	const { on } = useToggle();
    	return on ? children : null;
    };

    Toggle.Off = ({ children }) => {
    	const { on } = useToggle();
    	return !on ? children : null;
    };
    ```

-   **Étape 4 : Usage naturel**

    ```jsx
    const App = () => (
    	<Toggle>
    		<Toggle.Button />
    		<Toggle.On>Le bouton est ON</Toggle.On>
    		<Toggle.Off>Le bouton est OFF</Toggle.Off>
    	</Toggle>
    );
    ```

## 3. Exemple concret : `Tabs`

```jsx
const TabsContext = createContext();
const useTabs = () => useContext(TabsContext);

const Tabs = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	return (
		<TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
			{children}
		</TabsContext.Provider>
	);
};

Tabs.List = ({ children }) => <div className="tab-list">{children}</div>;

Tabs.Trigger = ({ index, children }) => {
	const { setActiveIndex, activeIndex } = useTabs();
	const isActive = index === activeIndex;
	return (
		<button
			onClick={() => setActiveIndex(index)}
			style={{ fontWeight: isActive ? "bold" : "normal" }}
		>
			{children}
		</button>
	);
};

Tabs.Content = ({ index, children }) => {
	const { activeIndex } = useTabs();
	return activeIndex === index ? <div>{children}</div> : null;
};
```

```jsx
const App = () => (
	<Tabs>
		<Tabs.List>
			<Tabs.Trigger index={0}>Tab 1</Tabs.Trigger>
			<Tabs.Trigger index={1}>Tab 2</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content index={0}>Contenu Tab 1</Tabs.Content>
		<Tabs.Content index={1}>Contenu Tab 2</Tabs.Content>
	</Tabs>
);
```
