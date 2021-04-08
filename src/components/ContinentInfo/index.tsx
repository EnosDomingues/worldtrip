import { Text, Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

export function ContinentInfo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex w="100%" maxW="490px" justify="space-between" ml={isWideVersion ? "70px" : ""}>
      <Flex direction="column">
        <Heading fontWeight="600" fontSize={isWideVersion ? "3rem" : "1.5rem"} color="yellow.500" lineHeight="9">
          50
        </Heading>
        <Text fontWeight={isWideVersion ? "600" : "400"} fontSize={isWideVersion ? "1.5rem" : "1.125rem"}>países</Text>
      </Flex>
      <Flex direction="column">
        <Heading fontWeight="600" fontSize={isWideVersion ? "3rem" : "1.5rem"} color="yellow.500" lineHeight="9">
          60
        </Heading>
        <Text fontWeight={isWideVersion ? "600" : "400"} fontSize={isWideVersion ? "1.5rem" : "1.125rem"}>línguas</Text>
      </Flex>
      <Flex direction="column">
        <Heading fontWeight="600" fontSize={isWideVersion ? "3rem" : "1.5rem"} color="yellow.500" lineHeight="9">
          24
        </Heading>
        <Flex>
          <Text fontWeight={isWideVersion ? "600" : "400"} fontSize={isWideVersion ? "1.5rem" : "1.125rem"}>
            cidades +100
          </Text>
          <Image src="/info.svg" ml="5px"/>
        </Flex>
      </Flex>
    </Flex>
  )
}