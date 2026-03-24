'use client';
import React, { useState } from 'react';
import { Box, Flex, Image, HStack, Link, Heading } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ColorModeButton } from '@/components/ui/color-mode';
import { usePathname } from 'next/navigation';

const NavigationMenu = (props: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const pathname = usePathname();

	const links = [
		{ name: 'Home', href: '/', selected: pathname === '/' },
		{
			name: 'Ah Counter',
			href: '/ahcounter',
			selected: pathname === '/ahcounter',
		},
		{ name: 'Timer', href: '/timer', selected: pathname === '/timer' },
		{
			name: 'Grammarian',
			href: '/grammarian',
			selected: pathname === '/grammarian',
		},
	];
	return (
		<Flex as='nav' align='center' justify='space-between' wrap='wrap' w='100%' mb={2} p={4} {...props}>
			<Link href={'/'}>
				<Image src='/logo.png' alt='Logo' height='45px' />
				<Heading marginLeft={2} size='lg' alignSelf={'left'}>
					Chamber Meeting Tools
				</Heading>
			</Link>

			<HStack gap={4} align='center'>
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						fontWeight='medium'
						_hover={{
							textDecoration: 'underline',
						}}
						aria-current={link.selected ? 'page' : undefined}
						_currentPage={{ color: 'teal.300' }}
					>
						{link.name}
					</Link>
				))}
				<ColorModeButton />
			</HStack>
		</Flex>
	);
};

export default NavigationMenu;
