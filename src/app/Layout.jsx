import {
  Heading,
  Img,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import logo from "../assets/Logo/Logo.png";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Box as="main" className="main">
        <HStack as = "header"  justifyContent={"center"} alignItems={"center"} minHeight={'20vh'} spacing={'15px'} >
        <Img src={logo} width={'2.5rem'} height={'2rem'} />
            <Heading color={"white"} fontSize={"xl"}>
              Weather App
            </Heading>
        </HStack>
        <Outlet />
        <Box
          as="footer"
          minHeight={'8vh'}
          background={"bgDark"}
          width={"100%"}
          position={"absolute"}
          bottom={0}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color={"whiteAlpha.600"}>2021 Fidenz Technologies </Text>
        </Box>
      </Box>
    </>
  );
};

export default RootLayout;
