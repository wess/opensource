import React from 'react';

import {
  ChakraProvider,
  ColorModeScript,  
} from '@chakra-ui/react';

import {
  Global,
  css,
} from '@emotion/react';

import {Theme} from '../theme';

export const cssFixes = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;
const Provider = ({children}) => (
  <>
    <ColorModeScript initialColorMode={Theme.config.initialColorMode}/>
    <ChakraProvider theme={Theme}>
      <Global styles={cssFixes}/>
      {children}
    </ChakraProvider>
  </>
);

export default Provider;