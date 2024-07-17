import React from "react";

function Form() {
  return (
    <form>
      <label htmlFor="item">What do you need for your trip</label>
      <select name="number" id="number">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" id="item" placeholder="item ..." />
      <input type="submit" value="ADD" />
    </form>
  );
}

export default Form;
