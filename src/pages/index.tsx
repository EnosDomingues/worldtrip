import { Divider, Flex, Image, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'

export default function Home() {

  return (
    <Flex w="100%" minH="100vh" direction="column" align="center">
      <Header />
      <Banner />
      <TravelTypes />

      <Divider variant="solid" borderColor="dark.500" border="2px" w="90px"/>

      <MainContent />
      <Flex w="100%" maxW="1140px" mb="10" position="relative" align="center" justify="center">
        <Carousel />
      </Flex>

    </Flex>
  )
}
