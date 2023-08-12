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

const CityWeather = () => {
  return (
    <Center>
      <Card width={"60%"} backgroundColor={"cardBlue"} color={"white"}>
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
            <Icon boxSize={"20px"} as={BiArrowBack} />
          </Button>
        </CardHeader>
        <CardBody pt={0}>
          <VStack>
            <VStack>
              <Text fontSize={"2xl"} fontWeight={700}>
                Colombo,LK
              </Text>
              <Text>Colombo,LK</Text>
            </VStack>
            <SimpleGrid
              columns={3}
              justifyItems={"center"}
              pt={"2rem"}
              width={"40%"}
              alignItems={"center"}
            >
              <Center flexDirection={'column'}>
                <Icon boxSize={"50px"} as={BiArrowBack} />
                <Text fontSize={"sm"} fontWeight={700}>
                  Colombo,LK
                </Text>
              </Center>
              <Divider orientation="vertical" opacity={1} />
              <VStack>
                <Text fontSize={"5xl"}>26&deg;c</Text>
                <Box>
                  <Text fontSize={"sm"} fontWeight={"500"}>
                    Temp Min: 25&deg;C
                  </Text>
                  <Text fontSize={"sm"} fontWeight={"500"}>
                    Temp Max: 26&deg;c
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
