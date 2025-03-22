import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { AuthProvider } from './context/AuthContext';

function App() {
	return (

		<AuthProvider>
		
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		
		</AuthProvider>
	)
}

export default App;
