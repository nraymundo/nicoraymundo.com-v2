import { Box } from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'
import About from './About'
import Footer from './Footer'
// import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <Box bg='black' width='100%' pt={5} pl={10} pr={10}>
      <About />
    </Box>
  )
}
