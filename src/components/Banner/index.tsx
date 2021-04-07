import { Flex, Image, useBreakpointValue, Text } from "@chakra-ui/react";
import { BannerInsideArt } from "./BannerInsideArt";
import { BannerInsideText } from "./BannerInsideText";

interface BannerProps {
  src?: string;
  customMobileHeight?: string;
  customHeader?: string
}


export function Banner({ src, customMobileHeight, customHeader }: BannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      h={ isWideVersion ?  "335"
       : customMobileHeight ? customMobileHeight : "163px"}
      bg="dark.1000"
      pos="relative"
      justify="center"
    >
      <Image src={src ? src : "/banner.png"} w="100%"/>
      <Flex pos="absolute" w="100%" maxW="1440px" h="100%" direction="column">
        <Flex align="center" pos="relative" m="auto 0">
          {customHeader ? 
          (
            <Text
            fontWeight="600"
            color="light.50"
            lineHeight={["2.25rem", "2.625rem", "3rem", "3.375rem"]}
            fontSize={["1.5rem", "1.75rem", "2rem", "2.25rem"]}
            w="100%"
            textAlign="center"
            >
              {customHeader}
            </Text>
          ):
          (
            <>
              <BannerInsideText />
              {isWideVersion && (<BannerInsideArt />)}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}