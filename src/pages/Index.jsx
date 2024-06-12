import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Image } from "@chakra-ui/react";

const articles = [
  {
    title: "Market Hits Record Highs",
    summary: "The stock market reached new heights today as investors reacted positively to economic data.",
    date: "October 1, 2023",
  },
  {
    title: "Tech Stocks Rally",
    summary: "Technology stocks led the market rally with significant gains in major tech companies.",
    date: "October 2, 2023",
  },
  {
    title: "Economic Growth Forecast",
    summary: "Economists predict steady growth in the coming quarters, driven by consumer spending and investment.",
    date: "October 3, 2023",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box as="header" bg="brand.800" color="white" py={4}>
        <Flex justify="space-between" align="center">
          <HStack spacing={4}>
            <Image src="/images/logo.png" alt="Financial News Logo" boxSize="50px" />
            <Heading as="h1" size="lg">Financial News</Heading>
          </HStack>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Economy</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      <Box as="main" py={8}>
        <VStack spacing={8} align="stretch">
          {articles.map((article, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{article.title}</Heading>
              <Text mt={4}>{article.summary}</Text>
              <Text mt={4} color="gray.500">{article.date}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box as="footer" bg="brand.900" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Financial News. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
            <Link href="#" color="white">Contact Us</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;