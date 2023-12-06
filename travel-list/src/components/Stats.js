export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start by adding some item on the List</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything Ready to go "
          : `💼 You have ${numItem} item on your list ,and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
