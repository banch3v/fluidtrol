import PropTypes from "prop-types";
import { Flex, Box, Heading, Grid, GridItem } from "@chakra-ui/react";
import { fullWidth, inGrid } from "../../theme";
import ProductSnippet from "./ProductSnippet/ProductSnippet";

export default function Products({ title, products }) {
  return (
    <>
      <Flex {...fullWidth} mb="80px">
        <Flex {...inGrid} direction="column">
          <Box
            background="primary.500"
            width="100%"
            p="20px"
            borderRadius="8px"
            mb="20px"
          >
            <Heading fontSize="16px" color="white" fontWeight="medium">
              {title}
            </Heading>
          </Box>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap={{ base: 6, md: 10 }}
          >
            {products.map((product, index) => (
              <GridItem key={product.id} w="100%">
                <ProductSnippet
                  isAccent={index === 0 ? true : false}
                  title={product.title}
                  subtitle={product.subtitle}
                  image={product.image}
                />
              </GridItem>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
}

Products.prototype = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
