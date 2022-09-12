import React from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

function App() {
  const [query, setQuery] = React.useState("");

  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
    /*
    not the best way

    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query.toLowerCase()) ||
        item.last_name.toLowerCase().includes(query.toLowerCase()) ||
        item.email.toLowerCase().includes(query.toLowerCase())
    ); */
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search...."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
