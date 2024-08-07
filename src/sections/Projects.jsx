import { Flex, Text, Image, SimpleGrid } from "@chakra-ui/react"
import TopTracksHome from "../assets/toptracks-home-screen.png"; 
import TopTracksArtists from "../assets/toptracks-artists-screen.png"; 
import TopTracksTracks from "../assets/toptracks-tracks-screen.png"; 
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <SimpleGrid color='#252627' w='100%' mt={20} pl={[5, 10]} pr={[5, 10]} columns={1} spacing={20} display='flex' flexDirection='column' alignItems='center' mb={20}>
      <ProjectCard
        name='Spotify Stats'
        year='2023'
        description="A mobile app built using React Native and the Spotify API to display a user's top stats."
        tech={(
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>React Native</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Spotify API</Text>
          </Flex>
        )}
        image={(
          <Flex justify='center' backgroundColor='#E9E3DD' mt={2} mb={2}>
            <Image
              boxSize={[150, 250]}
              fit='cover'
              align='center top'
              src={TopTracksHome}
              alt='Top Tracks Home Screen'
              mt={2}
            />
            <Image
              boxSize={[150, 250]}
              fit='cover'
              align='center top'
              src={TopTracksArtists}
              alt='Top Tracks Artists Screen'
              mt={2}
            />
            <Image
              boxSize={[150, 250]}
              fit='cover'
              align='center top'
              src={TopTracksTracks}
              alt='Top Tracks Tracks Screen'
              mt={2}
            />
          </Flex>
        )}
        githubUrl='https://github.com/nraymundo/spotify-test'
      />
      <ProjectCard
        name='Nicoraymundo.com'
        year='2023'
        description='A personal portfolio/website built using ReactJS, Chakra UI, and Framer.'
        tech={(
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>ReactJS</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Chakra UI</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Framer Motion</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Vercel</Text>
          </Flex>
        )}
        githubUrl='https://github.com/nraymundo/nicoraymundo.com-v2'
      />
      <ProjectCard
        name='Pivot'
        year='2021'
        description='Uses aspects of compilers and interpreters to create a custom programming language featuring a custom built compiler with semantic analysis, code generation, and code optimization. Also features an accompanying website.'
        tech={(
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>JavaScript</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Ohm</Text>
            <Text textStyle='secondary' fontSize='sm' whiteSpace='nowrap'>ReactJS</Text>
          </Flex>
        )}
        githubUrl='https://github.com/wdibi/Pivot'
      />
      <ProjectCard
        name='NFA Simulator'
        year='2020'
        description='Uses aspects of compilers and interpreters to create a custom programming language featuring a custom built compiler with semantic analysis, code generation, and code optimization. Also features an accompanying website.'
        tech={(
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Python</Text>
          </Flex>
        )}
        githubUrl='https://github.com/nraymundo/cmsi385'
      />
      <ProjectCard
        name='Next-Word Prediction Model'
        year='2020'
        description='Uses natural language processing to develop a Feed-Forward Neural Network model that was tested on a pre-trained GPT-2 model on next word prediction.'
        tech={(
          <Flex direction='row'>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>Python</Text>
            <Text textStyle='secondary' fontSize='sm' mr={2} whiteSpace='nowrap'>GPT-2</Text>
          </Flex>
        )}
        githubUrl='https://github.com/lmu-mandy/project-jnw'
      />
    </SimpleGrid>
  )
}