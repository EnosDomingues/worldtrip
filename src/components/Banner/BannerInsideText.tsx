import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect } from "react";

interface WideVersionProps {
  margin: string;
  width: string;
}

export function BannerInsideText() {

  const isWideVersion: WideVersionProps = useBreakpointValue({
    base: {
      margin: '0 16',
      width: '100%'
    },
    lg: {
      margin: '0 0 0 110px',
      width: '450'
    },
  })

  return (
    <>
    {!!isWideVersion && (
          <Flex
          maxW={isWideVersion.width}
          m={isWideVersion.margin}
          direction="column"
          align="center"
          justify="center"
          w={isWideVersion.width}
          >
            <Box>
              <Heading
                fontWeight="500"
                color="light.50"
                lineHeight={["2.25rem", "2.625rem", "3rem", "3.375rem"]}
                fontSize={["1.5rem", "1.75rem", "2rem", "2.25rem"]}
              >
                5 Continentes, <br />infinitas possibilidades.
              </Heading>
              <Text
                fontWeight="400"
                color="light.100"
                lineHeight={["1.5rem", "1.75rem"]}
                fontSize={["0.875rem", "1rem", "1.25rem"]}
              >
                Chegou a hora de tirar do papel a viagem que {isWideVersion.width === '100%' && (<br />)}você sempre sonhou.
              </Text>
            </Box>
        </Flex>
    )}
    </>
  )
}