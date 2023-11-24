import { useState } from "react";
import { Box, Flex, Text, Image, ButtonGroup, Button, SimpleGrid, Icon, IconButton } from "@chakra-ui/react"
import TopTracksHome from "../assets/toptracks-home-screen.png"; 
import TopTracksArtists from "../assets/toptracks-artists-screen.png"; 
import TopTracksTracks from "../assets/toptracks-tracks-screen.png"; 
import Pivot from "../assets/pivot.png"; 
import { motion, useScroll } from "framer-motion"
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <SimpleGrid w='100%' mt={20} pl={10} pr={10} columns={1} spacing={20} display='flex' flexDirection='column' alignItems='center' mb={20}>
      <Box w='80%' color='#DCE0D9'>
        <Flex justify='space-between' align='center' mt={2}>
          <Text textStyle='secondary' fontSize='4xl' whiteSpace='nowrap'>Top Stats</Text>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <Text textStyle='secondary' fontSize='4xl'>2023</Text>
        </Flex>
        <Flex justify='center' backgroundColor='#E9E3DD' mt={2}>
          <Image
            boxSize='250px'
            fit='cover'
            align='center top'
            src={TopTracksHome}
            alt='Top Tracks Home Screen'
            mt={2}
          />
          <Image
            boxSize='250px'
            fit='cover'
            align='center top'
            src={TopTracksArtists}
            alt='Top Tracks Artists Screen'
            mt={2}
          />
          <Image
            boxSize='250px'
            fit='cover'
            align='center top'
            src={TopTracksTracks}
            alt='Top Tracks Tracks Screen'
            mt={2}
          />
        </Flex>
        <Text textStyle='secondary' fontSize='lg' textAlign='left' fontWeight={300} mt={2}>A mobile app built using React Native and the Spotify API to display a user's top stats.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>React Native</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Spotify API</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <IconButton
            isRound={true}
            aria-label='GitHub'
            fontSize='xl'
            size='sm'
            icon={<FaGithub />}
            _hover={{ color: '#494949' }}
            colorScheme='black'
          />
        </Flex>
      </Box>
      <Box w='80%' color='#DCE0D9'>
        <Flex justify='space-between' align='center' mt={2}>
          <Text textStyle='secondary' fontSize='4xl' whiteSpace='nowrap' fontWeight={700}>Pivot</Text>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <Text textStyle='secondary' fontSize='4xl' fontWeight={700}>2021</Text>
        </Flex>
        <Text textStyle='secondary' fontSize='lg' textAlign='left' fontWeight={300}>Uses aspects of compilers and interpreters to create a custom programming language featuring a custom built compiler with semantic analysis, code generation, and code optimization. Also features an accompanying website.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Ohm</Text>
            <Text textStyle='secondary' fontSize='sm' whiteSpace='nowrap'>ReactJS</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <IconButton
            isRound={true}
            aria-label='GitHub'
            fontSize='xl'
            size='sm'
            icon={<FaGithub />}
            _hover={{ color: '#494949' }}
            colorScheme='black'
          />
        </Flex>
      </Box>
      <Box w='80%' color='#DCE0D9'>
        <Flex justify='space-between' align='center' mt={2}>
          <Text textStyle='secondary' fontSize='4xl' whiteSpace='nowrap' fontWeight={700}>NFA Simulator</Text>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <Text textStyle='secondary' fontSize='4xl' fontWeight={700}>2020</Text>
        </Flex>
        <Text textStyle='secondary' fontSize='lg' textAlign='left' fontWeight={300}>Implements fundamentals of theory of computation to simulate the construction and querying of nondeterministic finite automata.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Python</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <IconButton
            isRound={true}
            aria-label='GitHub'
            fontSize='xl'
            size='sm'
            icon={<FaGithub />}
            _hover={{ color: '#494949' }}
            colorScheme='black'
          />
        </Flex>
      </Box>
      <Box w='80%' color='#DCE0D9'>
        <Flex justify='space-between' align='center' mt={2}>
          <Text textStyle='secondary' fontSize='4xl' whiteSpace='nowrap' fontWeight={700}>Next-Word Prediction Language Model</Text>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <Text textStyle='secondary' fontSize='4xl' fontWeight={700}>2020</Text>
        </Flex>
        <Text textStyle='secondary' fontSize='lg' textAlign='left' fontWeight={300}>Uses natural language processing to develop a Feed-Forward Neural Network model that was tested on a pre-trained GPT-2 model on next word prediction.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Python</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>GPT-2</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <IconButton
            isRound={true}
            aria-label='GitHub'
            fontSize='xl'
            size='sm'
            icon={<FaGithub />}
            _hover={{ color: '#494949' }}
            colorScheme='black'
          />
        </Flex>
      </Box>
      <Box w='80%' color='#DCE0D9'>
        <Flex justify='space-between' align='center' mt={2}>
          <Text textStyle='secondary' fontSize='4xl' whiteSpace='nowrap' fontWeight={700}>Nicoraymundo.com</Text>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <Text textStyle='secondary' fontSize='4xl' fontWeight={700}>2023</Text>
        </Flex>
        <Text textStyle='secondary' fontSize='lg' textAlign='left' fontWeight={300}>A personal/portfolio website built using ReactJS.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>ReactJS</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <IconButton
            isRound={true}
            aria-label='GitHub'
            fontSize='xl'
            size='sm'
            icon={<FaGithub />}
            _hover={{ color: '#494949' }}
            colorScheme='black'
          />
        </Flex>
      </Box>
    </SimpleGrid>
  )
}