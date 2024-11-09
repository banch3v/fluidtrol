import { Flex, Image, HStack } from "@chakra-ui/react";
import { fullWidth, inGrid } from "../../theme";
import SearchBar from "../Searchbar/Searchbar";
import CartButton from "./CartButton/CartButton";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import MenuDropdown from "./Menu/MenuDropdown/MenuDropdown";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Flex {...fullWidth} background="primary.500">
        <Flex
          {...inGrid}
          py={{ base: "20px", md: "30px" }}
          gap={{ base: "20px", sm: "30px", lg: "50px" }}
          direction="row"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Image
            src="fluidtrol-logo.png"
            alt="Fluidtrol Logo"
            maxW="300px"
            flexShrink="1"
            flexGrow="1"
            flexBasis={{ base: "0", md: "auto" }}
            minW="150px"
            h="auto"
            objectFit="contain"
            order={1}
          />
          <HStack
            order={{ base: 3, md: 2 }}
            w="100%"
            flexShrink="1"
            flexGrow="2"
          >
            <SearchBar />
          </HStack>
          <HStack
            spacing={{ base: "20px", lg: "50px" }}
            align="center"
            order={{ base: 2, md: 3 }}
          >
            <CartButton />
            <Login />
            <Menu
              setIsMenuOpen={() => setIsMenuOpen((prevState) => !prevState)}
            />
          </HStack>
        </Flex>
      </Flex>
      {isMenuOpen && <MenuDropdown />}
    </>
  );
}
