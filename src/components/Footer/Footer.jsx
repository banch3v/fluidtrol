import {
  Flex,
  VStack,
  Text,
  Heading,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react";
import { fullWidth, inGrid, title48Bold } from "../../theme";
import IconLink from "../IconLink/IconLink";

export default function Footer() {
  return (
    <Flex
      {...fullWidth}
      backgroundColor="primary.500"
      borderTop="4px solid"
      borderColor="accent.500"
    >
      <Flex
        {...inGrid}
        direction={{ base: "column", lg: "row" }}
        py={{ base: "60px", md: "80px" }}
        alignItems="center"
        justifyContent="space-between"
        gap="30px"
      >
        <Box flex="1">
          <Text
            fontSize="16px"
            color="gray.600"
            textAlign={{ base: "center", lg: "left" }}
            maxW="300px"
          >
            © 2023 Fluidtrol Process Technologies, Inc. All Rights Reserved
          </Text>
        </Box>
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
        <HStack
          spacing="30px"
          flex="1"
          mt={{ base: "10px", lg: "0" }}
          justifyContent="flex-end"
        >
          <IconLink icon={"icon-linkedin.svg"} size="40px" />
          <IconLink icon={"icon-twitter.svg"} size="40px" />
          <IconLink icon={"icon-facebook.svg"} size="40px" />
        </HStack>
      </Flex>
    </Flex>
  );
}
