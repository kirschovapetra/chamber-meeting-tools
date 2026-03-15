'use client';
import React, { useState } from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import MenuLinks from '@/components/ui/menu-links';


const NavigationMenu = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={4}
      {...props}
    >
      <Image src='/logo.png' alt='Logo' height='40px' />
      <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
        {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </Box>
      <MenuLinks isMobile={false} />
    </Flex>
  );
};

export default NavigationMenu;
