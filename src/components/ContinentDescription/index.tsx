import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface ContinentDescriptionProps {
  description: string;
  maxW?: string;
  maxH?: string;
}

export function ContinentDescription({ description, maxW, maxH }: ContinentDescriptionProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex my={isWideVersion ? "" : "6"}>
      <Text fontSize={isWideVersion ? "1.5rem" : "0.875rem"} align="justify" color="dark.500" 
      w={maxW ? maxW : "auto"} 
      h={maxH ? maxH : ""}
      >
        {description}
      </Text>
    </Flex>
  )
}