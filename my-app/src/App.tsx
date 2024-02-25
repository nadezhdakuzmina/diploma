import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  Avatar,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Header from "./Header";
import Content from "./Content/Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <VStack spacing={8}>
      <Content/>
    </VStack>
  </ChakraProvider>
)
