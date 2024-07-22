import React from "react";

function Stats({ itemList }) {
  const length = itemList.length;
  const packed = itemList.filter((item) => item.completed == true);
  const percent = Math.round((packed.length / length) * 100);
  return (
    <footer className="stats">
      You have {itemList.length} items on your list, you already packed{" "}
      {packed.length} ({length === 0 ? 0 : percent}%)
    </footer>
  );
}

export default Stats;
