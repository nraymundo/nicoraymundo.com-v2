import { Box, Divider, Text, Grid, GridItem, Link } from "@chakra-ui/react"

const aboutText = "Nico Raymundo is a full-stack software developer from the San Francisco Bay Area, currently in New York City and at"

export default function About() {
  return (
    <Box w='100%' color='#DCE0D9' mt={5}>
      <Box fontSize='6xl' textStyle='primary' _selection={{ color: '#9DAE9E' }} textAlign='left'>
        {aboutText}
        {' '}
        <Link href='#' _hover={{ textDecoration:'none', color: '#016FD0' }} textStyle='secondary' fontWeight={700}>
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
          <GridItem rowSpan={2} colSpan={2}>
            <Box textAlign={'left'}>
              <Text fontSize='md' fontWeight={700}>Curiculum Vitae</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box textAlign={'left'} fontWeight={600}>
              <Text fontSize='md'>American Express</Text>
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
                  <Text fontSize='md'>Engineer II</Text>
                  <Text fontSize='md' mt={5}>Engineer III</Text>
                </Box>
              </GridItem>
              <GridItem rowSpan={2} colSpan={2}>
                <Box textAlign={'left'}>
                  <Text fontSize='md'>2023 - Present</Text>
                  <Text fontSize='md' mt={5}>2021 - 2023</Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={2}>
            <Box textAlign={'left'} fontWeight={600}>
              <Text fontSize='md'>Loyola Marymount University</Text>
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
                  <Text fontSize='md'>Bachelor of Arts, Computer Science</Text>
                </Box>
              </GridItem>
              <GridItem rowSpan={2} colSpan={2}>
                <Box textAlign={'left'}>
                  <Text fontSize='md'>2017 - 2021</Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
