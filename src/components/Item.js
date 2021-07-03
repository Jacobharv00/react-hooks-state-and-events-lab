import { useState } from "react"


function Item({ name, category }) {
  // console.log('Item Component', name)
  const [isInCart, setIsInCart] = useState(false)

  function handleAdded() {
    setIsInCart(!isInCart)
  }

 return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdded}>Add to Cart</button>
    </li>
  );
}

export default Item;
