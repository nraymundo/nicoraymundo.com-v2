import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'
import '@fontsource-variable/inter';
import '@fontsource-variable/texturina';
import '@fontsource-variable/libre-franklin';
import Footer from './sections/Footer'
import Home from './sections/Home'
import { Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <Home />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="projects" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      {/* <App /> */}
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
