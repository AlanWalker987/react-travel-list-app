export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to the trip 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You are ready to go ✈"
          : `You have ${numItems} items on your list and you had already packed ${" "}
          ${packedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
}
