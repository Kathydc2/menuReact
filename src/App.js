import './App.css';
import { useState } from 'react';
import SelectionPage from './components/SelectionPage';
import MenuPage from './components/MenuPage';
import { appetizer } from './models/appetizer';
import { dessert } from './models/dessert';
import { pasta } from './models/pasta';
import { salad } from './models/salad';

function App() {
  const [selectedAppetizer, setSelectedAppetizer] = useState(appetizer[0]);
  const [selectedDessert, setSelectedDessert] = useState(dessert[0]);
  const [selectedPasta, setSelectedPasta] = useState(pasta[0]);
  const [selectedSalad, setSelectedSalad] = useState(salad[0]);
  

  return (
    <div className="App">
      <h1 className='logo'>Flavor Junction</h1>
      <SelectionPage selectedItems={[selectedAppetizer,selectedPasta, selectedSalad, selectedDessert]}/>
      <div className='menuContainer'>
      <MenuPage title="Appetizer" menuItems={appetizer} setSelectedItem={setSelectedAppetizer}/>
      <MenuPage title="Pasta" menuItems={pasta} setSelectedItem={setSelectedPasta}/>
      <MenuPage title="Salad" menuItems={salad} setSelectedItem={setSelectedSalad}/>
      <MenuPage title="Dessert" menuItems={dessert} setSelectedItem={setSelectedDessert}/>
      </div>
     
      

    </div>
  );
}

export default App;
