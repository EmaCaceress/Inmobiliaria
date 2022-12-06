import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';

function App() {
	return (
		<Routes>
			<Route path="/products" element={<Products />} />
			<Route path="/home" element={<Home />} />
			<Route errorElement={<h1>Erorr</h1>} />

		</Routes>
	);
}

export default App;
