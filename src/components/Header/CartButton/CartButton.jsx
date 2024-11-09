import { Image, Heading, VStack } from "@chakra-ui/react";

export default function CartButton() {
  return (
    <VStack spacing="2px" width={{ base: "35px", lg: "40px" }}>
      <Image
        src="icon-basket.png"
        alt="cart icon"
        height={{ base: "20px", lg: "25px" }}
      />
      <Heading
        as="div"
        fontSize={{ base: "14px", lg: "16px" }}
        fontWeight="medium"
        color="#8091a2"
        textAlign="center"
      >
        cart
      </Heading>
    </VStack>
  );
}
