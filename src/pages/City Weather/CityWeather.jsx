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
import { useNavigate } from "react-router-dom";
import { CiLocationArrow1 } from "react-icons/ci";
import { getWeatherIcon } from "../../util/weatherJsonFilter";


const CityWeather = () => {
  const { state } = useLocation();
  const { weather, cardColor } = state;
  const navigate = useNavigate();

  return (
    <Center height={'60vh'}>
      <Card width={{ base: '80%', md: '60%', lg: '55%' }} backgroundColor={cardColor} color={"white"}>
        {/* Card header Section */}
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
          {/* Card Body Upper Section */}
          <VStack>
            <VStack>
              <Text fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }} fontWeight={700}>
                {weather.name},{weather.country}
              </Text>
              <Text fontSize={{ base: '2xs', md: 'smaller', lg: 'samll' }}>
                {weather.time},{weather.date}
              </Text>
            </VStack>

          {/* Card Body bottom Section */}
            <SimpleGrid
              columns={3}
              justifyItems={"center"}
              pt={"2rem"}
              width={{ base: '90%', md: '60%', lg: '40%' }}
              alignItems={"center"}
            >
              <Center flexDirection={"column"}>
                <Icon boxSize={{ base: '40px', md: '45px', lg: '50px' }} as={getWeatherIcon(weather.description)} mb={4} />
                <Text textAlign={'center'} fontSize={"sm"} fontWeight={500}>
                  {weather.description}
                </Text>
              </Center>

              <Divider orientation="vertical" opacity={0.5} width={'2px'}/>

              <VStack>
                <Text fontSize={{ base: '4xl', md: '3xl', lg: '5xl' }}>  {parseInt(weather.temp)}&deg;c </Text>
                <Box fontSize={{ base: '2xs', md: 'xs', lg: 'smaller' }} fontWeight={"500"}>
                  <Text >
                    Temp Min: {parseInt(weather.temp_min)}&deg;c
                  </Text>
                  <Text>
                    Temp Max: {parseInt(weather.temp_max)}&deg;c
                  </Text>
                </Box>
              </VStack>
            </SimpleGrid>
          </VStack>
        </CardBody>

        <CardFooter bg={"bgDark"} borderBottomRadius={6} pl={3} pr={3}  width={"100%"} justifyContent={'space-around'}>
        <SimpleGrid columns={3} width={{ base: '95%', md: '70%', lg: '60%' }} >
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
          >
            <Text fontSize={"smaller"}>
              <b>Pressure: </b>
              {weather.pressure}
            </Text>
            <Text fontSize={"smaller"}>
              <b>Humidity: </b>
              {weather.humidity}
            </Text>
            <Text fontSize={"smaller"}>
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
            alignItems={'center'}
          >
            <Icon
              boxSize={{ base: "30px", md: "30px", lg: "30px" }}
              as={CiLocationArrow1}
            />
            <Text fontSize={"smaller"} fontWeight={500} textAlign={'center'}>
              {weather.wind_speed} {weather.wind_deg}
            </Text>
          </Box>

          <Box display={"flex"} flexDirection={"column"} height={"100%"} p={2} justifyContent={'center'}>
            <Text textAlign={"center"} fontSize={"smaller"}>
              <b>Sunrise: </b>
              {weather.sunrise}
            </Text>
            <Text textAlign={"center"} fontSize={"smaller"}>
              <b>Sunset: </b>
              {weather.sunset}
            </Text>
          </Box>
        </SimpleGrid>
      </CardFooter>
      </Card>
    </Center>
  );
};

export default CityWeather;
