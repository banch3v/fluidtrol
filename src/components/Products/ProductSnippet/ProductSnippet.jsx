import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function ProductSnippet({
  title,
  subtitle,
  image,
  isAccent = false,
}) {
  return (
    <Card>
      <CardHeader>
        <Heading as="h3" fontSize="22px" textAlign="center">
          {title}
        </Heading>
        <Heading
          as="div"
          fontSize="22px"
          fontWeight="normal"
          textAlign="center"
        >
          {subtitle}
        </Heading>
      </CardHeader>
      <CardBody>
        <img src={image} alt={title + " " + subtitle} />
      </CardBody>
      <CardFooter>
        <Button variant={isAccent ? "solid" : "outline"}>View Product</Button>
      </CardFooter>
    </Card>
  );
}

ProductSnippet.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isAccent: PropTypes.bool,
};
