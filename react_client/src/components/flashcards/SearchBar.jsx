import React, { useState} from 'react';


export default function SearchBar({name}){

return (
  <div className='search'>
    <div className = 'search-container'>
        <div className='input-container'>
          <span className="material-icons">search</span>
            <input type = 'text' id = 'filter-deck'
              name = 'filter-deck'
              placeholder={`search for ${name}`}/>
        </div>
        <div className = 'search-deck-btn-container'>
          < span> {`Find ${name}!`}</span>
        </div>
    </div>
  </div>
)
}