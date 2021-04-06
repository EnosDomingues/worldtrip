import { Flex, Heading } from "@chakra-ui/react";

export function MainContent() {
  return (
    <Flex direction="column" my="16">
      <Heading textAlign="center" fontSize={["1.25rem", "1.75rem", "2.25rem"]}>
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
    </Flex>
  )
}