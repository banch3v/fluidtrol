import { Image, Heading, VStack } from "@chakra-ui/react";

export default function Menu({ setIsMenuOpen }) {
  return (
    <VStack
      spacing="2px"
      width={{ base: "35px", lg: "40px" }}
      onClick={setIsMenuOpen}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Image
        src="icon-plus.png"
        alt="plus menu icon"
        height={{ base: "20px", lg: "25px" }}
      />
      <Heading
        as="div"
        fontSize={{ base: "14px", lg: "16px" }}
        fontWeight="medium"
        color="#8091a2"
        textAlign="center"
      >
        menu
      </Heading>
    </VStack>
  );
}
