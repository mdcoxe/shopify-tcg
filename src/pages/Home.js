import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image } from '@chakra-ui/react';

const Home = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	if (!products) return <div>Loading...</div>;

	return (
		<div>
			<Grid templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']}>
				{products.map((product) => {
					<Link to={`/products/${product.handle}`} key={product.id}>
						<Box
							_hover={{ opacity: '80%' }}
							textAlign="center"
							position="relative"
						>
							<Image src={product.images[0].src} />
							<Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
								{product.title}
							</Text>
							<Text position="absolute" bottom="5%" w="100%" color="gray">
								${product.variants[0].price}
							</Text>
						</Box>
						;
					</Link>;
				})}
			</Grid>
		</div>
	);
};

export default Home;
