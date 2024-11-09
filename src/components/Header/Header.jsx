import { Flex } from "@chakra-ui/react";
import { fullWidth, inGrid } from "../../theme";

export default function Header() {
  return (
    <>
      <Flex {...fullWidth} background="blue.500">
        <Flex {...inGrid} background="red.500">
          <div>Header</div>
          <div>Menu</div>
        </Flex>
      </Flex>
    </>
  );
}
