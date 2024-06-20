import { Heading, Text } from "@chakra-ui/react";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <Heading as="h1">{children}</Heading>,
    h2: ({ children }) => <Heading as="h2">{children}</Heading>,
    h3: ({ children }) => <Heading as="h3">{children}</Heading>,
    h4: ({ children }) => <Heading as="h4">{children}</Heading>,
    h5: ({ children }) => <Heading as="h5">{children}</Heading>,
    h6: ({ children }) => <Heading as="h6">{children}</Heading>,
    p: ({ children }) => <Text>{children}</Text>,

    ...components,
  };
}
