import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Fragment } from "react";
import { TravelType } from "./TravelType";

export function TravelTypes() {
  const isMobileScreen = useBreakpointValue({
    base: true,
    md: false
  })

  const travelTypes = [
    {src: '/cocktail.svg', type: 'vida noturna'},
    {src: '/surf.svg', type: 'praia'},
    {src: '/building.svg', type: 'moderno'},
    {src: '/museum.svg', type: 'clássico'},
  ]


  return (
    <>
    {isMobileScreen !== undefined && (
      <>
      {isMobileScreen ? (
        <Flex
          maxW="1160px"
          w="100%"
          h="36"
          my={isMobileScreen ? "8" : "24"}
          align="center">
            <Flex justify="space-between" width="100%" m="0 16px" direction="column" align="center">
              <Flex w="100%" justify="space-between" p="0 34px">
                <TravelType src="/earth.svg" type="vida noturna"/>
                <TravelType src="/earth.svg" type="praia"/>
              </Flex>
              <Flex w="100%" justify="space-between" p="0 34px">
                <TravelType src="/earth.svg" type="moderno"/>
                <TravelType src="/earth.svg" type="clássico"/>
              </Flex>
              <Flex w="100%" justify="center" p="0 34px">
                <TravelType src="/earth.svg" type="e mais..."/>
              </Flex>
            </Flex>
        </Flex>
      ):
      (
        <Flex
        maxW="1160px"
        w="100%"
        h="36"
        my="24"
        align="center">
          <Flex justify="space-between" width="100%" m="0 16px">
            {travelTypes.map((type, index) => (
            <Fragment key={index} >
              <TravelType src={type.src} type={type.type} />
            </Fragment>
            ))}
            <TravelType src="/earth.svg" type="e mais..."/>
          </Flex>
        </Flex>
      )}
      </>
    )}
    </>
  )
}