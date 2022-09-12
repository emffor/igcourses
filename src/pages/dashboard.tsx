import { Box, Button, Center, Container, Flex, HStack, Icon, Image, SimpleGrid, SkeletonCircle, SkeletonText, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import Link from "next/link";

export default function Dashboard() {
    return (
        <Flex
            direction="column"
        >
            {/* Header */}
            <Header />

            {/* Sidebar */}
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />

                {/* SimpleGrid */}
                <SimpleGrid
                    flex="1"
                    gap="4" //espaçamento entre os elementos
                    minChildWidth="320px" //largura minima de cada elemento, ele vai quebrar a linha quando chegar nesse tamanho
                    alignContent="flex-start" //alinha os elementos na vertical
                >
                    <Link href="/reactjs" passHref>
                        <Button
                            as="a"
                            type="submit"
                            size="12"
                            colorScheme="facebook" //cor do botão
                            color="white"
                            p={["6", "8"]} //paddingX
                            bg="gray.800"
                            borderRadius={8}
                        >
                            <HStack>
                                <Image
                                    borderRadius='full'
                                    boxSize='12'
                                    src='https://i.ibb.co/M23pSQm/react-js.png'
                                    alt='react js'
                                />

                                <Text fontSize="4xl" fontWeight="bold">React JS</Text>
                            </HStack>
                        </Button>
                    </Link>

                    <Link href="/reactnative" passHref>
                        <Button
                            as="a"
                            type="submit"
                            size="12"
                            colorScheme="facebook" //cor do botão
                            color="white"
                            p="8"
                            bg="gray.800"
                            borderRadius={8}
                        >
                            <HStack>
                                <Image
                                    borderRadius='full'
                                    boxSize='12'
                                    src='https://i.ibb.co/GVRm201/react-native.png'
                                    alt='Dan Abramov'
                                />
                                <Text fontSize="4xl" fontWeight="bold">React Native</Text>
                            </HStack>
                        </Button>
                    </Link>

                    <Link href="/nodejs" passHref>
                        <Button
                            as="a"
                            type="submit"
                            size="12"
                            colorScheme="facebook" //cor do botão
                            color="white"
                            p="8"
                            bg="gray.800"
                            borderRadius={8}
                        >
                            <HStack>
                                <Image
                                    borderRadius='full'
                                    boxSize='12'
                                    src='https://i.ibb.co/D7VrCYx/node-js.png'
                                    alt='Dan Abramov'
                                />
                                <Text fontSize="4xl" fontWeight="bold">Node JS</Text>
                            </HStack>
                        </Button>
                    </Link>

                    <Link href="/elixir" passHref>
                        <Button
                            as="a"
                            type="submit"
                            size="12"
                            colorScheme="facebook" //cor do botão
                            color="white"
                            p="8"
                            bg="gray.800"
                            borderRadius={8}
                        >
                            <HStack>
                                <Image
                                    borderRadius='full'
                                    boxSize='12'
                                    src='https://i.ibb.co/YZdPyq0/elixir.png'
                                    alt='Dan Abramov'
                                />
                                <Text fontSize="4xl" fontWeight="bold">Elixir</Text>
                            </HStack>
                        </Button>
                    </Link>
                </SimpleGrid>
            </Flex>
        </Flex >
    );
}