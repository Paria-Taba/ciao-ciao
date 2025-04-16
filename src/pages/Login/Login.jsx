import Header from "../../components/Header/Header"
import "../Login/Login.css"

import Footer from "../../components/Footer/Footer"
function Login(){
	return(
		<div>
			<Header></Header>
			<h1 className="title-login">Logga in</h1>
			<div className="form">
				<div>
					<label htmlFor="namn">Namn:</label>
                      <input type="text" id="namn" />
				</div>
				<div>
					<label htmlFor="email">E-mail:</label>
                      <input type="text" id="email" />
				</div>
				<div>
					<label htmlFor="tel">Telefon:</label>
                      <input type="text" id="tel" />
				</div>
				
			</div>
			<div className="button-inlog">
				<button>Gå till inlogning</button>
			</div>
			<Footer></Footer>
		</div>
	)
}
export default Login