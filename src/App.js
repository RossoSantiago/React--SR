import './App.css';


import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {Navbarx} from './Components/NavBar/NavBar';
import Button from 'react-bootstrap/Button';


function App() { 
  return (
   <div>
    <Navbarx/>
    
    <ItemListContainer greeting = "Cuidemos nuestro mundo" />

   

   <div className= "container1">
    <Button className= "ubicacion">Click me!</Button>
   </div>
   </div>
  );
}
   
       
  
     
export default App;