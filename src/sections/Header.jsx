import { useState } from "react";
import { Box, Text, Icon, Menu, MenuButton, Button, MenuList, MenuItem, Image, Flex } from "@chakra-ui/react"
import { FaMapPin } from "react-icons/fa";
import icon from'../assets/icon.png';
import { motion } from "framer-motion"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function Header() {
  const [currentForm, setCurrentForm] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Box w='100%' color='white' display='flex' justifyContent='center' flexDirection='row' pr={5}>
      {/* <Box pl={1} pt={1}>
        <Box boxSize='100px'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={icon}
            alt='icon'
          />
        </Box>
      </Box> */}
      <Box w='450px'>
        <Menu matchWidth={true} onOpen={() => setIsNavOpen(true)} onClose={() => setIsNavOpen(false)}>
          <MenuButton
            as={Button} w='100%' background='#0A0A0A !important' boxShadow='0px 2px 8px -4px white'
            color='white' borderRadius='5px' textDecoration='none'
            _hover={{ textDecoration: 'none', backgroundColor: '#0A0A0A' }}
            _selected={{ backgroundColor: '#0A0A0A' }}
            _focus={{ textDecoration: 'none', backgroundColor: '#0A0A0A' }}
            height='48px'
          >
            <Flex align='center' justify='space-between' fontSize='sm'>
              <Image
                boxSize='40px'
                objectFit='cover'
                src={icon}
                alt='Dan Abramov'
                _hover={{ boxSize: '60px'}}
              />
              {`/${currentForm.toUpperCase()}`}
              {isNavOpen ? (
                <motion.div
                  // initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, rotate: [0, 0, 180, 0], }}
                  transition={{ duration: 0.5 }}
                >
                  <CloseIcon
                    boxSize={6}
                  />
                </motion.div>
              ) : (
                <HamburgerIcon boxSize={6}/>
              )}
            </Flex>
          </MenuButton>
          <MenuList color='black' backgroundColor='#0A0A0A' border='0px' boxShadow='0px 0px 8px -4px white' borderRadius='5px'>
            <MenuItem
              as="a" onClick={() => setCurrentForm('About')} textAlign='center'
              fontSize='3xl' textStyle='secondary'  backgroundColor='#0A0A0A'
              color='white'
            >
              <ChakraLink as={ReactRouterLink} to='/about' width='100%' _hover={{ textDecoration: "none", color: 'grey' }}>
                About
              </ChakraLink>
            </MenuItem>
            <MenuItem
              as="a" onClick={() => setCurrentForm('Footer')}
              textAlign='center' fontSize='3xl' textStyle='secondary'
              backgroundColor='#0A0A0A' color='white'
            >
              <ChakraLink as={ReactRouterLink} to='/footer' width='100%' _hover={{ textDecoration: "none", color: 'grey' }}>
                Show Footer
              </ChakraLink>
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <ChakraLink as={ReactRouterLink} to='/projects'>
          projects
        </ChakraLink> */}
      </Box>
      {/* <Box display='flex' flexDirection='column' alignItems='flex-end' textStyle='secondary'>
        <Box>
          <Text fontSize='5xl' fontWeight={800}>Nico Raymundo</Text>
        </Box>
        <Box display='flex' flexDirection='row' alignItems='center' color='#adb5bd'>
          <Text fontSize='md' fontWeight={400} pr={2}>New York City</Text>
          <Icon as={FaMapPin}/>
        </Box>
      </Box> */}
    </Box>
  )
}
