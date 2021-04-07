import { Text, Flex, Heading, Image } from "@chakra-ui/react";

export function ContinentInfo() {
  return (
    <Flex w="100%" justify="space-between">
      <Flex direction="column">
        <Heading fontWeight="600" fontSize="1.5rem" color="yellow.500" lineHeight="9">
          50
        </Heading>
        <Text fontWeight="400" fontSize="1.125rem">países</Text>
      </Flex>
      <Flex direction="column">
        <Heading fontWeight="600" fontSize="1.5rem" color="yellow.500" lineHeight="9">
          60
        </Heading>
        <Text fontWeight="400" fontSize="1.125rem">línguas</Text>
      </Flex>
      <Flex direction="column">
        <Heading fontWeight="600" fontSize="1.5rem" color="yellow.500" lineHeight="9">
          24
        </Heading>
        <Flex>
          <Text fontWeight="400" fontSize="1.125rem">
            cidades +100
          </Text>
          <Image src="/info.svg" ml="5px"/>
        </Flex>
      </Flex>
    </Flex>
  )
}