import { Box, Heading, Text } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: Heading,
  h2: Heading,
  p: Text,
};

function Layout({ children, ...props }) {
  return (
    <MDXProvider components={components}>
      <Box>{children}</Box>
    </MDXProvider>
  );
}

export default Layout;
