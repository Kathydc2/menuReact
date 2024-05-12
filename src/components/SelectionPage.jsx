import React from 'react';
// import Header from './Header';



function SelectionPage({selectedItems }) {
  return (
    <div className='selectionPage'>
      {/* <Header title="Selected Items" /> */}
      <div className="selectionInfo">
        {selectedItems.map((item, idx) => (
          <div className='card' key={idx}>
            <h2>{item.name}</h2>
            <h3>Ingredients</h3>
            <p>{item.ingredients}</p>
            <div className="pic-container">
            <img className="pic" src={item.photo} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectionPage