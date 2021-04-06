import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { Swiper, SwiperSlide }  from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Carousel() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  const slides = [
    {
      id: 1,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 2,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 3,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 4,
      src: '/swiper-europe.png',
      header: 'Europa',
      text: 'O continente mais antigo.'
    },
    {
      id: 5,
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
    color="red"
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <Flex
            w="100%"
            maxW={isWideVersion ? "1140px" : "100%"}
            position="relative"
            align="center"
            justify="center"
          >
            <Image src={isMobileVersion ? slide.src : '/swiper-europe-mobile.png'} alt={slide.header}/>
            <Box position="absolute" zIndex="1">
              <Text
                as="h1"
                color="light.50"
                fontWeight="700"
                fontSize={["1.5rem",
                "2rem",
                "3rem"]}
                textAlign="center"
                lineHeight={["1.75rem",
                "2.5rem",
                "3.5rem"]}
              >
                {slide.header}</Text>
              <Text
                as="span"
                color="light.100"
                fontWeight="700"
                fontSize={["0.875rem",
                "1.125rem",
                "1.5rem"]}
                lineHeight={["1.075rem",
                "1.155rem",
                "2.95rem"]}
              >
                {slide.text}
              </Text>
            </Box>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}