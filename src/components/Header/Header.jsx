import { Flex, Image, HStack } from "@chakra-ui/react";
import { fullWidth, inGrid } from "../../theme";
import SearchBar from "./SearchBar/SearchBar";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import { useState, useEffect, useRef } from "react";
import IconLink from "../IconLink/IconLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function handleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <IconLink
              icon={"basket.svg"}
              text={"cart"}
              staticColor={"#8091a2"}
            />
            <IconLink icon={"user.svg"} text={"cart"} staticColor={"#8091a2"} />
            {!isMenuOpen ? (
              <IconLink
                icon={"plus.svg"}
                text={"cart"}
                staticColor={"#8091a2"}
                action={handleMenu}
              />
            ) : (
              <IconLink
                icon={"x.svg"}
                text={"cart"}
                staticColor={"#8091a2"}
                action={handleMenu}
              />
            )}
          </HStack>
        </Flex>
      </Flex>
      {isMenuOpen && (
        <div ref={menuRef}>
          <MenuDropdown />
        </div>
      )}
    </>
  );
}
