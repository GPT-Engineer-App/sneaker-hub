import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack, HStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "러닝화",
    price: 129000,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc2hvZXN8ZW58MHx8fHwxNzEyNjE2NTkyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "농구화",
    price: 139000,
    image: "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwc2hvZXN8ZW58MHx8fHwxNzEyNjE2NTkyfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "축구화",
    price: 99000,
    image: "https://images.unsplash.com/photo-1597274747316-808c6786c165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjbGVhdHN8ZW58MHx8fHwxNzEyNjE2NTkzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "테니스화",
    price: 89000,
    image: "https://images.unsplash.com/photo-1485660063059-5d44c96d3345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBzaG9lc3xlbnwwfHx8fDE3MTI2MTY1OTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <Box p={4}>
      <Flex align="center" mb={8}>
        <Heading as="h1" size="xl">
          운동화 쇼핑몰
        </Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" onClick={onOpen} />
        <Badge ml={2} colorScheme="red">
          {cart.length}
        </Badge>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading as="h3" size="md" mb={2}>
              {product.name}
            </Heading>
            <Text mb={4}>{product.price.toLocaleString()}원</Text>
            <Button colorScheme="blue" onClick={() => addToCart(product)}>
              장바구니 담기
            </Button>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>장바구니</DrawerHeader>
            <DrawerBody>
              <VStack align="stretch" spacing={4}>
                {cart.map((product) => (
                  <HStack key={product.id} spacing={4}>
                    <Image src={product.image} alt={product.name} boxSize="100px" />
                    <Box>
                      <Heading as="h4" size="sm">
                        {product.name}
                      </Heading>
                      <Text>{product.price.toLocaleString()}원</Text>
                    </Box>
                    <Spacer />
                    <IconButton icon={<FaShoppingCart />} variant="ghost" colorScheme="red" onClick={() => removeFromCart(product.id)} />
                  </HStack>
                ))}
              </VStack>
              <Button mt={8} colorScheme="green" size="lg" width="100%">
                구매하기
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
