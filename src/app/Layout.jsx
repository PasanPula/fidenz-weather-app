import {
  Heading,
  Img,
  Text,
  Box,
} from "@chakra-ui/react";
import logo from "../assets/Logo/Logo.png";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Box as="main" className="main">
        <Box as = "header" display={'flex'} justifyContent={"center"} alignItems={"center"} minHeight={'20vh'}>
        <Img src={logo} width={'2.5rem'} height={'2rem'} />
            <Heading color={"white"} fontSize={"xl"} pl={5}>
              Weather App
            </Heading>
        </Box>
        <Outlet />
        <Box
          as="footer"
          minHeight={'8vh'}
          background={"bgDark"}
          width={"100%"}
          position={"fixed"}
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
