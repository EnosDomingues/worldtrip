import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface ITravelTypeProps {
  type: string;
  src: string;
}

export function TravelType({type, src}: ITravelTypeProps) {
  const isMobileScreen = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <>
      {isMobileScreen !== undefined && (
        <Flex direction={isMobileScreen ? 'row' : 'column'} align="center">
          <Image
            src={isMobileScreen ? '/ellipse.svg' : src}
            alt={type}
            w={isMobileScreen ? '8px' : '85px'}
            h={isMobileScreen ? '50px' : '85px'}
            m="0 auto"
          />
          <Text
            fontWeight="600"
            lineHeight="9"
            textAlign="center"
            fontSize={["1.125rem", "1.25rem", "1.25rem"]}
            p="0 8px"
          >
            {type}
          </Text>
        </Flex>
      )}
    </>
  )
}