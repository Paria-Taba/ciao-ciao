
import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Menu from './pages/Menu/Menu'

function App() {
	
	return (
		<HashRouter>
		<Routes>
		<Route path='/' element={<Home></Home>}></Route>		 
		<Route path='/login' element={<Login></Login>}></Route>		       
		<Route path='/menu' element={<Menu></Menu>}></Route>		       

  
       


		</Routes>
		</HashRouter>
		
	)
}

export default App
