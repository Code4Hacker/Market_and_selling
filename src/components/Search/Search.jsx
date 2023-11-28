import React from 'react';
import './style.css';

const Search = () => {
  return (
    <div className='search'>
        <div className="">
            <input type="text" placeholder='Search  Products'/>
            <button className="bi bi-search"></button>
        </div>
    </div>
  )
}

export default Search