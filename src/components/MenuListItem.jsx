import React from 'react';

function MenuListItem({ name, ingredients, photo, setSelectedItem }) {
  // const { name, ingredients, photo, setSelectedItem } = props;

  function handleChangeItem() {
    setSelectedItem({ name, ingredients, photo });
  }

  return (
    <div onClick={handleChangeItem} className='menuItem'>
      <h3>{name}</h3>
      {/* <p>{ingredients}</p> */}
      {/* <img className="pic" src={photo} alt={name} /> */}
    </div>
  );
}

export default MenuListItem;

