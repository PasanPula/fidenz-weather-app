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
} from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import cardBg from "../assets/BG/cardBg.png";
// eslint-disable-next-line no-unused-vars
import {BsSun,BsCloudDrizzle,BsClouds,BsCloudy,BsCloudSun,BsCloudFog} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";

const WeatherCard = ({ weather, cardColor }) => {
  const navigate = useNavigate();

  return (
    <Card backgroundColor={cardColor} color={"white"} cursor={'pointer'} onClick={() => {  navigate(`${weather.name}`,
    {state:{
      weather,
      cardColor
    } }) }}>
      <CardHeader p={0} display={"flex"} justifyContent={"flex-end"}>
        <Button
          _hover={{ backgroundColor: "transparent" }}
          position={"relative"}
          right={0}
          variant="ghost"
          color={"white"}
          height={'auto'}
          width={'auto'}
          pt={3}
        >
          <Icon boxSize={'20px'} as={IoCloseOutline} /> 
        </Button>
      </CardHeader>
      <CardBody
        backgroundImage={cardBg}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        pt={0}
      >
        <SimpleGrid columns={2} spacing={2} justifyItems={'center'} alignItems={'center'}>
          <Box>
            <Text fontSize={"xl"} fontWeight={"700"}>
              {weather.name},{weather.country}
            </Text>
            <Center fontSize={"2xs"}> {weather.time},{weather.date} </Center>
          </Box>
          <Box>
            <Text fontSize={"6xl"} fontWeight={"500"}>
              {parseInt(weather.temp)}&deg;c
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={2} justifyItems={'center'}>
          <HStack>
          <Icon as={eval(weather.icon)} /> <Text fontSize={"sm"} fontWeight={"500"}>
             {weather.description}
            </Text>
          </HStack>
          <Box>
            <Text fontSize={"sm"} fontWeight={"500"}>
              Temp Min: {parseInt(weather.temp_min)}&deg;c
            </Text>
            <Text fontSize={"sm"} fontWeight={"500"}>
              Temp Max: {parseInt(weather.temp_max)}&deg;c
            </Text>
          </Box>
        </SimpleGrid>
      </CardBody>
      <CardFooter bg={"bgDark"} borderBottomRadius={6}></CardFooter>
    </Card>
  );
};

export default WeatherCard;
