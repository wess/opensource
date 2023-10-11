'use client';

import React from 'react';

import {
  HStack,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

import Nav from '../nav';

const Layout = ({children}) => (
  <VStack w='full' h='100%' p={0} m={0} justify='flex-start' align='flex-start' gap={0}>
    <Nav/>
    
    <HStack w='100%' h='100%' bg='#f0f0f0' p={0} m={0}>
      <VStack h='100%' bg='#fff'>
        <Box w='200px' h='100%'>
          <Text>Left</Text>
        </Box>
      </VStack>

      <VStack h='100%'>
        <Box w='full' h='100%'>
          {children}
        </Box>
      </VStack>
    </HStack>
  </VStack>
);

export default Layout;