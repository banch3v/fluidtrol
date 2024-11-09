import { Flex, Heading } from "@chakra-ui/react";
import { fullWidth, inGrid, title48Bold, title24Regular } from "../../theme";

export default function Banner({ backgroundImg, title, subtitle }) {
  return (
    <Flex
      as="section"
      {...fullWidth}
      backgroundImage={`url(${backgroundImg})`}
      backgroundPosition={{ base: "center right", md: "center" }}
      backgroundSize="cover"
    >
      <Flex
        {...inGrid}
        direction="column"
        alignItems="end"
        justifyContent="start"
        py="60px"
        gap="10px"
        minH="100vh"
      >
        <Heading as="h1" {...title48Bold} maxW="700px" textAlign="end">
          {title}
        </Heading>
        <Heading {...title24Regular} maxW="700px" textAlign="end">
          {subtitle}
        </Heading>
      </Flex>
    </Flex>
  );
}
