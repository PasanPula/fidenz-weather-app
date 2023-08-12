import {
  Card,
  CardHeader,
  Button,
  CardBody,
  Text,
  Icon,
  SimpleGrid,
  Box,
  Center,
  CardFooter,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {BsSun,BsCloudDrizzle,BsClouds,BsCloudy,BsCloudSun,BsCloudFog} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

const CityWeather = () => {
  const { state } = useLocation();
  const { weather, cardColor } = state;
  const navigate = useNavigate();

  return (
    <Center height={'60vh'}>
      <Card width={"60%"} backgroundColor={cardColor} color={"white"}>
        <CardHeader p={0} display={"flex"} justifyContent={"flex-start"}>
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
            <Icon boxSize={"20px"} as={BiArrowBack} onClick={()=> navigate(-1)} />
          </Button>
        </CardHeader>
        <CardBody pt={0}>
          <VStack>
            <VStack>
              <Text fontSize={"2xl"} fontWeight={700}>
                {weather.name},{weather.country}
              </Text>
              <Text>
                {weather.time},{weather.date}
              </Text>
            </VStack>
            <SimpleGrid
              columns={3}
              justifyItems={"center"}
              pt={"2rem"}
              width={"40%"}
              alignItems={"center"}
            >
              <Center flexDirection={"column"}>
                <Icon boxSize={"50px"} as={eval(weather.icon)} />
                <Text fontSize={"sm"} fontWeight={700}>
                  {weather.description}
                </Text>
              </Center>
              <Divider orientation="vertical" opacity={1} />
              <VStack>
                <Text fontSize={"5xl"}>  {parseInt(weather.temp)}&deg;c </Text>
                <Box>
                  <Text fontSize={"sm"} fontWeight={"500"}>
                    Temp Min: {parseInt(weather.temp_min)}&deg;c
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"500"}>
                    Temp Max: {parseInt(weather.temp_max)}&deg;c
                  </Text>
                </Box>
              </VStack>
            </SimpleGrid>
          </VStack>
        </CardBody>
        <CardFooter bg={"bgDark"} borderBottomRadius={6}></CardFooter>
      </Card>
    </Center>
  );
};

export default CityWeather;
