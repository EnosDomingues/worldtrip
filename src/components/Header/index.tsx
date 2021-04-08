import { Box, Flex, Image, useBreakpointValue, Link } from "@chakra-ui/react";
/* import Link from 'next/link' */

interface HeaderProps {
  contnent?: boolean;
}

export function Header({ contnent = false }: HeaderProps) {
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
      position="relative"
    >
      {contnent && (
        <Link href="/">
          <Box
            borderLeft="2px"
            borderBottom="2px"
            w="12px"
            h="12px"
            transform="rotate(45deg)"
            position="absolute"
            left="20px"
            ml="8%"
            cursor="pointer"
          />
        </Link>
      )}
      <Image
        src="/logo.svg"
        alt="logo"
        h={isWideVersion ? "46" : "20px"}
        
      />
    </Flex>
  ) 
}