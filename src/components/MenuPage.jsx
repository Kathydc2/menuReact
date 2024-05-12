import React from 'react';
import Header from './Header';
import MenuList from './MenuList';

function MenuPage({title, menuItems, setSelectedItem}) {
  return (
    <div className='menuPage'>
       <hr></hr>
        <Header title={title} />
        <MenuList menuItems={menuItems} setSelectedItem={setSelectedItem} />
       </div>
  )
}

export default MenuPage