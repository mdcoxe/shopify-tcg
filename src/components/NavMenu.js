import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Text,
	VStack,
} from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

const NavMenu = () => {
	const { isMenuOpen, closeMenu } = useContext(ShopContext);
	return (
		<Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="xs">
			<DrawerOverlay>
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>
					<DrawerBody>
						<VStack p="2rem">
							<Link to="/">Home</Link>
							<Link to="/aboutus">About Us</Link>
						</VStack>
					</DrawerBody>
					<DrawerFooter textAlign="center">
						<VStack margin="auto">
							<Text w="100%" fontSize="small">
								{' '}
								&copy; Copyright 2021{' '}
							</Text>
							<Text w="100%" fontSize="small">
								{' '}
								Built by Michael Coxe{' '}
							</Text>
						</VStack>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default NavMenu;
