import { useState } from "react";
import { Box, Text, Icon, Menu, MenuButton, Button, MenuList, MenuItem, Image, Flex } from "@chakra-ui/react"
import icon from'../assets/icon.png';
import { motion } from "framer-motion"
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Marquee from "react-fast-marquee";
import { MdCopyright } from "react-icons/md";
import Resume from "../assets/resume.pdf";

export default function Header() {
  const [currentForm, setCurrentForm] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Box w='100%' color='white' display='flex' justifyContent='center' flexDirection='row' pr={5}>
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
          <MenuList color='black' backgroundColor='#0A0A0A' border='0px' boxShadow='0px 0px 8px -4px white' borderRadius='5px' p={0}>
            <MenuItem
              as="a" onClick={() => setCurrentForm('Home')} textAlign='center'
              fontSize='3xl' textStyle='secondary'  backgroundColor='#0A0A0A'
              color='white'
            >
              <ChakraLink as={ReactRouterLink} to='/' width='100%' _hover={{ textDecoration: "none", color: '#494949' }}>
                Home
              </ChakraLink>
            </MenuItem>
            <MenuItem
              as="a" onClick={() => setCurrentForm('Projects')}
              textAlign='center' fontSize='3xl' textStyle='secondary'
              backgroundColor='#0A0A0A' color='white'
            >
              <ChakraLink as={ReactRouterLink} to='/projects' width='100%' _hover={{ textDecoration: "none", color: '#494949' }}>
                Projects
              </ChakraLink>
            </MenuItem>
            <MenuItem
              as="a" textAlign='center' fontSize='3xl' textStyle='secondary'
              backgroundColor='#0A0A0A' color='white'
            >
              <ChakraLink as={ReactRouterLink} to={Resume} target="newTab" width='100%' _hover={{ textDecoration: "none", color: '#494949' }}>
                Resumé
              </ChakraLink>
            </MenuItem>
            <MenuItem
              as="a" onClick={() => setCurrentForm('Photo')}
              textAlign='center' fontSize='3xl' textStyle='secondary'
              backgroundColor='#0A0A0A' color='white' isDisabled={true}
            >
              <Text textAlign='center' width='100%'>
                Photo
                <sup style={{ fontSize: '20px' }}>(WIP)</sup>
              </Text>
            </MenuItem>
            <MenuItem as="a" textStyle='secondary' backgroundColor='#0A0A0A' color='white' pl={0} pr={0}>
              <Text
                color='#797979' fontSize='15px' width='30%' borderTop='1px solid #494949' textAlign='center'
                borderBottom='1px solid #494949' borderRight='1px solid #494949' pt={2} pb={2}
              >
                Now Playing
              </Text>
              <Marquee
                style={{
                  borderTop: '1px solid #494949',
                  borderBottom: '1px solid #494949',
                }}
                speed={20}
              >
                <Text color='white' fontSize='15px' pt={2} pb={2}>Dermot (see yourself in my eyes)</Text>
              </Marquee>
            </MenuItem>
            <MenuItem as="a" textStyle='secondary' backgroundColor='#0A0A0A' color='white' p={0} pl={2}>
              <Flex justify='center' align='center' color='#797979' pb={1}>
                <Icon as={MdCopyright} fontSize='11px' />
                <Text color='#797979' fontSize='12px' pl={1}>2023 NICO RAYMUNDO</Text>
              </Flex>
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
