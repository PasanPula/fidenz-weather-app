import {
  Center,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import WeatherCard from "../../components/WeatherCard";
import cityList from "../../configs/cities.json";
import { useQuery } from "@tanstack/react-query";
import { getCityWeather } from "../../api/weatherApi";
import weatherFilter from "../../util/jsonWeatherFilter";

const Home = () => {
  let cities = cityList.List.map((city) => city.CityCode).join(",");
  const cardColors = [
    "cardBlue",
    "cardOrange",
    "cardGreen",
    "cardPurple",
    "cardRed",
  ];
  let colorIndex = 0;
  
  const {
    isLoading,
    isError,
    error,
    data: cityWeather,
  } = useQuery({
    queryKey: ["cityWeatherKey"],
    queryFn: () => getCityWeather(cities),
    select: weatherFilter,
    retry: 3,
    staleTime: 300000, 
  });

  return (
    <Box as="main">
      <Center as="section">
        <InputGroup variant="filled" size="md" width={{ base: '60%', md: '50%', lg: '40%' }}>
          <Input
            height={{ base: '2.5rem', md: '3rem', lg: '3rem' }}
            fontSize={"sm"}
            fontWeight={400}
            variant="filled"
            placeholder="Enter a City"
            bg={"bgBlack"}
            color={"whiteAlpha.700"}
            focusBorderColor={"bgBlack"}
            _hover={{ backgroundColor: "bgBlack" }}
            _focus={{ backgroundColor: "bgBlack" }}
          />
          <InputRightElement width={{ base: '5rem', md: '7rem', lg: '8rem' }} height={{ base: '2.5rem', md: '3rem', lg: '3rem' }}>
            <Button
              fontWeight={400}
              fontSize={"sm"}
              h={"100%"}
              w={"100%"}
              bg={"cardPurple"}
              color={"white"}
              _hover={{ backgroundColor: "cardPurple" }}
              _focus={{ backgroundColor: "cardPurple" }}
            >
              Add City
            </Button>
          </InputRightElement>
        </InputGroup>
      </Center>
      <Center as="section" mt={20} pb={40}>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : isError ? (
          <Text fontSize={"4xl"}>{error.message}</Text>
        ) : (
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px" width={{ base: '80%', md: '60%', lg: '60%' }}>
            {cityWeather.map((city, index) => {
              if (colorIndex >= cardColors.length) {
                colorIndex = 0;
              }
              return (
                <WeatherCard
                  key={index}
                  weather={city}
                  cardColor={cardColors[colorIndex++]}
                />
              );
            })}
          </SimpleGrid>
        )}
      </Center>
    </Box>
  );
};

export default Home;
