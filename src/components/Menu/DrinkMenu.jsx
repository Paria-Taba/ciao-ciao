import "../Menu/FoodMenu.css"
function DrinkMenu(props){
	return(
		<div className="menu-main">
			<div className="img-menu">
				<img src={props.image} alt={props.name} />
			</div>
			<div className="text-menu">
				<div className="price-name">
				<p>{props.name}</p>
				<p>{props.price}</p></div>
				<div className="info-menu">
				<p>{props.description}</p>
				<p>{props.ingredients.join( " , " )}</p></div>
			</div>

		</div>
	)
}
export default DrinkMenu;