import React, { useState } from "react";

function List({ itemList, setItemList }) {
  const [sort, setSort] = useState("date");

  const toggleCompleted = (id) => {
    const updatedList = itemList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItemList(updatedList);
  };
  const deleteItem = (id) => {
    const updatedList = itemList.filter((item) => item.id !== id);
    setItemList(updatedList);
  };

  let sortedItems;
  switch (sort) {
    case "date":
      sortedItems = itemList.slice().sort((a, b) => a.id - b.id);
      break;

    case "name":
      sortedItems = itemList
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "status":
      sortedItems = itemList.slice().sort((a, b) => a.completed - b.completed);
      break;

    default:
      sortedItems = itemList;
      break;
  }

  return (
    <div className="item-list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleCompleted={toggleCompleted}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <Filters sort={sort} setSort={setSort} setItemList={setItemList} />
    </div>
  );
}

function Item({ deleteItem, toggleCompleted, item }) {
  return (
    <li className={`list-item ${item.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          toggleCompleted(item.id);
        }}
      />
      <span className="number">{item.count}</span>
      <span className="item-name">{item.name}</span>
      <span
        className="delete"
        onClick={() => {
          deleteItem(item.id);
        }}
      >
        &#10005;
      </span>
    </li>
  );
}

function Filters({ sort, setSort, setItemList }) {
  return (
    <div className="filters">
      <select
        name="filter"
        value={sort}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option value="date">date</option>
        <option value="name">name</option>
        <option value="status">status</option>
      </select>
      <button onClick={() => setItemList([])}>clear list</button>
    </div>
  );
}

export default List;
