import "../Main-start/Main.css"
import Ciao from "../../assets/images/ciao.jpg"
import "../../pages/Home/Home.css"
import { NavLink } from "react-router-dom"

function Main(){
	return(
<div className="main">
	<h1>Ciao Ciao</h1>
	<div className="main-intro">
		<div><img src={Ciao} alt="ciao-ciao" /></div>
		<div className="main-text"><h1>Välkommen till Ciao Ciao!</h1>
		<p>Ciao Ciao är en mysig och modern restaurang i hjärtat av Göteborg, där vi serverar autentisk italiensk mat med fokus på färska och lokala råvaror. Kom och njut av våra klassiska rätter eller upptäck våra unika specialiteter. Oavsett om du är här för en snabb lunch eller en lång middag, så strävar vi efter att ge dig en fantastisk matupplevelse.
		</p>
		<p>
		Öppettider: <br /> Måndag - Fredag: 11:00 - 22:00 Lördag - Söndag: 12:00 - 23:00</p>
		<p>Adress: <br /> Ciao Ciao, Hisingen 5, 414 51 Göteborg</p></div>
		
	</div>
	<div className="main-button">
	<NavLink to="/menu">Gå till menu</NavLink>
	</div>

</div>

	)
}
export default Main