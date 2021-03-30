import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';

function App() {
	return (
		<div>
			<Router>
				<p>Navbar</p>
				<p>Cart</p>
				<p>navmenu</p>

				<Switch>
					<Route path="/aboutus">
						<AboutUs />
					</Route>
					<Route path="/products/:handle">
						<ProductPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<p>Footer</p>
			</Router>
		</div>
	);
}

export default App;
