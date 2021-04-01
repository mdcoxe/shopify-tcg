import React, { useContext } from 'react';
import { Flex, Icon, Image, Box, Badge } from '@chakra-ui/react';
import { ShopContext } from '../context/shopContext';
import { BiMenuAltLeft, BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const { openCart, openMenu, checkout } = useContext(ShopContext);
	return (
		<Flex
			backgroundColor="black"
			flexDir="row"
			justifyContent="space-between"
			p="1rem"
			alignItems="center"
		>
			<Icon
				fill="#FFD900"
				as={BiMenuAltLeft}
				w={10}
				h={10}
				cursor="pointer"
				onClick={() => openMenu()}
			/>
			<Link to="/">
				<Image src="https://imgur.com/bhspC86.png" h="100%" w={400} />
			</Link>
			<Box>
				<Icon
					fill="#FFD900"
					as={BiCartAlt}
					w={30}
					h={30}
					cursor="pointer"
					onClick={() => openCart()}
				/>
				<Badge backgroundColor="FFFC72" borderRadius="50%">
					{checkout?.lineItems?.length}
				</Badge>
			</Box>
		</Flex>
	);
};

export default NavBar;
