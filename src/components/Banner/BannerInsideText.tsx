import { Box, Heading, Text } from "@chakra-ui/react";

export function BannerInsideText() {
  return (
    <Box maxW="450" ml="140" >
      <Heading fontWeight="500" color="light.50" lineHeight="54px">5 Continentes, <br />infinitas possibilidades.</Heading>
      <Text  fontWeight="400" color="light.100" lineHeight="28px">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
    </Box>
  )
}