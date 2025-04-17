import Header from "../../components/Header/Header"
import "../Login/Login.css"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().min(2).max(10).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  tel: Joi.string().pattern(/^[0-9]{10}$/).required()
});

function Login(){
	const[data,setData]=useState({
		name:"",
		email:"",
		tel:""
	})
	let message={
		name:"",
		email:"",
		tel:""
	}
	const result=schema.validate(data)
	console.log(result)

if (result.error){
		result.error.details.forEach((item)=>{
			const field=item.context.key
			if(field==="name"){
				message.name="du måste skriva ditt namn mellan 2 and 10"

			}
			if(field==="email"){
				message.email="du måste skriva ditt email på rätt sätt"
			}
			if(field==="tel"){
				message.tel="please write your phone number"
			}
		})
	}
	
	
	return(
		<div>
			<Header></Header>
			<h1 className="title-login">Logga in</h1>
			<div className="form">
				<div>
					<label htmlFor="namn">Namn:</label>
                      <input type="text" id="namn"  onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name}/>
					  <p className="error-message">{message.name}</p>
				</div>
				<div>
					<label htmlFor="email">E-mail:</label>
                      <input type="text" id="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email}/>
					  <p className="error-message">{message.email}</p>
				</div>
				<div>
					<label htmlFor="tel">Telefon:</label>
                      <input type="text" id="tel" onChange={(e) => setData({ ...data, tel: e.target.value })} value={data.tel} />
					  <p className="error-message">{message.tel}</p>
				</div>
				
			</div>
			<div className="button-inlog">
				<button >Gå till inlogning</button>
			</div>
			<Footer></Footer>
		</div>
	)
}
export default Login