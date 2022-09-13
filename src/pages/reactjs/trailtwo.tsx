import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Link as ChakraLink,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
    Image,
    SimpleGrid
} from "@chakra-ui/react";

import Link from "next/link";
import { FiCodesandbox } from 'react-icons/fi';
import { MdOutlineDesignServices } from "react-icons/md";

import { GoDeviceCameraVideo } from "react-icons/go";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function trailTwo() {
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
                            <Heading size="lg">Trilha 2022</Heading>
                        </Stack>

                        {/* Trilha Atualizada */}
                        <Flex
                            as="a"
                            type="submit"
                            borderRadius={8}
                            bg="green.900"
                            color="white"
                            mb={["20", "24"]}
                        >
                            <HStack>
                                <VStack
                                    spacing="4"
                                    align="stretch"
                                    p={["6", "8"]}
                                >
                                    <Heading size="lg">
                                        Boas-vindas ao novo conteúdo de ReactJS
                                    </Heading>
                                    <Text>
                                        Aprenda com o que há de mais atual em ReactJS e acompanhe a evolução da tecnologia. Recomendamos que continue seus estudos nesta trilha. Em breve outras aulas serão liberadas, veja as novidades.
                                    </Text>

                                    <Stack>
                                        <Link href="/reactjs" passHref>
                                            <ChakraLink as="a" color="green.200">
                                                Assistir vídeo
                                            </ChakraLink>
                                        </Link>
                                    </Stack>
                                </VStack>

                                <VStack>
                                    <Icon
                                        as={GoDeviceCameraVideo}
                                        fontSize="40"
                                        color="green.100"
                                        mb={110}
                                        mr="8"
                                    />
                                </VStack>
                            </HStack>
                        </Flex>

                        {/* Projeto 01 */}
                        <Stack mb={5}>
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
                                            src='https://i.ibb.co/7rBZ57W/f01.png'
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
                                            <Text fontSize='sm'>05:59:49 em 31 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo, criaremos uma aplicação React utilizando o Vite e aprenderemos sobre os conceitos mais importantes do React, entre eles estão componentização, propriedades, estados, imutabilidade e hooks, além de aplicar o TypeScript no nosso projeto para adicionar tipagem estática à aplicação.
                                    </Text>
                                </Flex>

                                <Link
                                    href="/reactjs/library/libraryOne"
                                    passHref
                                >
                                    <Button
                                        as="a"
                                        colorScheme="facebook"
                                        bg="blue.800"
                                        color="blue.100"
                                        mb={["6", "8"]}
                                    >
                                        ACESSAR BIBLIOTECA DE VIDEOS
                                    </Button>
                                </Link>
                            </Flex>
                        </Stack>

                        {/* Desafio 01 */}
                        <Stack mb={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Praticando Conceitos
                                    </Heading>
                                    <Icon as={FiCodesandbox} color="cyan.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio você vai reforçar os conceitos mais importantes do ReactJS e aprender ainda mais conceitos que serão utilizados em todas as aplicações que você for desenvolver no futuro.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="purple"
                                            bg="purple.800"
                                            color="purple.400"
                                            mb={["6", "8"]}
                                        >
                                            INSTRUÇÕES
                                        </Button>
                                    </Link>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Projeto 02 */}
                        <Stack>
                            <Flex mt="70" mb="10" color="green.200">
                                <Stack>
                                    <Heading size="lg">Projeto 02</Heading>
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
                                <HStack flex={"1"} align="flex-start">
                                    <Stack boxSize="28" >
                                        <Image
                                            objectFit='cover'
                                            src='https://i.ibb.co/7rBZ57W/f01.png'
                                            alt='fundamentos'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Criando SPAs com ReactJS
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'> 06:53:36 em 45 aulas </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex
                                    pl="120px"
                                    py="8"
                                    mt="-20"
                                >
                                    <Text>
                                        Nesse módulo iremos construir uma aplicação completa com roteamento e diversos conceitos importantes do ecossistema React como ContextAPI, useReducer, immer e muito mais.
                                    </Text>
                                </Flex>

                                <Link
                                    href="/reactjs/library/libraryOne"
                                    passHref
                                >
                                    <Button
                                        as="a"
                                        colorScheme="facebook"
                                        bg="blue.800"
                                        color="blue.100"
                                        mb={["6", "8"]}
                                    >
                                        ACESSAR BIBLIOTECA DE VIDEOS
                                    </Button>
                                </Link>
                            </Flex>
                        </Stack>

                        {/* Desafio 02 */}
                        <Stack mb={5} mt={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Coffee Delivery
                                    </Heading>
                                    <Icon as={FiCodesandbox} color="cyan.400" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio vamos entrar ainda mais fundo em funcionalidades do React, e dessa vez adicionando também mais regras para praticar ainda mais o uso do ReactJS.
                                    </Text>
                                </Flex>

                                <Stack
                                    direction="row"
                                >
                                    <Link
                                        href="/reactjs/library/libraryOne"
                                        passHref
                                    >
                                        <Button
                                            as="a"
                                            colorScheme="purple"
                                            bg="purple.800"
                                            color="purple.400"
                                            mb={["6", "8"]}
                                        >
                                            INSTRUÇÕES
                                        </Button>
                                    </Link>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Projeto 03 */}
                        <Stack mt="70" mb="10">
                            <Heading size="lg" color="green.300">Projeto 03</Heading>
                        </Stack>

                        {/* cap 01 */}
                        <Stack>
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
                                            src='https://i.ibb.co/7rBZ57W/f01.png'
                                            alt='Projeto 03'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={"md"} color="white">
                                                Consumo de API e performance no ReactJS
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>03:41:51 em 27 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo construiremos uma aplicação front-end web completa, conectando a uma API e veremos como performar aplicações com o React entendendo como funcionam os algoritmos internos da biblioteca e todo fluxo de renderização de componentes.
                                    </Text>
                                </Flex>

                                <Link
                                    href="/reactjs/library/libraryOne"
                                    passHref
                                >
                                    <Button
                                        as="a"
                                        colorScheme="facebook"
                                        bg="blue.800"
                                        color="blue.100"
                                        mb={["6", "8"]}
                                    >
                                        ACESSAR BIBLIOTECA DE VIDEOS
                                    </Button>
                                </Link>
                            </Flex>
                        </Stack>

                        {/* desafio 03 */}
                        <Stack my={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Github Blog
                                    </Heading>

                                    <Icon
                                        as={MdOutlineDesignServices}
                                        color="cyan.400"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex
                                    py="8"
                                >
                                    <Text>
                                        Nesse desafio, vamos praticar a utilização de clientes HTTP consumindo a API do Github para criar um blog pessoal.
                                    </Text>
                                </Flex>

                                <Stack
                                    direction="row"
                                >
                                    <Link
                                        href="/reactjs/library/libraryOne"
                                        passHref
                                    >
                                        <Button
                                            as="a"
                                            colorScheme="purple"
                                            bg="purple.800"
                                            color="purple.400"
                                            mb={["6", "8"]}
                                        >
                                            INSTRUÇÕES
                                        </Button>
                                    </Link>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Projeto 04 */}
                        <Stack mt="70" mb="10">
                            <Heading size="lg" color="green.300">Projeto 04</Heading>
                        </Stack>

                        {/* cap 01 */}
                        <Stack>
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
                                <HStack flex={"1"} align="flex-start">
                                    <Stack boxSize="28" >
                                        <Image
                                            objectFit='cover'
                                            src='https://i.ibb.co/7rBZ57W/f01.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Fundamentos do Next.js
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                04:17:34 em 28 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo criaremos um projeto completo com o framework Next.js. Vamos utilizar StitchesJS, passando por conceitos de SPA, server-side rendering (SSR) e static-site generation (SSG).
                                    </Text>
                                </Flex>

                                <Link
                                    href="/reactjs/library/libraryOne"
                                    passHref
                                >
                                    <Button
                                        as="a"
                                        colorScheme="facebook"
                                        bg="blue.800"
                                        color="blue.100"
                                        mb={["6", "8"]}
                                    >
                                        ACESSAR BIBLIOTECA DE VIDEOS
                                    </Button>
                                </Link>
                            </Flex>
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
                                    React JS
                                </Text>
                            </Box>
                        </Stack>
                    </Flex>
                </SimpleGrid>
            </Flex >
        </Box >
    );
}