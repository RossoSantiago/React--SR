import './NavBar.css'
import logo from './logo plantas.jpg'
import {CartWidget} from "../CartWidget/CartWidget"






export const Navbarx =() => {
  return(
      
      <header className="header">
        <div className= "header_container">
          <div>
          <h1 className="titulo" >RAINFOREST</h1>
          </div>
          

           <nav className ="NavBar">
           <img src={logo} alt="logo" className="header_logo"/>
              <a href="#" className = "navbar_link">Home</a>
              <a href="#" className = "navbar_link">ITEM 1</a>
              <a href="./Servicios.js" className = "navbar_link">ITEM 2</a>
              <a href="#" className = "navbar_link">Contacto</a>
           <CartWidget />
           </nav>

        
        </div>
      </header>
  )
}