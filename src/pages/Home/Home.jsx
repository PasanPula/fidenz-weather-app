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
import { getFromCache } from "../../util/cachingHandler";
import { useEffect, useState } from "react";
import { CACHE_EXPIRATION, CACHE_TIME_KEY } from "../../configs/Constants";
import { getWeatherCards } from "../../services/weatherCardService";
import { convertMinSec } from "../../util/timeConverter";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  //restoring handler of weather data
  const fetchAndUpdate = async () => {
    const lastUpdateTime = getFromCache(CACHE_TIME_KEY);
    let availableTime = CACHE_EXPIRATION;
    setIsLoading(true);

    if (lastUpdateTime) {
      console.log("last refersh time:", new Date(lastUpdateTime).getHours(),":",new Date(lastUpdateTime).getMinutes(),":",new Date(lastUpdateTime).getSeconds());
    }

    try {
      if (lastUpdateTime && Date.now() - lastUpdateTime < CACHE_EXPIRATION) {
        //Restoring available time from cache to resume the timer
        availableTime = CACHE_EXPIRATION - (Date.now() - lastUpdateTime);
        setWeatherData(await getWeatherCards(true));
      } else {
        setWeatherData(await getWeatherCards(false));
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      console.log("next refersh in:", convertMinSec(availableTime));
      setTimeout(fetchAndUpdate, availableTime);
    }
    
  };

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  return (
    <Box as="main">
      <Center as="section">
        {/* Add City Input Section */}
        <InputGroup
          variant="filled"
          size="md"
          width={{ base: "60%", md: "50%", lg: "40%" }}
        >
          <Input
            height={{ base: "2.5rem", md: "3rem", lg: "3rem" }}
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
          <InputRightElement
            width={{ base: "5rem", md: "7rem", lg: "8rem" }}
            height={{ base: "2.5rem", md: "3rem", lg: "3rem" }}
          >
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

      {/* Weather Card Grid */}
      <Center as="section" mt={20} pb={40}>
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : error ? (
          <Text fontSize={"xl"} color={"white"}>
            {error}
          </Text>
        ) : (
          <SimpleGrid
            columns={{ sm: 1, md: 2 }}
            spacing="40px"
            width={{ base: "80%", md: "70%", lg: "70%" }}
          >
            {weatherData}
          </SimpleGrid>
        )}
      </Center>
    </Box>
  );
};

export default Home;
