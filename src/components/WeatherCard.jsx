/* eslint-disable no-unused-vars */
//Resuable Wearther Card component
// PROPS : weather, cardColor
// Return Card Element
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Icon,
  Box,
  SimpleGrid,
  Center,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import cardBg from "../assets/BG/cardBg.png";
import { CiLocationArrow1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { getWeatherIcon } from "../util/weatherJsonFilter";

const WeatherCard = ({ weather, cardColor }) => {
  const navigate = useNavigate();

  return (
    <Card
      backgroundColor={cardColor}
      color={"white"}
      cursor={"pointer"}
      onClick={() => {
        navigate(`${weather.name}`, {
          state: {
            weather,
            cardColor,
          },
        });
      }}
    >
      {/* 
          Card Header with back button
      */}
      <CardHeader p={0} display={"flex"} justifyContent={"flex-end"}>
        <Button
          _hover={{ backgroundColor: "transparent" }}
          position={"relative"}
          right={0}
          variant="ghost"
          color={"white"}
          height={"auto"}
          width={"auto"}
          pt={3}
        >
          <Icon boxSize={"20px"} as={IoCloseOutline} />
        </Button>
      </CardHeader>

      {/* 
          Card body with Temperature details
      */}
      <CardBody
        backgroundImage={cardBg}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        pt={0}
      >
        <SimpleGrid
          columns={2}
          spacing={2}
          justifyItems={"center"}
          alignItems={"center"}
        >
          <Box>
            <Text
              fontSize={{ base: "1em", md: "1.1em", lg: "1.7em" }}
              fontWeight={"700"}
            >
              {weather.name},{weather.country}
            </Text>
            <Center fontSize={{ base: "xs", md: "smaller", lg: "small" }}>
              {weather.time}, {weather.date}
            </Center>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "2.5em", md: "2.5em", lg: "3.5em" }}
              fontWeight={"500"}
            >
              {parseInt(weather.temp)}&deg;c
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={2} spacing={2} justifyItems={"center"} mt={5}>
          <HStack>
            <Icon
              as={getWeatherIcon(weather.description)}
              boxSize={{ base: "25px", md: "30px", lg: "35px" }}
            />
            <Text
              fontSize={{ base: "smaller", md: "x-small", lg: "medium" }}
              fontWeight={"500"}
              letterSpacing={"wide"}
            >
              {weather.description}
            </Text>
          </HStack>
          <Box
            fontSize={{ base: "smaller", md: "x-small", lg: "medium" }}
            fontWeight={"500"}
          >
            <Text>Temp Min: {parseInt(weather.temp_min)}&deg;c</Text>
            <Text>Temp Max: {parseInt(weather.temp_max)}&deg;c</Text>
          </Box>
        </SimpleGrid>
      </CardBody>

       {/* 
            Card Footer with related extra weather details
      */}

      <CardFooter bg={"bgDark"} borderBottomRadius={6} pl={3} pr={3}>
        <SimpleGrid columns={3} width={"100%"} justifyContent={"space-between"}>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            borderRight={"2px"}
            borderColor={"whiteAlpha.500"}
            height={"100%"}
            flexGrow={"1"}
            flexShrink={"1"}
            flexBasis={"auto"}
            fontSize={{ base: "x-small", md: "x-small", lg: "smaller" }}
          >
            <Text>
              <b>Pressure: </b>
              {weather.pressure}
            </Text>
            <Text>
              <b>Humidity: </b>
              {weather.humidity}
            </Text>
            <Text>
              <b>Visibility: </b>
              {weather.visibility}
            </Text>
          </Box>

          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            borderRight={"2px"}
            borderColor={"whiteAlpha.500"}
            height={"100%"}
            flexGrow={"1"}
            flexShrink={"1"}
            flexBasis={"auto"}
            alignItems={"center"}
            fontSize={{ base: "x-small", md: "x-small", lg: "smaller" }}
          >
            <Icon
              boxSize={{ base: "30px", md: "30px", lg: "30px" }}
              as={CiLocationArrow1}
            />
            <Text fontWeight={600} textAlign={'center'}>
              {weather.wind_speed} {weather.wind_deg}
            </Text>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            p={2}
            justifyContent={"center"}
            alignItems={"flex-end"}
            fontSize={{ base: "x-small", md: "x-small", lg: "smaller" }}
          >
            <Text textAlign={"center"}>
              <b>Sunrise: </b>
              {weather.sunrise}
            </Text>
            <Text textAlign={"center"}>
              <b>Sunset: </b>
              {weather.sunset}
            </Text>
          </Box>
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
};

export default WeatherCard;
