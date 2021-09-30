import React from "react";
import SearchBar from "./components/SearchBar";
import JSONDATA from "./JSONDATA.json";
import FruitItem from "./components/FruitItem";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const onSearchSubmit = (term) => {
    console.log(term);
    fetch("./JSONDATA.json").then(async (response) => {
      try {
        const data = await response.json();
        console.log("response data?", data);
      } catch (error) {
        console.log("Error happened here!");
        console.error(error);
      }
    });
  };

  const onItemSelect = (item) => {
    console.log("from App", item);
    // setSelectFruits({ selectFruits: item });
  };
  return (
    <div className="container ui fluid container">
      <div className="header">
        <span>S</span>
        <span>E</span>
        <span>A</span>
        <span>R</span>
        <span>C</span>
        <span>H</span>
      </div>

      <SearchBar onSubmit={onSearchSubmit} data={JSONDATA} />
      <FruitItem onItemSelect={onItemSelect} />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
