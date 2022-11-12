import React, { useState } from 'react'
import GifImage from './Gif/GifImage';

const App = () => {

  const [searchGifs, setSearchGifs] = useState([])
  const handleSearch = (value) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=v43j1KLSYJXGHsi02CZNVsisqcm4Qzrl&q=${value}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setSearchGifs(result.data);
      })
      .catch((err) => {
        alert("Please run again");
      });
  };

  const debounce = (callback, delay = 500) => {
    let endTimer;
    return function (...argu) {
      clearTimeout(endTimer);
      endTimer = setTimeout(() => {
        callback.call(null, ...argu);
      }, delay);
    };
  };

  const debouncedSearch = debounce(handleSearch, 999);


  return (<>
      <div>
        <h1>Search any GifImage</h1>
        <label>
         SearchBar:
          <input
            placeholder="search gifs"
            onChange={(e) => debouncedSearch(e.target.value)}
          />
           <button onClick={debouncedSearch}>Have a look</button>
        </label>
      </div>
      <div style={{ marginTop: "8px" }}>
        {searchGifs.map((data) => {
          return <GifImage key={data.id} data={data} />;
        })}
    </div>
    </>
  )
}

export default App