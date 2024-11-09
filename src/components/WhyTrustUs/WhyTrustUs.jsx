import {
  Flex,
  Heading,
  Grid,
  GridItem,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { fullWidth, inGrid, title28Bold } from "../../theme";
import PropTypes from "prop-types";

export default function WhyTrustUs({ usps }) {
  return (
    <Flex {...fullWidth} backgroundColor="gray.300">
      <Flex {...inGrid} direction="column" alignItems="left" py="80px">
        <Heading {...title28Bold} mb="30px">
          Why Trust Fluidtrol?
        </Heading>
        <Grid templateColumns={{ base: "1 1fr", md: "3fr 1fr" }} gap={10}>
          <GridItem>
            <Grid
              templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
              rowGap={4}
              columnGap={10}
            >
              {usps.map((usp) => (
                <GridItem key={usp.id}>
                  <Heading as="h3" fontSize="16px" fontWeight="bold">
                    {usp.title}
                  </Heading>
                  <Text>{usp.description}</Text>
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <GridItem
            display="flex"
            justifyContent={{ base: "center", md: "flex-end" }}
            alignItems="center"
          >
            <Image src="made-in-usa-badge.webp" />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}

WhyTrustUs.propTypes = {
  usps: PropTypes.array.isRequired,
};
