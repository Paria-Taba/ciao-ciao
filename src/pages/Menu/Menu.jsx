import Header from "../../components/Header/Header";
import "../Menu/Menu.css"
import FoodMenu from "../../components/Menu/FoodMenu"
import {menuDishes,desserts,drinks} from "../../data/data.js"
import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
function Menu(){
	const[menuType,setMenyType]=useState("menuDishes")
	const[cart,setCart]=useState([])
	let currentMenu;
	if (menuType === "menuDishes") {
		currentMenu = menuDishes;
	} else if (menuType === "drinks") {
		currentMenu = drinks;
	} else if (menuType === "desserts") {
		currentMenu = desserts;
	}
	function addCart(item){
		setCart([...cart,item])
	}
	
	return(
		<div className="menu">
		<Header></Header>
		<div className="menu-title">
		<div><h1>Meny</h1></div>
		<div className="menu-span">	<span onClick={()=>setMenyType("menuDishes")}>Maträtter</span>
		<span onClick={()=>setMenyType("drinks")}>Dryck</span>
		<span onClick={()=>setMenyType("desserts")}>Desert</span></div>
		</div>
		<div className="shop-icon">
					<i class="fas fa-shopping-cart"></i>
					<span className="cart-icon">{cart.length}</span>
		</div>


		<div className="main-menu">
  {
    menuType === "menuDishes" ? (
      menuDishes.map(item => (
        <FoodMenu key={item.id} {...item} onAddToCart={()=>addCart(item)}/>
      ))
    ) : menuType === "drinks" ? (
      drinks.map(item => (
        <FoodMenu key={item.id} {...item} onAddToCart={()=>addCart(item)} />
      ))
    ) : menuType === "desserts" ? (
      desserts.map(item => (
        <FoodMenu key={item.id} {...item} onAddToCart={()=>addCart(item)} />
      ))
    ) : null
  }
</div>
		<Footer></Footer>
		
		</div>
	)
}
export default Menu;