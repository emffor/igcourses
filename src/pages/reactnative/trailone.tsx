import { Box, Button, Flex, Heading, HStack, Icon, Link as ChakraLink, Stack, Text, useBreakpointValue, VStack, Wrap, WrapItem, Image, Center, Container, SimpleGrid, Divider } from "@chakra-ui/react";

import Link from "next/link";

import { FiCodesandbox } from 'react-icons/fi';
import { GiTrail } from "react-icons/gi";
import { HiChartSquareBar } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";

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
                            <Heading size="lg">React Native - Trilha 2021</Heading>
                        </Stack>

                        {/* Desafio Organizando */}
                        <Flex
                            as="a"
                            type="submit"
                            borderRadius={8}
                            bg="green.900"
                            color="white"
                            mb={["6", "8"]}
                            p={["6", "8"]}
                        >
                            <HStack width="100%">
                                <VStack width="100%" spacing="4" align="stretch">
                                    <HStack justifyContent="space-between">
                                        <Heading size="lg">
                                            Desafio: Organizando seus estudos
                                        </Heading>

                                        <Icon as={GiTrail} fontSize="40" color="orange" mb={110} />
                                    </HStack>
                                    <Text>

                                    </Text>

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
                            </HStack>
                        </Flex>

                        {/* Ignite Start React JS */}
                        <Stack>
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
                                        <Heading size="lg">
                                            Ignition sequence start React Native
                                        </Heading>
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
                                            mb={110}
                                            mr="8"
                                        />


                                    </VStack>
                                </HStack>
                            </Flex>
                        </Stack>

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
                                            src='https://i.ibb.co/HY54YgB/foto01.png'
                                            alt='reactnative01'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Fundamentos React Native
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>04:06:40 em 28 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Vamos aprender o ecossistema do desenvolvimento mobile com React Native, criar e compreender a estrutura de projetos React Native com a CLI além de conhecer os principais conceitos por volta da biblioteca como componentes, propriedades, estado, imutabilidade, hooks, estilização e utilização do TypeScript.
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
                                bg={"green.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Conceitos do React Native
                                    </Heading>

                                    <Icon as={FiCodesandbox} color="green.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text color="gray.300">
                                        Nesse desafio você irá aplicar tudo que aprendeu até agora no React Native enquanto constrói um App de tarefas.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            color="green.100"
                                            mb={["6", "8"]}
                                        >
                                            INSTRUÇÕES
                                        </Button>
                                    </Link>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Desafio 02 */}
                        <Stack mb={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"green.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Adicionando edição e alertas
                                    </Heading>

                                    <Icon as={MdOutlineDesignServices} color="green.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text color="gray.300">
                                        Nesse desafio você irá adicionar alertas e edição de todos na aplicação desenvolvida no desafio anterior.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            color="green.100"
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
                        </Stack>

                        {/* Texto Projeto 2 */}
                        <Stack>
                            <Text mb="6">
                                Neste capítulo criaremos uma aplicação completa utilizando React Native, TypeScript e Styled Components (CSS-in-JS) para ir mais a fundo em estilização e criação de interfaces no React Native baseando-se em um layout do Figma. Você também irá aprender a utilizar API Nativas, Armazenamento Local com Async Storage, Navegação, Formulários e Login Social. E para dar um Booster na produtividade vamos utilizar o Expo Bare Workflow.
                            </Text>
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
                                            src='https://i.ibb.co/JkqbMGm/foto02.png'
                                            alt='reactnative02'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Expo e Styled Components
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>04:27:30 em 21 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Neste módulo você irá conhecer o Expo, um Framework que nos oferece um conjunto de ferramentas e serviços criados em torno de plataformas React Native que irão turbinar o nosso desenvolvimento. E você também irá aprender a utilizar o Styled Components para criar interfaces com o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript. E por que eu deveria usar o Styled Components? A resposta é simples: praticidade.
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

                        {/* cap 02 */}
                        <Stack mt="5">
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
                                            src='https://i.ibb.co/z8D3F8G/foto03.png'
                                            alt='reactnative02'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Formulários e Navegação

                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>03:12:49 em 14 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Neste módulo você irá aprender a utilizar o React Hooks Forms com a proposta de criar formulários flexíveis, com formas simples de fazer validação e sem renderizações desnecessárias. Também você irá aprender a criar a navegação entre telas mobile.
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

                        {/* cap 03 */}
                        <Stack mt="5">
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
                                            src='https://i.ibb.co/L511cxT/foto04.png'
                                            alt='reactnative02'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Async Storage
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>03:03:27 em 16 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Neste módulo você irá aprender a utilizar o Async Storage para armazenar dados no dispositivo do usuário. O Async Storage é uma ótima estratégia de armazenamento quando não há muitas regras e relacionamento envolvido, pois o sistema de armazenamento é simples e baseado em chave e valor (key-value), assíncrono e persistente. E de quebra, vamos criar o gráfico da nossa aplicação.
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

                        {/* cap 04 */}
                        <Stack mt="5">
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
                                            src='https://i.ibb.co/QN3vrPd/foto05.png'
                                            alt='reactnative05'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Contextos e Autenticação
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>02:40:49 em 17 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Neste módulo você irá aprender a utilizar Login Social com OAuth Authentication que é uma estratégia incrível que permite utilizar os dados do usuário de uma conta já existente, como por exemplo, uma conta Google. A autenticação com Login Social traz conforto para o usuário que não precisa criar uma nova conta do zero e pode ir direto para o que realmente interessa que é utilizar nosso App. E tem mais, neste módulo você também irá aprender a utilizar a Context API para compartilhar dados com toda a sua aplicação (ou parte dela). E de quebra, você irá aprender a criar o seu próprio Hook. Utilizaremos essa combinação perfeita para armazenar e acessar os dados do usuário em um único lugar.
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

                        {/* Desafio 03 */}
                        <Stack my={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"green.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: SavePass
                                    </Heading>

                                    <Icon as={FiCodesandbox} color="green.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text color="gray.300">
                                        Nesse desafio você irá treinar o que aprendeu até agora com React Hook Form e navegação construindo um aplicativo para gerenciamento de senhas.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            color="green.100"
                                            mb={["6", "8"]}
                                        >
                                            INSTRUÇÕES
                                        </Button>
                                    </Link>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Desafio 04 */}
                        <Stack mb={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"green.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Login Social com Twitch
                                    </Heading>

                                    <Icon as={HiChartSquareBar} color="green.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text color="gray.300">
                                        Nesse desafio você irá implementar todo o fluxo de login e logout utilizando o OAuth da Twitch.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            color="green.100"
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

                        {/* The Great Leap */}
                        <Stack mb={5}>
                            <Flex
                                as="a"
                                type="submit"
                                borderRadius={8}
                                bg="#361d37"
                                color="white"
                            >
                                <HStack>
                                    <VStack
                                        spacing="4"
                                        align="stretch"
                                        p={["6", "8"]}
                                    >
                                        <Heading size="lg">The Great Leap</Heading>
                                        <Text>
                                            Aprenda a aprender e vá mais longe. Conheça e domine o método responsável por acelerar sua curva de aprendizado e carreira.
                                        </Text>

                                        <Stack>
                                            <Link href="/reactjs" passHref>
                                                <ChakraLink as="a" color="#bd83bf">
                                                    Assistir vídeo
                                                </ChakraLink>
                                            </Link>
                                        </Stack>
                                    </VStack>

                                    <VStack
                                    >
                                        <Icon
                                            as={GoDeviceCameraVideo}
                                            fontSize="40"
                                            color="#bd83bf"
                                            mb={110}
                                            mr="8"
                                        />
                                    </VStack>
                                </HStack>
                            </Flex>
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
                                            src='https://i.ibb.co/2YKXWJK/foto06.png'
                                            alt='foto06'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Consumindo API
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>07:32:06 em 32 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Neste módulo você irá aprender a integrar sua aplicação React Native com uma API. Você irá compreender os métodos do protocolo HTTP, lidar com requisições e respostas realizadas a uma API. Para integrar e consumir API utilizaremos o Axios.
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

                        {/* cap 02 */}
                        <Stack mt="5">
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
                                            src='https://i.ibb.co/vvhxY33/foto07.png'
                                            alt='foto07'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Animações
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>03:00:01 em 17 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Hora de levar nossos conhecimentos sobre o desenvolvimento de interfaces para o próximo nível conhecendo e aplicando na prática ferramentas e técnicas que estarão presentes nas sua aplicações no futuro aplicando boas práticas de UX e Animações.
                                    </Text>
                                </Flex>

                                <Link href="/reactjs/library/libraryOne" passHref>
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



                        {/* desafio 05 */}
                        <Stack my={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"green.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: GitHub Explorer
                                    </Heading>

                                    <Icon as={FiCodesandbox} color="green.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text color="gray.300">
                                        Nesse desafio, você irá treinar o que aprendeu até agora sobre animações no React Native com o GitHub Explorer: uma aplicação que exibe informações sobre repositórios do GitHub.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            color="green.100"
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
                                            src='https://i.ibb.co/nb4D7Hd/foto08.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Offline First
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>09:48:46 em 48 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        É hora de implementar a estratégia de Offline First para que algumas funcionalidades da nossa aplicação funcione sem conexão com internet utilizando um banco de dados local mais robusto.
                                    </Text>
                                </Flex>

                                <Link href="/reactjs/library/libraryOne" passHref>
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

                        {/* Projeto 05 */}
                        <Stack mt="70" mb="10">
                            <Heading size="lg" color="green.300">Projeto 05</Heading>
                        </Stack>

                        {/* Texto 5*/}
                        <Stack>
                            <Text mb="6">
                                Nesse módulo vamos entender como criar testes automatizados no React Native garantindo que nossos componentes e funcionalidades continuem funcionando independente de novas manutenções. E também, irá aprender como performar suas aplicações.
                            </Text>
                        </Stack>

                        {/* cap 01 */}
                        <Stack mt={5}>
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
                                            src='https://i.ibb.co/GcCxf28/foto09.png'
                                            alt='foto09.1'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Testes no React Native
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                04:38:10 em 27 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Testes automatizados é uma excelente estratégia para garantir que componentes e funcionalidades continuem funcionando independente de novas manutenções.
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

                        {/* cap 02 */}
                        <Stack mt={5}>
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
                                            src='https://i.ibb.co/GcCxf28/foto09.png'
                                            alt='foto09.1'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Performando Apps
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                02:32:20 em 11 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Em em aplicações mobile você pode ter a preocupação com performance e, por isso, nesse módulo entenderemos como performar aplicações no React Native entendendo como funcionam os algoritmos internos da biblioteca e todo fluxo de renderização de componentes.
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

                        {/* Projeto 06 */}
                        <Stack mt="70" mb="10">
                            <Heading size="lg" color="green.300">Projeto 06</Heading>
                        </Stack>

                        {/* Texto 6*/}
                        <Stack>
                            <Text mb="6">
                                Chegou o momento de disponibilizar os seus Apps para os seus usuários. Por isso, aqui vamos entender as técnicas de publicação de Apps e compreender como realizar o deploy de nossas aplicações com o fluxo de CI/CD.
                            </Text>
                        </Stack>

                        {/* cap 01 */}
                        <Stack mt={5}>
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
                                            src='https://i.ibb.co/18XqMgz/foto10.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Publicação de Apps
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                04:13:51 em 24 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo aprenderemos a enviar a aplicação para Android à Google Play Store e o app iOS para Apple Store para disponibilizarmos nossa aplicação para o mundo.
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

                        {/* cap 02 */}
                        <Stack mt={5}>
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
                                            src='https://i.ibb.co/18XqMgz/foto10.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Fluxo de CI/CD
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                02:59:00 em 18 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo vamos buscar automatizar o processo de criação das próximas builds para as nossas aplicações assim que uma novar versão for enviada para o repositório. E para isso, vamos implementar a estratégia de CI/CD, isto é, Continuous Integration e Continuous Delivery.
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

                        {/* desafio 09 */}
                        <Stack my={5}>
                            <Flex
                                flex="1"
                                width="200"
                                flexDirection="column"
                                maxWidth={1480}
                                px={["6", "6", "8"]}
                                bg={"green.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Deploy do GoFinances

                                    </Heading>

                                    <Icon as={FiCodesandbox} color="green.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text color="gray.300">
                                        Nesse desafio você irá realizar a configuração de ícones e splash screen e a publicação do seu app no Expo.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Link href="/reactjs/library/libraryOne" passHref>
                                        <Button
                                            as="a"
                                            colorScheme="green"
                                            color="green.100"
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