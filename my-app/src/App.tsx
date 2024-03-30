import * as React from "react"
import {
  ChakraProvider,
  VStack,
  theme,
} from "@chakra-ui/react"
import Header from "./components/Header";
import Content from "./Content/Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    {/* <VStack spacing={8}>
      <Content/>
    </VStack> */}
  </ChakraProvider>
)
