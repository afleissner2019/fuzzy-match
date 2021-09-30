import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ data, onSubmit }) {
  const [filteredData, setfilteredData] = useState([]);
  const [textInput, setTextInput] = useState("");

  const inputChange = (event) => {
    const searchTerm = event.target.value;
    console.log(searchTerm);
    setTextInput(searchTerm);
    const newFilterTerm = data.filter((value, id) => {
      return value.fruit.toLowerCase().includes(searchTerm.toLowerCase());
    });

    if (searchTerm === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilterTerm);
    }
  };

  const clearButton = (event) => {
    setfilteredData([]);
    setTextInput("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(textInput);
    // Api request from App.js
    // handleFormSubmit(textInput);
    onSubmit(textInput);
  };

  const handleKeyPress = (event) => {
    console.log(event);

    if (event.keyCode === 13) {
      onSubmit(textInput);
    }
  };

  return (
    <div className="search ">
      <form className="form form ui segment" onSubmit={onFormSubmit}>
        <div className="ui fluid input">
          <input
            type="text"
            placeholder="Search..."
            value={textInput}
            onBlur={() => {
              setTimeout(() => {
                setfilteredData([]);
              }, 100);
            }}
            onChange={inputChange}
            onKeyPress={handleKeyPress}
          />
          <div className="search-icon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon className="clear-button" onClick={clearButton} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="result-info">
            {filteredData.slice(0, 10).map((value, id) => {
              return (
                <div key={id}>
                  <a className="data-item" href={value.image} target="_blank">
                    <p className="fruit-value">{value.fruit}</p>
                    <img src={value.image} alt={""} />
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
