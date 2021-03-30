import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
	domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
	storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export class ShopProvider extends Component {
	state = {
		product: {},
		products: [],
		checkout: {},
		isCartOpen: false,
		isMenuOpen: false,
	};

	componentDidMount() {}

	createCheckout = async () => {};

	fetchCheckout = async () => {};

	addItemToCheckout = async () => {};

	removeItemFromCart = async () => {};

	fetchAllProducts = async () => {
		const products = await client.product.fetchAll();
		this.setState({ products: products });
	};

	fetchProductWithHandle = async (handle) => {
		const product = await client.product.fetchByHandle(handle);
		this.setState({ product: product });
	};

	closeCart = () => {};
	OpenCart = () => {};
	closeMenu = () => {};
	openMenu = () => {};

	render() {
		return (
			<ShopContext.Provider
				value={{
					...this.state,
					fetchAllProducts: this.fetchAllProducts,
					fetchProductWithHandle: this.fetchProductWithHandle,
					addItemToCheckout: this.addItemToCheckout,
					removeItemFromCart: this.removeItemFromCart,
					closeCart: this.closeCart,
					openCart: this.openCart,
					closeMenu: this.closeMenu,
					openMenu: this.openMenu,
				}}
			>
				{this.props.children}
			</ShopContext.Provider>
		);
	}
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
