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
import NavigationMenu from "../components/NavigationMenu";

export default function Header() {
  const [currentForm, setCurrentForm] = useState('Home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Box w='100%' color='white' display='flex' justifyContent='center' flexDirection='row' pr={5}>
      <NavigationMenu />
    </Box>
  )
}
