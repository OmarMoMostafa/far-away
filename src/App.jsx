import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Stats from "./components/Stats";

function App() {
  const [itemList, setItemList] = useState([]);

  return (
    <div className="container">
      <Header />
      <Form setItemList={setItemList} itemList={itemList} />
      <List setItemList={setItemList} itemList={itemList} />
      <Stats itemList={itemList} />
    </div>
  );
}

export default App;
