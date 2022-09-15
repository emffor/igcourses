import { Box, Button, Flex, Heading, HStack, Icon, Link as ChakraLink, Stack, Text, useBreakpointValue, VStack, Wrap, WrapItem, Image, Center, Container, SimpleGrid, Divider } from "@chakra-ui/react";

import Link from "next/link";

import { FiCodesandbox } from 'react-icons/fi';
import { GiTrail } from "react-icons/gi";
import { HiChartSquareBar } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";

import { GoDeviceCameraVideo } from "react-icons/go";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function TrailTwo() {
    function OpenChallenge01() {
        window.open("https://www.notion.so/Cronograma-de-Estudos-9becd9b07a0e43c4bbf15826496f986a", "_blank");
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid
                    flex="1"
                    gap="4" //espaçamento entre os elementos
                    minChildWidth="320px" //largura minima de cada elemento, ele vai quebrar a linha quando chegar nesse tamanho
                    alignContent="flex-start" //alinha os elementos na vertical
                >

                    <Flex flexDirection="column">
                        <Stack mb={["2", "4"]} color="green.300">
                            <Heading size="lg">Node JS - 2022</Heading>
                        </Stack>


                        {/* Divider */}
                        <Stack mt="20">
                            <Box
                                as="a"
                                type="submit"
                                borderRadius={8}
                                bg="whiteAlpha.100"
                                justifyContent="center"
                                alignItems="center"
                                p={["4", "6"]}
                            >
                                <Text
                                    fontSize="sm"
                                    color="blackAlpha.700"
                                    fontWeight="bold"
                                    mx="4"
                                    textAlign={"center"}
                                >
                                    Node JS
                                </Text>
                            </Box>
                        </Stack>
                    </Flex>
                </SimpleGrid>
            </Flex >
        </Box >
    );
}