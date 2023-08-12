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


const WeatherCard = ({ key, num }) => {
  return (
    <Card key={key} backgroundColor={"cardBlue"} color={"white"}>
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
              Colombo,LK
            </Text>
            <Center fontSize={"2xs"}>09.50am Feb {num }</Center>
          </Box>
          <Box>
            <Text fontSize={"6xl"} fontWeight={"500"}>
              26&deg;c
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={2} justifyItems={'center'}>
          <HStack>
          <Icon as={IoCloseOutline} /> <Text fontSize={"sm"} fontWeight={"500"}>
             Few Clouds
            </Text>
          </HStack>
          <Box>
            <Text fontSize={"sm"} fontWeight={"500"}>
              Temp Min: 25&deg;C
            </Text>
            <Text fontSize={"sm"} fontWeight={"500"}>
              Temp Max: 26&deg;c
            </Text>
          </Box>
        </SimpleGrid>
      </CardBody>
      <CardFooter bg={"bgDark"} borderBottomRadius={6}></CardFooter>
    </Card>
  );
};

export default WeatherCard;
