import { Flex, Heading, Grid, GridItem, Link } from "@chakra-ui/react";
import { fullWidth, inGrid } from "../../../../theme";

export default function MenuDropdown() {
  return (
    <Flex {...fullWidth} background="gray.300" position="absolute" zIndex="2">
      <Flex {...inGrid} py={{ base: "30px", lg: "50px" }} direction="column">
        <Heading
          as="h2"
          fontSize="28px"
          mb="10px"
          display={{ base: "none", sm: "block" }}
        >
          Menu
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2, 3fr)",
            sm: "repeat(3, 2fr)",
            md: "repeat(5, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            w="100%"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
          >
            <Heading
              as="h3"
              color="secondary.500"
              fontSize="19px"
              fontWeight="semibold"
              mb="10px"
            >
              Products
            </Heading>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
          </GridItem>
          <GridItem
            w="100%"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
          >
            <Heading
              as="h3"
              color="secondary.500"
              fontSize="19px"
              fontWeight="semibold"
              mb="10px"
            >
              Products
            </Heading>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
          </GridItem>
          <GridItem
            w="100%"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
          >
            <Heading
              as="h3"
              color="secondary.500"
              fontSize="19px"
              fontWeight="semibold"
              mb="10px"
            >
              Products
            </Heading>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
          </GridItem>
          <GridItem
            w="100%"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
          >
            <Heading
              as="h3"
              color="secondary.500"
              fontSize="19px"
              fontWeight="semibold"
              mb="10px"
            >
              Products
            </Heading>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
          </GridItem>
          <GridItem
            w="100%"
            display="flex"
            flexWrap="nowrap"
            flexDirection="column"
          >
            <Heading
              as="h3"
              color="secondary.500"
              fontSize="19px"
              fontWeight="semibold"
              mb="10px"
            >
              Products
            </Heading>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
            <Link>Basket Strainers</Link>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
