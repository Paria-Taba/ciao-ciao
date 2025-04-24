import Header from "../../components/Header/Header";
import "../Menu/Menu.css"
import FoodMenu from "../../components/Menu/FoodMenu"
import {menuDishes,desserts,drinks} from "../../data/data.js"
import { useState } from "react";
import Footer from "../../components/Footer/Footer.jsx";
import { useCartStore } from "../../data/CartStore.js";
import { NavLink } from "react-router-dom";


function Menu(){
	const[menuType,setMenyType]=useState("menuDishes")
	const cart = useCartStore((state) => state.cart)

	const addItem=useCartStore(state=>state.addItem)

	
	let currentMenu;
	if (menuType === "menuDishes") {
		currentMenu = menuDishes;
	} else if (menuType === "drinks") {
		currentMenu = drinks;
	} else if (menuType === "desserts") {
		currentMenu = desserts;
	}
function addHandler(item){
	addItem(item)
	console.log(cart)
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
			<NavLink to="/basket">	<i className="fas fa-shopping-cart"></i></NavLink>
				
					<span className="cart-icon">{cart.length}</span>
		</div>


		<div className="main-menu">
  {
    menuType === "menuDishes" ? (
      menuDishes.map(item => (
        <FoodMenu key={item.id} {...item} onAdd={()=>addHandler(item)}/>
      ))
    ) : menuType === "drinks" ? (
      drinks.map(item => (
        <FoodMenu key={item.id} {...item} onAdd={()=>addHandler(item)}/>
      ))
    ) : menuType === "desserts" ? (
      desserts.map(item => (
        <FoodMenu key={item.id} {...item}  onAdd={()=>addHandler(item)}/>
      ))
    ) : null
  }
</div>
		<Footer></Footer>
		
		</div>
	)
}
export default Menu;