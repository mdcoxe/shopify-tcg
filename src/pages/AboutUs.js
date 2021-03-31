import React from 'react';
import { Box, Grid, Image, Text, Heading, Flex } from '@chakra-ui/react';

const AboutUs = () => {
	return (
		<Box p="2rem">
			<Grid templateColumns={['repeat(1,1fr)', 'repeat(2, 1fr)']} m="auto">
				<Flex justifyContent="center" alignItems="center">
					<Image src="https://beckett-www.s3.amazonaws.com/news/news-content/uploads/2019/01/1954-Topps-Hank-Aaron-Rookie-Card.jpg" />
				</Flex>
				<Flex
					flexDir="column"
					alignItems="center"
					justifyContent="center"
					px="2rem"
				>
					<Heading pb="2rem">About Us</Heading>
					<Text pb="2rem" fontWeight="light">
						Finite but unbounded billions upon billions light years realm of the
						galaxies something incredible is waiting to be known
						circumnavigated. A very small stage in a vast cosmic arena
						inconspicuous motes of rock and gas courage of our questions a very
						small stage in a vast cosmic arena made in the interiors of
						collapsing stars descended from astronomers. The ash of stellar
						alchemy gathered by gravity a very small stage in a vast cosmic
						arena from which we spring a very small stage in a vast cosmic arena
						star stuff harvesting star light.
					</Text>
					<Box w="75%" p="2rem" color="gray.500">
						<ul>
							<li>
								Nisl magnis netus himenaeos magna nec consequat ligula elementum
								lectus lorem
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipiscing elit pharetra
								hendrerit montes, leo egestas aliquet tempus felis per
								condimentum mauris sagittis volutpat, imperdiet netus duis ac
								dui commodo metus senectus platea.
							</li>
							<li>
								Fusce ad fames phasellus nulla etiam iaculis tincidunt et arcu
								in, fermentum quisque sit duis penatibus massa justo ultrices.
							</li>
						</ul>
					</Box>
					<Text pt="2rem" fontWeight="light">
						Quasar the only home we've ever known preserve and cherish that pale
						blue dot rich in mystery rings of Uranus explorations? Great
						turbulent clouds dream of the mind's eye invent the universe at the
						edge of forever vanquish the impossible paroxysm of global death.
						Hydrogen atoms paroxysm of global death how far away the ash of
						stellar alchemy descended from astronomers stirred by starlight?
						Great turbulent clouds not a sunrise but a galaxyrise citizens of
						distant epochs from which we spring citizens of distant epochs two
						ghostly white figures in coveralls and helmets are softly dancing.
					</Text>
				</Flex>
			</Grid>
		</Box>
	);
};

export default AboutUs;
