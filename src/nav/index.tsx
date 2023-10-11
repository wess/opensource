import React from 'react';

import {
  HStack,
  VStack,
  Box,
  Text,
  Heading,
  ButtonGroup,
  Spacer,
  Button,
} from '@chakra-ui/react';

import {Link} from '@chakra-ui/next-js';

const Nav = (props) => {

  return (
    <HStack w='100%' py={1} px={4} borderBottom='1px solid rgba(0, 0, 0, 0.1)'>
      <Heading as={Link} href='/' flex={1} size='md'>Logo</Heading>
      
      <Spacer/>
      
        <Button as={Link} size='sm' colorScheme='green' variant='link' href="/login">Sign In</Button>
        <Button as={Link} size='sm' colorScheme='green' variant='link' href="/register">Sign Up</Button>
    </HStack>
  );
}

export default Nav;