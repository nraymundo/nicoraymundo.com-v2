import { Box } from "@chakra-ui/react"
import Line from "../components/Line"
import ContactLinkContainer from "../components/ContactLinkContainer";

export default function Footer() {
  return (
    <Box w='100%' mt={5} h='150px' pl={10} pr={10}>
      <Line />
      <ContactLinkContainer />
    </Box>
  )
}
