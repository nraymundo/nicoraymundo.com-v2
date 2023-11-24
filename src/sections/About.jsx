import { Box, Divider, Text, Grid, GridItem, Link } from "@chakra-ui/react"

const introText = "Nico Raymundo is a full-stack software engineer from the San Francisco Bay Area, currently in New York City and at"
const aboutText = `I'm a software engineer with a love for crafting cutting-edge web applications. I approach my work with the goal of turning ideas
into functional realities, and revel in the challenge of architecting robust and scalable web solutions.`
const aboutText2 = `Over the years I've developed multiple web and mobile-based applications, gaining experience with multiple programming 
languages and technologies in the process. I thrive on the dynamic intersection of creativity and technology, and am fueled by a genuine enthusiasm
for solving complex problems and a commitment to delivering elegant solutions.`

// const aboutText = [
//   `I am currently working remotely as a software engineer for American Express. I was born and raised in San Jose, CA but decided to migrate south for college.
//   Post-grad, I decided to stay in southern california, setting up residence in Los Angeles. Living here has given me an opportunity to try new things, visit new unfamiliar places,
//   and cultivate relationships with incredible people from around the globe.`,
//   `At American Express, my main responsibility is creating, maintaining and enhancing various web apps built
//   with ReactJS. In addition to this, my role includes contributing to code reviews and helping build out fully automated testing for our applications.`,
//   `At LMU, I had the opportunity
//   to take part in a multitude of extra-curricular activities. As the former Vice-President of Outreach for the LMU chapter of the Association for Computing Machinery, we were tasked
//   with organizing events for the LMU CS community, with our biggest event being the first ever LMU Hackathon.`,
//   `Outside of school, I enjoy playing sports with friends, taking photos and
//   walking around the city, listening to music, working on my side projects, or going on runs in Central Park.`,
// ]

export default function About() {
  return (
    <Box w='100%' color='#DCE0D9' mt={5}>
      <Box fontSize='6xl' textStyle='primary' _selection={{ color: '#9DAE9E' }} textAlign='left'>
        {introText}
        {' '}
        <Link href='#' _hover={{ textDecoration:'none', color: '#016FD0' }} _selection={{ color: '#016FD0' }} textStyle='secondary' fontWeight={700}>
          American Express.
        </Link>
      </Box>
      <Divider borderColor={'#494949'} borderWidth={0.8} mt={5}/>
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
      <Divider borderColor={'#494949'} borderWidth={0.8} mt={5}/>
      <Box textStyle='secondary'>
        <Grid
          templateRows='repeat(2)'
          templateColumns='repeat(12, 1fr)'
          gap={5}
          mt={5}
        >
          <GridItem rowSpan={2} colSpan={2}>
            <Box textAlign={'left'}>
              <Text fontSize='md' fontWeight={700} _selection={{ color: '#9DAE9E' }}>Curiculum Vitae</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box textAlign={'left'} fontWeight={700}>
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>American Express</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={8}>
            <Grid
              templateRows='repeat(1, 1fr)'
              templateColumns='repeat(8, 1fr)'
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={6}>
                <Box textAlign={'left'}>
                  <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>Engineer II</Text>
                  <Text fontSize='md' mt={5} _selection={{ color: '#9DAE9E' }}>Engineer III</Text>
                </Box>
              </GridItem>
              <GridItem rowSpan={2} colSpan={2}>
                <Box textAlign={'left'}>
                  <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>2023 - Present</Text>
                  <Text fontSize='md' mt={5} _selection={{ color: '#9DAE9E' }}>2021 - 2023</Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={2}>
            <Box textAlign={'left'} fontWeight={600}>
              <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>Loyola Marymount University</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={8}>
            <Grid
              templateRows='repeat(1, 1fr)'
              templateColumns='repeat(8, 1fr)'
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={6}>
                <Box textAlign={'left'}>
                  <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>Bachelor of Arts, Computer Science</Text>
                </Box>
              </GridItem>
              <GridItem rowSpan={2} colSpan={2}>
                <Box textAlign={'left'}>
                  <Text fontSize='md' _selection={{ color: '#9DAE9E' }}>2017 - 2021</Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
