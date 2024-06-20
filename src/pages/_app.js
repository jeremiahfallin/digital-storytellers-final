import Layout from "@/components/Layout";
import { ChakraProvider, background, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        height: "100%",
        background: "gray.800",
        color: "whiteAlpha.900",
      },
      "#__next": {
        height: "100%",
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
