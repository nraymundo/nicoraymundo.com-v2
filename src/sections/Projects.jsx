import { useState } from "react";
import { Box, Flex, Text, ButtonGroup, Button, SimpleGrid, Icon } from "@chakra-ui/react"
import Pivot from "../assets/pivot.png"; 
import { motion, useScroll } from "framer-motion"
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <SimpleGrid w='100%' mt={20} pl={10} pr={10} columns={1} spacing={20} display='flex' flexDirection='column' alignItems='center' mb={20}>
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
        <Text textStyle='secondary' fontSize='xl' textAlign='left' fontWeight={300}>Uses aspects of compilers and interpreters to create a custom programming language featuring a custom built compiler with semantic analysis, code generation, and code optimization. Also features an accompanying website.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>Ohm</Text>
            <Text textStyle='secondary' fontSize='md' whiteSpace='nowrap'>ReactJS</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15 }}
            transition={{
              duration: 1,
            }}
          />
          <Icon as={FaGithub} fontSize='xl' _hover={{ color: '#494949' }}/>
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
        <Text textStyle='secondary' fontSize='xl' textAlign='left' fontWeight={300}>Implements fundamentals of theory of computation to simulate the construction and querying of nondeterministic finite automata.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>Python</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <Icon as={FaGithub} fontSize='xl' _hover={{ color: '#494949' }}/>
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
        <Text textStyle='secondary' fontSize='xl' textAlign='left' fontWeight={300}>Uses natural language processing to develop a Feed-Forward Neural Network model that was tested on a pre-trained GPT-2 model on next word prediction.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>Python</Text>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>GPT-2</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <Icon as={FaGithub} fontSize='xl' _hover={{ color: '#494949' }}/>
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
        <Text textStyle='secondary' fontSize='xl' textAlign='left' fontWeight={300}>A personal/portfolio website built using ReactJS.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>ReactJS</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <Icon as={FaGithub} fontSize='xl' _hover={{ color: '#494949' }}/>
        </Flex>
      </Box>
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
        <Text textStyle='secondary' fontSize='xl' textAlign='left' fontWeight={300}>A mobile app built using React Native and the Spotify API to display a user's top stats.</Text>
        <Flex justify='space-between' align='center' mt={2}>
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>React Native</Text>
            <Text textStyle='secondary' fontSize='md' mr={2} whiteSpace='nowrap'>Spotify API</Text>
          </Flex>
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: '100%' }}
            style={{ height: 0.8, backgroundColor: '#494949', marginLeft: 15, marginRight: 15  }}
            transition={{
              duration: 1,
            }}
          />
          <Icon as={FaGithub} fontSize='xl' _hover={{ color: '#494949' }}/>
        </Flex>
      </Box>
    </SimpleGrid>
  )
}