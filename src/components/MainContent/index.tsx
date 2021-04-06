import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

export function MainContent() {
  const isMobileScreen = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex direction="column" m={isMobileScreen ? "24px 0 20px 0" : "16"}>
      <Heading textAlign="center" fontSize={["1.25rem", "1.75rem", "2.25rem"]}>
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
    </Flex>
  )
}