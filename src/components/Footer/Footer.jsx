import "../Footer/Footer.css"
import Logo from "../../assets/images/Logo.png"
function Footer(){
	return(
		<div className="footer">
		<div><h3>Ciao Ciao - Göteborg</h3>
		<p>Adress: Hisingen 5, 414 51 Göteborg</p></div>
		<div>
		<p>Telefonnummer: +46 31 123 456 </p>
		<p>E-post: info@ciaociaogoteborg.se </p>
		</div>
		<div>
		<h4>Följ oss på sociala medier:</h4>
		<ul>
		<li>Facebook: Ciao Ciao Facebook</li>
		<li>Instagram: @CiaoCiaoRestaurang</li>
		</ul>
		</div>
		<div><img src={Logo} alt="logo" /></div>
		</div>
	)
}
export default Footer