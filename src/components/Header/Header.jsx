import logo from "../../assets/images/logo.png"
import "../../pages/Home/Home.css"
import login from "../../assets/images/login.jpg"
import { NavLink } from "react-router-dom"
import hamMenu from "../../assets/images/hamMenu.png"
import { useState,useEffect } from "react"
function Header(){
	
	const[showHam,setShowHam]=useState(false)
	const[showMenu,setShowMenu]=useState(true)
	
	useEffect(()=>{
		const handleResize = () => {
			if (window.innerWidth < 700) {
				setShowHam(true)
				setShowMenu(false)
			} else {
				setShowHam(false)
				setShowMenu(true)
			}
		}
		window.addEventListener("resize",handleResize)
		return()=>{
			window.removeEventListener("resize",handleResize)
		}
	},[])
	const [openHam,setOpenHam]=useState(false)
	
	
	return(
		<div>
		<div className="header-img">
		<div className="logo">
		<img src={logo} alt="logo" />
		
		</div>
		
		{showMenu &&(<div className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/menu">Menu</NavLink>
			<NavLink to="/login">Login</NavLink>
			</div>)}
			
			
			
			<div className="login">
			<img src={login} alt="login" />
			{showHam && (
				<div className="ham-menu">
				<img src={hamMenu} alt="hamber-menu" onMouseOver={()=>setOpenHam(true)} />
				
				</div>
				
			)}
			
			</div>
			{openHam &&(
				<div className="ham-design" onMouseLeave={()=>setOpenHam(false)}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/menu">Menu</NavLink>
				<NavLink to="/aboutus">About us</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				
				
				</div>
			)}
			
			
			
			
			</div>
			</div>
		)
	}
	export default Header