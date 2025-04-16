import Header from "../../components/Header/Header";
import "../Menu/Menu.css"

function Menu(){
	return(
		<div className="menu">
			<Header></Header>
			<div className="menu-title">
				<div><h1>Meny</h1></div>
				<div className="menu-span">	<span>Maträtter</span>
				<span>Dryck</span>
				<span>Desert</span></div>
			

			</div>
			
		</div>
	)
}
export default Menu;