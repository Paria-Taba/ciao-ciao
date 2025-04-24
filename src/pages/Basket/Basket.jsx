import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useCartStore } from "../../data/CartStore";
import "../Basket/Basket.css"
function Basket(){
	const cart = useCartStore((state) => state.cart);  
	const total = cart.reduce((sum, item) => sum + item.price, 0);
	const deleteItem = useCartStore((state) => state.deleteItem);  

	return(
		<div>
			<Header></Header>
			
			{cart.map(item=>(
				<div key={item.id} className="div-order">
				<p>{item.name}</p>
				<p>{item.price} SEK</p>
				<button onClick={()=>deleteItem(item.id)}>Delete Item</button>
				
			</div>
			))}
			<div className="total-div">

			
			<p>Total : {total} SEK</p>	
			<button>Pay</button>
			</div>
	
			<Footer></Footer>
		</div>
	)
}
export default Basket