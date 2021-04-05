import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      bg="light.50"
      h="100"
      align="center"
      justify="center"
    >
      <Image src="/logo.svg" alt="logo" h="46"/>
    </Flex>
  ) 
}