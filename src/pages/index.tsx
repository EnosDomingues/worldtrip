import { Divider, Flex, Image } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'
import { TravelTypes } from '../components/TravelTypes'
import { Swiper, SwiperSlide }  from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <Flex w="100vw" minH="100vh" direction="column" align="center">
      <Header />
      <Banner />
      <TravelTypes />

      <Divider variant="solid" borderColor="dark.500" border="2px" w="90px"/>
      
      <MainContent />

      <Flex w="100%" maxW="1140px" mb="10">
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Image src="/swiper-europe.png" alt="europe"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/swiper-europe.png" alt="europe"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/swiper-europe.png" alt="europe"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/swiper-europe.png" alt="europe"/>
          </SwiperSlide>
        </Swiper>
      </Flex>

    </Flex>
  )
}
