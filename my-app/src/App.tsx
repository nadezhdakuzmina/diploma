import * as React from 'react'
import {
  ChakraProvider,/* 
  VStack, */
  theme,
} from '@chakra-ui/react'

import Router from './routing/Router';

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Router />
    {/* <Header /> */}
    {/* <VStack spacing={8}>
      <Content/>
    </VStack> */}
  </ChakraProvider>
)
