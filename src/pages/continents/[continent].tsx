import { Flex } from "@chakra-ui/layout";
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
  return (
    <Flex w="100%" minH="100vh" direction="column" align="center">
      <Header />
      <Banner
        src={continent.banner_mobile}
        customMobileHeight="150px"
        customHeader={continent.name}
      />
      <Flex direction="column" mx="4">
        <ContinentDescription description={continent.description}/>
        <ContinentInfo />
      </Flex>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { continent } = params;

  const requestedContinent: Continent = await api.get(`/continent/${continent}`)
  .then(response => response.data)

  console.log(requestedContinent)

  return {
    props: {
      continent: requestedContinent
    },
  }
}