import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavMenu from './components/NavMenu';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<p>Cart</p>
				<NavMenu />

				<Switch>
					<Route path="/contactus">
						<ContactUs />
					</Route>
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
