import { Text, GridItem, Icon, Flex } from "@chakra-ui/react"
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion"

export default function ContactLink({name, url}) {
  return (
    <GridItem colSpan={[6, 2]}>
      <Flex as="a" href={url} target='_blank' rel="noopener noreferrer" color='#252627' textStyle='secondary' align='center' _hover={{ color: '#858682' }} width=''>
        <Text _hover={{ textDecoration: 'none', color: '#858682' }} _selection={{ color: '#9DAE9E' }}>
          {name}
        </Text>
        <motion.button
          whileHover={{
            scale: 1.5,
          }}
        >
          <Icon as={MdOutlineArrowOutward} pl={1}/>
        </motion.button>
      </Flex>
    </GridItem>
  )
}