import { Input, InputGroup, InputRightElement, Image } from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <InputGroup
      variant="unstyled"
      background="gray.500"
      height="44px"
      borderRadius="8px"
      px="20px"
      color="white"
      fontSize="14px"
      minW="200px"
    >
      <InputRightElement pointerEvents="none" right="20px" top="12px">
        <Image src="magnifier-icon.png" alt="magnifier icon" maxW="20px" />
      </InputRightElement>
      <Input
        type="text"
        placeholder="Search product, model, sku, keyword..."
        _placeholder={{
          color: "white",
          fontSize: { base: "12px", sm: "14px" },
        }}
      />
    </InputGroup>
  );
}
