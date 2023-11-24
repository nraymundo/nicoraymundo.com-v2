import { useState, useEffect } from "react";
import { Box, Divider, Text, Grid, GridItem, Link } from "@chakra-ui/react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

// const introText = "Nico Raymundo is a full-stack software engineer from the San Francisco Bay Area, currently in New York City and at"
const aboutText = `I'm a software engineer with a love for crafting cutting-edge web applications. I approach my work with the goal of turning ideas
into functional realities, and revel in the challenge of architecting robust and scalable web solutions.`
const aboutText2 = `Over the years I've developed multiple web and mobile-based applications, gaining experience with multiple programming 
languages and technologies in the process. I thrive on the dynamic intersection of creativity and technology, and am fueled by a genuine enthusiasm
for solving complex problems and a commitment to delivering elegant solutions.`

function AnimatedText({ delay }) {
  const textIndex = useMotionValue(0);
  const introText = "Nico Raymundo is a full-stack software engineer from the San Francisco Bay Area, currently in New York City and at American Express."

  const baseText = introText;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 132, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeIn",
      onUpdate() {
        textIndex.set(0);
        updatedThisRound.set(true);
      }
    });
  }, []);

  return (
    <motion.span className="inline" whileFocus={{ color: '#016FD0' }}>
      {displayText}
    </motion.span>
  );
}

export default function About() {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box w='100%' color='#DCE0D9' mt={5}>
      <Box fontSize='6xl' textStyle='primary' _selection={{ color: '#9DAE9E' }} textAlign='left'>
        {/* {introText}
        {' '}
        <Link href='#' _hover={{ textDecoration:'none', color: '#016FD0' }} _selection={{ color: '#016FD0' }} textStyle='secondary' fontWeight={700}>
          American Express.
        </Link> */}
        <motion.span
          variants={itemVariants}
          className=""
        >
          <AnimatedText delay={0} />
        </motion.span>
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
