import React, { useState } from 'react'
import Result from './Result';
import emojis from '../assets/emojis'


function SearchBar() {
    const [value,setValue]=useState();
    const [isFound, setIsFound] = useState();
    const [filteredData, setFilteredData] = useState({});
    function handleInput(event) {
        let value =event.target.value;
        setValue(value);
    }
    function handleClick(event) {
      const emojiFound = emojis.find((element) => element.emoji === value);
      if (emojiFound) {
        setIsFound(true);
        setFilteredData(emojiFound);
      } else {
        setIsFound(false);
        setFilteredData({});
      }
      setValue("");
      event.preventDefault();
    }
    function handleResult() {
      if (isFound === null) {
        return null; // Nothing to show initially
      } else if (isFound === true) {
        return (
          <Result
            emoji={filteredData.emoji}
            name={filteredData.name}
            desc={filteredData.description}
          />
        );
      } else if (isFound === false){
        return <p>No matching emoji found.</p>;
      }
    }
  return (
    <div id='search'>
      <form className="flex bg-white justify-center w-4/5 p-2 rounded-full" onSubmit={handleClick}>
        <input
          className=" w-4/5 bg-gray-100 placeholder-zinc-400 rounded-l-full pl-6"
          placeholder="Emoji Search"
          aria-label="search1"
          type="search"
          name="search1"
          id="search1"
          value={value}
          onChange={handleInput}
        />
        <button
          type='submit'
          className="p-3 text-2xl bg-gray-100 rounded-r-full">
          🔍
        </button>
      </form>
      <div>{handleResult()}</div>
    </div>
  );
}

export default SearchBar
