import { Flex, VStack, Text, Heading, HStack, Image } from "@chakra-ui/react";
import { fullWidth, inGrid, title48Bold } from "../../theme";

export default function Footer() {
  return (
    <Flex {...fullWidth} backgroundColor="primary.500">
      <Flex
        {...inGrid}
        direction={{ base: "column", lg: "row" }}
        py="40px"
        alignItems="center"
        gap={{ base: "30px", lg: "50px" }}
      >
        <Text
          fontSize="16px"
          color="gray.600"
          flex="1"
          textAlign={{ base: "center", lg: "left" }}
        >
          © 2023 Fluidtrol Process Technologies, Inc. All Rights Reserved
        </Text>
        <VStack spacing="0px" flex="1">
          <Heading
            as="div"
            fontSize={{ base: "18px", md: "26px" }}
            fontWeight="medium"
            color="gray.400"
            textAlign="center"
          >
            For Customer Service Call
          </Heading>
          <Heading as="div" {...title48Bold} color="white" textAlign="center">
            <a href="tel:888-551-0511">888-551-0511</a>
          </Heading>
          <Heading
            as="div"
            fontSize={{ base: "16px", md: "18px" }}
            color="gray.400"
            fontWeight="normal"
            textAlign="center"
          >
            or send an email to:{" "}
            <a href="mailto:fpt@fluidtrol.com">fpt@fluidtrol.com</a>
          </Heading>
        </VStack>
        <HStack spacing="30px" flex="1" mt={{ base: "10px", lg: "0" }}>
          <Image src="icon-linkedin.svg" alt="Facebook" />
          <Image src="icon-twitter.svg" alt="Facebook" />
          <Image src="icon-facebook.svg" alt="Facebook" />
        </HStack>
      </Flex>
    </Flex>
  );
}