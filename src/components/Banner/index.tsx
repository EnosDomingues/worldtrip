import { Flex, Image } from "@chakra-ui/react";
import { BannerInsideArt } from "./BannerInsideArt";
import { BannerInsideText } from "./BannerInsideText";


export function Banner() {
  return (
    <Flex w="100%" h="335" bg="dark.1000" pos="relative" justify="center">
      <Image src="/banner.png" w="100%" minW="1440px" />
      <Flex pos="absolute" w="100%" maxW="1440px" h="100%" direction="column">
        <Flex align="center" pos="relative" m="auto 0">
          <BannerInsideText />
          <BannerInsideArt />
        </Flex>
      </Flex>
    </Flex>
  )
}