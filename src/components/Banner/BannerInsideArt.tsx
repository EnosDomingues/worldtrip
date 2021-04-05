import { Image } from "@chakra-ui/react";

export function BannerInsideArt() {
  return (
    <Image
    src="/airplane.svg"
    maxH="270"
    pos="absolute" 
    right="140"
    top="1"
    transform="rotate(5deg)"
    />
  )
}