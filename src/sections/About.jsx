import { Box, Text, Grid, GridItem } from "@chakra-ui/react"
import AnimatedText from "../components/AnimatedText"
import Line from "../components/Line"

const introText = "Nico Raymundo is a full-stack software engineer from the San Francisco Bay Area, currently in New York City and at American Express."
const aboutText = `I'm a software engineer with a love for crafting cutting-edge web applications. I approach my work with the goal of turning ideas
into functional realities, and revel in the challenge of architecting robust and scalable web solutions.`
const aboutText2 = `Over the years I've developed multiple web and mobile-based applications, gaining experience with multiple programming 
languages and technologies in the process. I thrive on the dynamic intersection of creativity and technology, and am fueled by a genuine enthusiasm
for solving complex problems and a commitment to delivering elegant solutions.`

function CVGridHeader({rows, text}) {
  return (
    <GridItem rowSpan={rows} colSpan={2}>
      <Box textAlign={'left'}>
        <Text fontSize='md' fontWeight={700} _selection={{ color: '#9DAE9E' }}>{text}</Text>
      </Box>
    </GridItem>
  )
}

function CVGridInfo({positions, dates}) {
  return (
    <GridItem colSpan={8}>
      <Grid
        templateRows='repeat(1, 1fr)'
        templateColumns='repeat(8, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={6}>
          {positions}
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          {dates}
        </GridItem>
      </Grid>
    </GridItem>
  )
}

export default function About() {
  return (
    <Box w='100%' color='#DCE0D9' mt={5} bg='black' pt={5} pl={10} pr={10}>
      <Box fontSize='6xl' textStyle='primary' _selection={{ color: '#9DAE9E' }} textAlign='left'>
        {/* {introText}
        {' '}
        <Link href='#' _hover={{ textDecoration:'none', color: '#016FD0' }} _selection={{ color: '#016FD0' }} textStyle='secondary' fontWeight={700}>
          American Express.
        </Link> */}
        <AnimatedText delay={0} text={introText} />
      </Box>
      <Line />
      <Box textStyle='secondary'>
        <Grid
          templateRows='repeat(2)'
          templateColumns='repeat(12, 1fr)'
          gap={5}
          mt={5}
        >
          <GridItem colSpan={4}>
            <Box textAlign={'left'}>
              <Text fontSize='md' fontWeight={500} _selection={{ color: '#9DAE9E' }}>About</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={5}>
            <Box textAlign={'left'}>
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>{aboutText}</Text>
              <br />
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>{aboutText2}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Line />
      <Box textStyle='secondary'>
        <Grid
          templateRows='repeat(2)'
          templateColumns='repeat(12, 1fr)'
          gap={5}
          mt={5}
        >
          <CVGridHeader rows={2} text='Curiculum Vitae' />
          <CVGridHeader rows={1} text='American Express' />
          <CVGridInfo
            positions={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>Engineer II</Text>
                <Text fontSize='md' mt={5} _selection={{ color: '#9DAE9E' }}>Engineer III</Text>
              </Box>
            )}
            dates={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>2023 - Present</Text>
                <Text fontSize='md' mt={5} _selection={{ color: '#9DAE9E' }}>2021 - 2023</Text>
              </Box>
            )}
          />
          <CVGridHeader rows={1} text='Loyola Marymount University' />
          <CVGridInfo
            positions={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>Bachelor of Arts, Computer Science</Text>
              </Box>
            )}
            dates={(
              <Box textAlign={'left'}>
                <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>2017 - 2021</Text>
              </Box>
            )}
          />
        </Grid>
      </Box>
    </Box>
  )
}
