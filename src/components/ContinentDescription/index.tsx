import { Flex, Text } from "@chakra-ui/react";

interface ContinentDescriptionProps {
  description: string;
}

export function ContinentDescription({ description }: ContinentDescriptionProps) {
  return (
    <Flex my="6">
      <Text fontSize="0.875rem" align="justify" color="dark.500">{description}</Text>
    </Flex>
  )
}