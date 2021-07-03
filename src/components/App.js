import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData)
  const [isDarkMode, setDarkMode] = useState(true)

  console.log('App Component',items)

  const appClass = !isDarkMode ? "App dark" : "App light"

  function handleDarkMode() {
      setDarkMode(!isDarkMode)
  }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
