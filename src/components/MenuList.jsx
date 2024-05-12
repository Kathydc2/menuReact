import React from 'react';
import MenuListItem from './MenuListItem';

function MenuList({menuItems, setSelectedItem}) {
  return (
    <div className='menuList'>
      {menuItems.map((menuItem, idx) => {
        return (
          <MenuListItem 
            key={idx}
            name={menuItem.name}
            ingredients={menuItem.ingredients}
            photo={menuItem.photo}
            setSelectedItem={setSelectedItem}
          />
        )
      })}
    </div>
      
  )
}

export default MenuList