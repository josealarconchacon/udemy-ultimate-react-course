export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list</em>
      </p>
    );

  const numItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything you came for. Now you are ready to go ✅"
          : ` 🎒 You have ${numItems} items on your list, and you are already packed
        ${numOfPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
