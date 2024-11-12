import { Box, Heading, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function IconLink({
  icon,
  text,
  link,
  staticColor = "#8091a2",
  hoverColor = "#fff",
  size = "35px",
  action,
}) {
  const [svgContent, setSvgContent] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const sizeMobile = (
    parseInt(size.replace("px", ""), 10) *
    (1 - 25 / 100)
  ).toFixed(0);

  const height = {
    base: `${sizeMobile}px`,
    lg: size,
  };

  useEffect(() => {
    fetch(`/${icon}`)
      .then((response) => response.text())
      .then((data) => setSvgContent(data))
      .catch((error) => console.error("Error loading SVG:", error));
  }, [icon]);

  return (
    <VStack
      as="a"
      href={link}
      spacing="2px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{ cursor: "pointer" }}
      onClick={action}
    >
      <Box
        width={height}
        height={height}
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        dangerouslySetInnerHTML={{
          __html: svgContent
            ? svgContent
                .replace(/<svg /, `<svg width="100%" height="100%"`)
                .replace(
                  /fill="[^"]*"/g,
                  `fill="${isHovered ? hoverColor : staticColor}"`
                )
            : "",
        }}
      />
      {text && (
        <Heading
          as="div"
          fontSize={{ base: "14px", lg: "16px" }}
          fontWeight="medium"
          color={isHovered ? hoverColor : staticColor}
          textAlign="center"
        >
          {text}
        </Heading>
      )}
    </VStack>
  );
}

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  link: PropTypes.string,
  staticColor: PropTypes.string,
  hoverColor: PropTypes.string,
  size: PropTypes.string,
  action: PropTypes.func,
};
