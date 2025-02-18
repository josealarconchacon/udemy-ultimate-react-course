import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
export default function App() {
  const [items, setItems] = useState([]);

  function handlerAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handlerAddItems} />
      <PackingList items={items} />

      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1> 🏖️ Far Away 🛫</h1>
    </div>
  );
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // add event handler to submit the form
  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😀 ?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        {" "}
        🎒You have x items on your list, and you are already packed x (%)
      </em>
    </footer>
  );
}
