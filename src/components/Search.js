import React from "react";

function Search({setSearch, search}) {

  function handleSubmit(e){
    e.preventDefault();
    setSearch(search)
  }
  return (
    <div className="searchbar" onSubmit ={handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
