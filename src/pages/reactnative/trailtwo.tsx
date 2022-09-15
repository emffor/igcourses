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
                        <Stack mb={["2", "4"]} color="green.300">
                            <Heading size="lg">React Native - Trilha 2022</Heading>
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
                                <VStack spacing="4" align="stretch" p={["6", "8"]}>
                                    <Heading size="lg">
                                        Boas vindas ao novo conteúdo de React Native
                                    </Heading>
                                    <Text>
                                        Aprenda com o que há de mais atual em React Native e acompanhe a evolução da tecnologia. Recomendamos que continue seus estudos nesta trilha. Em breve outras aulas serão liberadas, veja as novidades.
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
                                <HStack flex={"1"} align="flex-start">
                                    <Stack boxSize="28" >
                                        <Image
                                            objectFit='cover'
                                            src='https://i.ibb.co/HY54YgB/foto01.png'
                                            alt='foto011'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Fundamentos do React Native
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>05:11:28 em 45 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Neste módulo criaremos uma aplicação React Native utilizando o Expo Manager Workflow e aprenderemos sobre os conceitos mais importantes do React e do React Native, entre eles estão a componentização, estados, imutabilidade, hooks e como o React Native renderiza interfaces nativas. Além de aplicar o Typescript em nosso projeto para adicionar tipagem estática à aplicação.
                                    </Text>
                                </Flex>

                                <Link href="/reactnative/library/libraryOne" passHref>
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
                                        Nesse desafio você vai reforçar os conceitos vistos em aula e aprender novos, na prática, ao construir do zero um app de tarefas.
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
                                            src='https://i.ibb.co/HY54YgB/foto01.png'
                                            alt='foto011.1'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Criando Interfaces & Navegação
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'> 08:11:36 em 66 aulas </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex
                                    pl="120px"
                                    py="8"
                                    mt="-20"
                                >
                                    <Text>
                                        Nesse módulo construiremos uma aplicação completa seguindo um Design System e utilizando conceitos e ferramentas importantes como CSS-in-Js com Styled Components, Navegação, Armazenamento Local e muito mais.
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
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Daily Diet
                                    </Heading>
                                    <Icon as={FiCodesandbox} color="cyan.400" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio você vai continuar reforçando os conceitos mais importantes do React Native, porém aplicando três pontos principais que vimos ao longo desse modulo.
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
                                    React Native
                                </Text>
                            </Box>
                        </Stack>
                    </Flex>
                </SimpleGrid>
            </Flex >
        </Box >
    );
}