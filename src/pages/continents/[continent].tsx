import { Flex, Text, Stack, Image, useBreakpointValue, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Banner } from "../../components/Banner";
import { ContinentDescription } from "../../components/ContinentDescription";
import { ContinentInfo } from "../../components/ContinentInfo";
import { Header } from "../../components/Header";
import api from "../../services/api";

interface Continent {
  id: number;
  name: string;
  banner_mobile: string;
  description: string;
}

interface ContinentsProps {
  continent: Continent;
}

export default function Continents({ continent } : ContinentsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
      <>
        <Flex direction="column" align="center">
          <Header contnent={true}/>
          <Banner
            src={isWideVersion ? '/europe-banner-wide.png' : continent.banner_mobile}
            customMobileHeight={isWideVersion ? undefined : "150px"}
            customWideHeight={isWideVersion ? "500px" : undefined}
            customHeader={continent.name}
          />        
        </Flex>
        <Box m={isWideVersion ? "80px 140px 35px 140px": ""}>
          {isWideVersion ? (
            <>
              <Flex align="center">
                  <ContinentDescription description={continent.description} maxW="600px" maxH="211px" />
                  <ContinentInfo />
              </Flex>
              <Flex direction="column" w="100%" mt="80px" mb="40px">
                  <Text fontWeight="500" fontSize="2.25rem">Cidades +100</Text>
              </Flex>
            </>
          ):
          ( 
          <Flex direction="column" mx="4">
            <ContinentDescription description={continent.description}/>
            <ContinentInfo />
            <Text fontWeight="500" fontSize="1.5rem" w="100%" mt="32px">Cidades +100</Text>
          </Flex>
          )}
       

        <Stack spacing={isWideVersion ? '45px' : ''} align="center" direction={isWideVersion ? 'row' : 'column'} w="100%">
          <Flex mt={isWideVersion ? '' : '20px'} direction="column">
            <Image src="/londres.png" />
            <Flex
              borderLeft="2px"
              borderRight="2px"
              borderBottom="2px"
              borderColor="rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              h="110px"
              w="100%"
              mb={isWideVersion ? '' : '10px'}
              bg="light.0"
              justify="space-between"
            >
              <Flex direction="column" ml="24px">
                <Text fontWeight="600" fontSize="1.25rem" m="18px 0 12px">Londres</Text>
                <Text fontWeight="500" fontSize="1rem" color="dark.50">Reino Unido</Text>
              </Flex>
              <Flex align="center" justify="center" mr="24px">
                <Image src="/uk-flag.svg"/>
              </Flex>
            </Flex>
          </Flex>
          <Flex mt="20px" direction="column">
            <Image src="/paris.png" />
            <Flex
              borderLeft="2px"
              borderRight="2px"
              borderBottom="2px"
              borderColor="rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              h="110px"
              w="100%"
              mb={isWideVersion ? '' : '10px'}
              bg="light.0"
              justify="space-between"
            >
              <Flex direction="column" ml="24px">
                <Text fontWeight="600" fontSize="1.25rem" m="18px 0 12px">Paris</Text>
                <Text fontWeight="500" fontSize="1rem" color="dark.50">França</Text>
              </Flex>
              <Flex align="center" justify="center" mr="24px">
                <Image src="/fr-flag.svg"/>
              </Flex>
            </Flex>
          </Flex>
          <Flex mt="20px" direction="column">
            <Image src="/roma.png" />
            <Flex
              borderLeft="2px"
              borderRight="2px"
              borderBottom="2px"
              borderColor="rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              h="110px"
              w="100%"
              mb={isWideVersion ? '' : '10px'}
              bg="light.0"
              justify="space-between"
            >
              <Flex direction="column" ml="24px">
                <Text fontWeight="600" fontSize="1.25rem" m="18px 0 12px">Roma</Text>
                <Text fontWeight="500" fontSize="1rem" color="dark.50">Itália</Text>
              </Flex>
              <Flex align="center" justify="center" mr="24px">
                <Image src="/it-flag.svg"/>
              </Flex>
            </Flex>
          </Flex>
          <Flex mt="20px" direction="column">
            <Image src="/praga.png" />
            <Flex
              borderLeft="2px"
              borderRight="2px"
              borderBottom="2px"
              borderColor="rgba(255, 186, 8, 0.5)"
              borderRadius="4px"
              h="110px"
              w="100%"
              mb={isWideVersion ? '' : '10px'}
              bg="light.0"
              justify="space-between"
            >
              <Flex direction="column" ml="24px">
                <Text fontWeight="600" fontSize="1.25rem" m="18px 0 12px">Praga</Text>
                <Text fontWeight="500" fontSize="1rem" color="dark.50">República Tcheca</Text>
              </Flex>
              <Flex align="center" justify="center" mr="24px">
                <Image src="/re-flag.svg"/>
              </Flex>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  /* const { continentId } = params; */

  const { continent: continents } = await api.get(`/`)
  .then(response => response.data)

  const requestedContinent = continents[0]


  return {
    props: {
      continent: requestedContinent
    },
  }
}