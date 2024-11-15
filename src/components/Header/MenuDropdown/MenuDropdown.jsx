import { Flex, Heading, Grid, GridItem, Link } from "@chakra-ui/react";
import { fullWidth, inGrid } from "../../../theme";

export default function MenuDropdown() {
  return (
    <Flex
      className="menu"
      {...fullWidth}
      background="gray.300"
      position="absolute"
      zIndex="2"
    >
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
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
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
            <Link>Commercial Reducers</Link>
            <Link>Modulating Float Valves</Link>
            <Link>Specialty Filters</Link>
            <Link>Sand Filters</Link>
            <Link>Spare Parts</Link>
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
              Solutions
            </Heading>
            <Link>Aquatic</Link>
            <Link>General Water</Link>
            <Link>Industrial</Link>
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
              Design
            </Heading>
            <Link>Strainer Basket Details</Link>
            <Link>Quality Control</Link>
            <Link>Our Design Process</Link>
            <Link>White Papers</Link>
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
              Resources
            </Heading>
            <Link>Blog</Link>
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
              Company
            </Heading>
            <Link>About Us</Link>
            <Link>Job Openings</Link>
            <Link>Contact Us</Link>
            <Link>Privacy Policy</Link>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
}
