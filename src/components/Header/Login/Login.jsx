import { Image, Heading, VStack } from "@chakra-ui/react";

export default function Login() {
  return (
    <VStack spacing="2px" width={{ base: "35px", lg: "40px" }}>
      <Image
        src="icon-user.png"
        alt="user icon"
        height={{ base: "20px", lg: "25px" }}
      />
      <Heading
        as="div"
        fontSize={{ base: "14px", lg: "16px" }}
        fontWeight="medium"
        color="#8091a2"
        textAlign="center"
      >
        login
      </Heading>
    </VStack>
  );
}
