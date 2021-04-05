import { Flex } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  return (
    <Flex maxW="1160px" w="100%" h="36" my="24" align="center">
      <Flex justify="space-between" width="100%">
        <TravelType src="/cocktail.svg" type="vida noturna"/>
        <TravelType src="/surf.svg" type="praia"/>
        <TravelType src="/building.svg" type="moderno"/>
        <TravelType src="/museum.svg" type="clássico"/>
        <TravelType src="/earth.svg" type="e mais..."/>
      </Flex>
    </Flex>
  )
}