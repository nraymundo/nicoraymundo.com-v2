import './App.css'
import { Box, Divider } from "@chakra-ui/react"
import Header from './sections/Header'
import Footer from './sections/Footer'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box bg='#edede9' width='100%' pt={5}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default App
