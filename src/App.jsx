import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route errorElement={<h1>Erorr</h1>}/>

		</Routes>
	);
}

export default App;
