import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Carousel() {
  const slides = [
    {
      id: 1,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 1,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 1,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 1,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 1,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
  ]

  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    width={1140}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <Flex w="100%" maxW="1140px" mb="10" position="relative" align="center" justify="center">
            <Image src={slide.src} alt={slide.header}/>
            <Box position="absolute" zIndex="1">
              <Text as="h1" color="light.50" fontWeight="700" fontSize="3rem" textAlign="center" lineHeight="72px">{slide.header}</Text>
              <Text as="span" color="light.100" fontWeight="700" fontSize="1.5rem" lineHeight="36px">{slide.text}</Text>
            </Box>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}