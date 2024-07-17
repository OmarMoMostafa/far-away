import React from "react";

function List() {
  return (
    <div className="item-list">
      <ul>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
      <Filters />
    </div>
  );
}

function Item() {
  return (
    <li className="list-item">
      <input type="checkbox" />
      <span className="number">2</span>
      <span className="item-name">toothbrush</span>
      <span className="delete">&#10005;</span>
    </li>
  );
}

function Filters() {
  return (
    <div className="filters">
      <select name="filter"></select>
      <button>clear list</button>
    </div>
  );
}

export default List;
