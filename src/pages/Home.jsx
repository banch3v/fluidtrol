import Banner from "../components/Banner/Banner";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { fullWidth, inGrid, title48Bold } from "../theme";
import Products from "../components/Products/Products";
import products from "../data/products";
import usps from "../data/usps";
import WhyTrustUs from "../components/WhyTrustUs/WhyTrustUs";

export default function Home() {
  return (
    <>
      <Banner
        backgroundImg={"banner-img.jpg"}
        title={"The Aquatic Professionals Number One Choice"}
        subtitle={"For Strainers, Reducers & Float Valves"}
      />
      <Flex {...fullWidth}>
        <Flex {...inGrid} direction="column" alignItems="center" py="80px">
          <Heading {...title48Bold}>Shop Fluidtrol</Heading>
          <Button>View All Products</Button>
        </Flex>
      </Flex>
      <Products title={"Products Categories"} products={products} />
      <Products title={"Solutions"} products={products} />
      <WhyTrustUs usps={usps} />
    </>
  );
}
