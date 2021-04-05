import { Flex, Image, Text } from "@chakra-ui/react";

interface ITravelTypeProps {
  type: string;
  src: string;
}

export function TravelType({type, src}: ITravelTypeProps) {
  return (
    <Flex direction="column" >
      <Image src={src} alt="cocktail" w="85px" h="85px" m="0 auto"/>
      <Text fontWeight="600" lineHeight="9" textAlign="center">{type}</Text>
    </Flex>
  )
}