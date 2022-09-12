import { Box, Button, Flex, Heading, HStack, Icon, Link as ChakraLink, Stack, Text, useBreakpointValue, VStack, Wrap, WrapItem, Image, Center, Container, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { GiTrail } from "react-icons/gi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function TrailOne() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

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

                    <Flex
                        flexDirection="column"
                    >
                        <Stack
                            mb={["2", "4"]}
                            color="green.300"
                        >
                            <Heading size="lg">Trilha 2021</Heading>
                        </Stack>


                        {/* Desafio 01 */}
                        <Flex
                            as="a"
                            type="submit"
                            borderRadius={8}
                            bg="green.900"
                            color="white"
                            mb={["6", "8"]}
                        >

                            <HStack>
                                <VStack
                                    spacing="4"
                                    align="stretch"
                                    p={["6", "8"]}
                                >
                                    <Heading size="lg">Desafio: Organizando seus estudos</Heading>
                                    <Text>Bora criar um cronograma de estudos e definir seu objetivo</Text>
                                    <Wrap spacing={4}>
                                        <WrapItem>
                                            <ChakraLink>
                                                <Button
                                                    as="a"
                                                    colorScheme="green"
                                                    color="green.100"
                                                    onClick={OpenChallenge01}
                                                >
                                                    Introdução
                                                </Button>
                                            </ChakraLink>
                                        </WrapItem>
                                    </Wrap>
                                </VStack>

                                <VStack>
                                    <Icon
                                        as={GiTrail}
                                        fontSize="40"
                                        color="orange"
                                        mb={110}
                                        mr={["1", "4"]}
                                    />
                                </VStack>
                            </HStack>
                        </Flex>

                        {/* Ignite Start React JS */}
                        <Flex
                            as="a"
                            type="submit"
                            borderRadius={8}
                            bg="#361d37"
                            color="white"
                            mb={["20", "24"]}
                        >
                            <HStack>
                                <VStack
                                    spacing="4"
                                    align="stretch"
                                    p={["6", "8"]}
                                >
                                    <Heading size="lg">Ignition sequence start - React</Heading>
                                    <Text>
                                        Prepare-se para decolar! Queremos te dar as boas-vindas ao Ignite e mostrar qual será seu percurso no programa de aceleração.
                                    </Text>

                                    <Stack>
                                        <Link href="/reactjs" passHref>
                                            <ChakraLink as="a" color="#bd83bf">
                                                Assistir vídeo
                                            </ChakraLink>
                                        </Link>
                                    </Stack>
                                </VStack>

                                <VStack>
                                    <Icon
                                        as={GoDeviceCameraVideo}
                                        fontSize="40"
                                        color="#bd83bf"
                                        mr={["1", "4"]}
                                        mb={110}
                                    />
                                </VStack>
                            </HStack>
                        </Flex>

                        {/* Projeto 01 */}

                        <Flex
                            mb="8"
                            color="green.200"
                        >
                            <Stack>
                                <Heading size="lg">Projeto 01</Heading>
                            </Stack>
                        </Flex>

                        <Flex
                            flex="1"
                            width="200"
                            flexDirection="column"
                            maxWidth={1480}
                            px={["6", "6", "8"]}
                            bg={"gray.800"} //estilo do container
                            borderRadius={8}
                            pt={["6", "8"]}
                        >
                            <HStack
                                flex={"1"}
                                align="flex-start"

                            >
                                <Stack boxSize="28" >
                                    <Image
                                        objectFit='cover'
                                        src='https://i.ibb.co/j8rn1RS/react01.png'
                                        alt='fundamentos'
                                    />
                                </Stack>

                                <HStack width="100%" pl="12px">
                                    <Stack mr={"auto"}>
                                        <Heading size={["sm", "lg"]} color="white">
                                            Fundamentos do ReactJS
                                        </Heading>
                                    </Stack>

                                    <Stack>
                                        <Text fontSize='sm'>02:46:00 em 24 aulas</Text>
                                    </Stack>
                                </HStack>
                            </HStack>

                            <Flex
                                pl="120px"
                                py="8"
                                mt="-20"
                            >
                                <Text>
                                    Nesse módulo criaremos a estrutura base de uma aplicação React utilizando ferramentas como Webpack, Babel, Webpack Dev server, SASS, Source Maps, Fast Refresh e descobriremos conceitos importantes do React como componentes, propriedades, estados e hooks além de aplicar o TypeScript no nosso projeto para adicionar tipagem estática à aplicação.
                                </Text>
                            </Flex>

                            <Link
                                href="/reactjs/"
                            >
                                <Button
                                    as="a"
                                    colorScheme="green"
                                    color="green.100"
                                    mb={["6", "8"]}
                                >
                                    ACESSAR BIBLIOTECA DE VIDEOS
                                </Button>
                            </Link>
                        </Flex>

                    </Flex>
                </SimpleGrid>
            </Flex>
        </Box >
    );
}