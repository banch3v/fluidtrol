import { Button, Flex, Heading } from "@chakra-ui/react";
import { fullWidth, inGrid, title28Bold } from "../../theme";
import PropTypes from "prop-types";

export default function CTA({ title }) {
  return (
    <Flex {...fullWidth}>
      <Flex
        {...inGrid}
        direction="column"
        alignItems="center"
        py={{ base: "60px", md: "80px" }}
      >
        <Heading {...title28Bold} mb="20px" textAlign="center">
          {title}
        </Heading>
        <Button>Contact Us</Button>
      </Flex>
    </Flex>
  );
}

CTA.propTypes = {
  title: PropTypes.string.isRequired,
};
