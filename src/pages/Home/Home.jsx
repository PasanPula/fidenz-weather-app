import {
  Center,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import WeatherCard from "../../components/WeatherCard";

const Home = () => {
  return (
    <Box as="container">
      <Center as="section">
        <InputGroup variant="filled" size="md" width={"40%"}>
          <Input
            height={"3rem"}
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
          <InputRightElement width="8rem" height={"3rem"}>
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
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px" width={'60%'}>
          {[1,23,4,5,6,7].map((num,index) => {
            return <WeatherCard key={index} num={num}/>
          })}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Home;
