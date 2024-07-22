import React, { useState } from "react";

function Form({ itemList, setItemList }) {
  const [count, setCount] = useState(1);
  const [itemName, setItemName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (itemName !== "") {
      const item = {
        id: Date.now(),
        name: itemName,
        count: count,
        completed: false,
        packed: 0,
      };
      setItemList([...itemList, item]);
      setItemName("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="item">What do you need for your trip</label>
      <select
        name="number"
        id="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        type="text"
        id="item"
        placeholder="item ..."
      />
      <input type="submit" value="ADD" />
    </form>
  );
}

export default Form;
