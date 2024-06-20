import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      p="4"
      bg="green.800"
      color="white"
      fontSize={"xl"}
    >
      Blog
      <Box as="nav" display="flex" gap="4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Box>
    </Flex>
  );
}

export default function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Box as="main" p="4">
        {children}
      </Box>
    </Box>
  );
}
