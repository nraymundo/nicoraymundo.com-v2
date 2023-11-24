import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import '@fontsource-variable/inter';
import '@fontsource-variable/texturina';
import '@fontsource-variable/libre-franklin';
import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import Footer from './sections/Footer'
import Home from './sections/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
