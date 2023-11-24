import './App.css'
import { Box } from "@chakra-ui/react"
import Header from './sections/Header'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box bg='black' width='100%' pt={5}>
      <Header />
      <Outlet />
    </Box>
  )
}

export default App
