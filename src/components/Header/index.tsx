import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      bg="light.50"
      h={isWideVersion ? "100" : "50px"}
      align="center"
      justify="center"
    >
      <Image
        src="/logo.svg"
        alt="logo"
        h={isWideVersion ? "46" : "20px"} 
      />
    </Flex>
  ) 
}