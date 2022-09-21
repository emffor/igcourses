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


    function OpenChallenge(link: string) {
        window.open(link, "_blank");
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
                            <Heading size="lg">React JS - Trilha 2021</Heading>
                        </Stack>


                        {/* Desafio Study */}
                        <Stack>
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

                                            <Icon
                                                as={GiTrail}
                                                fontSize="40"
                                                color="orange"
                                                mb={110}
                                            />
                                        </HStack>
                                        <Text>
                                            Bora criar um cronograma de estudos e definir seu objetivo
                                        </Text>

                                        <Wrap spacing={4}>
                                            <WrapItem>
                                                <ChakraLink>
                                                    <Button
                                                        as="a"
                                                        colorScheme="green"
                                                        color="green.100"
                                                        onClick={() => OpenChallenge('https://jolly-helenium-84a.notion.site/Cronograma-de-Estudos-54c1d510349e4990b27fdd4af7209133')}
                                                    >
                                                        Introdução
                                                    </Button>
                                                </ChakraLink>
                                            </WrapItem>
                                        </Wrap>
                                    </VStack>
                                </HStack>
                            </Flex>
                        </Stack>

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
                                <VStack spacing="4" align="stretch" p={["6", "8"]}>
                                    <Heading size="lg">Ignition sequence start - React</Heading>
                                    <Text>
                                        Prepare-se para decolar! Queremos te dar as boas-vindas ao Ignite e mostrar qual será seu percurso no programa de aceleração.
                                    </Text>

                                    <Wrap spacing={4}>
                                        <WrapItem>
                                            <ChakraLink>
                                                <Button
                                                    color='#bd83bf'
                                                    variant='link'
                                                    onClick={() => OpenChallenge('https://drive.google.com/file/d/1JxdYx-xH09wpxckrHmD-ippns004EmCh/view?usp=sharing')}
                                                >
                                                    Assistir vídeo
                                                </Button>
                                            </ChakraLink>
                                        </WrapItem>
                                    </Wrap>
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

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo criaremos a estrutura base de uma aplicação React utilizando ferramentas como Webpack, Babel, Webpack Dev server, SASS, Source Maps, Fast Refresh e descobriremos conceitos importantes do React como componentes, propriedades, estados e hooks além de aplicar o TypeScript no nosso projeto para adicionar tipagem estática à aplicação.
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
                                        Desafio: Conceitos do React
                                    </Heading>

                                    <Icon as={FiCodesandbox} color="cyan.200" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no ReactJS. Essa será uma aplicação onde o seu principal objetivo é uma pequena aplicação de atividades a fazer, para treinar um pouco mais sobre manipulação do estado no React.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => OpenChallenge('https://jolly-helenium-84a.notion.site/Desafio-01-Conceitos-do-React-f03fb19ee7f24a24bc98b88324a2d3d5')}
                                    >
                                        INSTRUÇÕES
                                    </Button>
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
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Componentizando a aplicação
                                    </Heading>

                                    <Icon
                                        as={MdOutlineDesignServices}
                                        color="cyan.200"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio iremos dividir uma aplicação em componentes afim de isolar as responsabilidades e facilitar a manutenção do código.
                                    </Text>
                                </Flex>

                                <Stack direction="row">

                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => OpenChallenge('https://jolly-helenium-84a.notion.site/Desafio-02-Componentizando-a-aplica-o-682b99664117420997b7330c18bae455')}
                                    >
                                        INSTRUÇÕES
                                    </Button>

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
                                            src='https://i.ibb.co/6njfMmv/foto02.png'
                                            alt='fundamentos'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Primeira aplicação web com ReactJS
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>03:50:09 em 30 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo construiremos uma aplicação front-end web completa utilizando conceitos e ferramentas importantes do ecossistema React como Styled Components, MirageJS, Context API, hooks, Axios e muito mais.
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

                        {/* Desafio 03 */}
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
                                        Desafio: Criando um hook de carrinho de compras
                                    </Heading>

                                    <Icon as={FiCodesandbox} color="cyan.400" fontSize="50" />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio, você deverá criar um hook para gerenciar um carrinho de compras.
                                    </Text>
                                </Flex>

                                <Stack direction="row">

                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => OpenChallenge(
                                            'https://jolly-helenium-84a.notion.site/Desafio-01-Criando-um-hook-de-carrinho-de-compras-5007db9c82fb427a833a868be7870b85'
                                        )}
                                    >
                                        INSTRUÇÕES
                                    </Button>

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
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Refactoring de classes e TypeScript
                                    </Heading>

                                    <Icon
                                        as={MdOutlineDesignServices}
                                        color="cyan.400"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio, você deverá migrar uma aplicação de Javascript e Class Components para Typescript e Function Components
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => OpenChallenge('https://jolly-helenium-84a.notion.site/Desafio-02-Refactoring-de-classes-e-typescript-cd1776af20f5470d93796357c5fb077d')}
                                    >
                                        INSTRUÇÕES
                                    </Button>

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
                                    <VStack spacing="4" align="stretch" p={["6", "8"]}>
                                        <Heading size="lg">The Great Leap</Heading>
                                        <Text>
                                            Aprenda a aprender e vá mais longe. Conheça e domine o método responsável por acelerar sua curva de aprendizado e carreira.
                                        </Text>

                                        <Stack>
                                            <Wrap spacing={4}>
                                                <WrapItem>
                                                    <ChakraLink>
                                                        <Button
                                                            color='#bd83bf'
                                                            variant='link'
                                                            onClick={() => OpenChallenge('https://drive.google.com/file/d/1mN15XWLR0kZPyzDPoc4lL4ycWZ0bTSqm/view?usp=sharing')}
                                                        >
                                                            Assistir vídeo
                                                        </Button>
                                                    </ChakraLink>
                                                </WrapItem>
                                            </Wrap>
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
                                            src='https://i.ibb.co/B67m93y/foto03.png'
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
                                            <Text fontSize='sm'>02:23:34 em 16 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo entenderemos como o Next.js transforma a nossa maneira de desenvolver aplicações front-end e descobriremos conceitos importantes como SSR e SSG.
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
                                            src='https://i.ibb.co/QKjdmHm/foto04.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Back-end no front-end
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>02:38:54 em 17 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Durante esse módulo entenderemos como o front-end se transformou nos últimos anos com a possibilidade de termos funções back-end (serverless) executando em um ambiente front-end.
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
                                            src='https://i.ibb.co/W0g3wMR/foto05.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Front-end JAMStack
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                02:05:30 em 12 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        É muito comum o desenvolvimento de aplicações front-end que não estão conectadas a um único back-end hoje em dia, por isso, aqui vamos entender o conceito de JAMStack e como conectar nosso front-end com um CMS.
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
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Criando uma aplicação do zero
                                    </Heading>

                                    <Icon
                                        as={MdOutlineDesignServices}
                                        color="cyan.400"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio você deve criar do zero uma aplicação de um blog com Prismic CMS a partir de um layout do Figma
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => {
                                            window.open('https://jolly-helenium-84a.notion.site/Desafio-01-Criando-um-projeto-do-zero-317c0136f9eb4a86985ed21f490f57b6')
                                        }}
                                    >
                                        INSTRUÇÕES
                                    </Button>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Projeto 04 */}
                        <Stack
                            mt="70"
                            mb="10"
                        >
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
                                <HStack
                                    flex={"1"}
                                    align="flex-start"

                                >
                                    <Stack boxSize="28" >
                                        <Image
                                            objectFit='cover'
                                            src='https://i.ibb.co/F72wmwQ/foto06.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Construindo interfaces do futuro
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>03:37:07 em 29 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex
                                    pl="120px"
                                    py="8"
                                    mt="-20"
                                >
                                    <Text>
                                        Nesse módulo criaremos a interface de um painel administrativo contendo fluxo de autenticação, dashboard, listagem e cadastro usando Chakra UI no Next.js.
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

                        {/* desafio 06 */}
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
                                        Desafio: Interface com Chakra UI
                                    </Heading>

                                    <Icon as={HiChartSquareBar} color="cyan.400" fontSize="50" />
                                </HStack>

                                <Flex
                                    py="8"
                                >
                                    <Text>
                                        Nesse desafio, você deverá desenvolver toda a interface de uma aplicação utilizando como base o Chakra UI.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => {
                                            window.open('https://jolly-helenium-84a.notion.site/Desafio-01-Interface-com-Chakra-UI-e59fa7dca8e844b3a41f27c81ba2b5c0')
                                        }}
                                    >
                                        INSTRUÇÕES
                                    </Button>

                                </Stack>
                            </Flex>
                        </Stack>

                        {/* cap 02 */}
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
                                            src='https://i.ibb.co/Km6YVNS/foto07.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Data fetching e cache local
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>01:57:47 em 15 aulas</Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo vamos utilizar o React Query para melhorar a experiência de uso da nossa aplicação criando uma camada de cache de dados entre o front-end e back-end.
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
                                <HStack
                                    flex={"1"}
                                    align="flex-start"
                                >
                                    <Stack boxSize="28" >
                                        <Image
                                            objectFit='cover'
                                            src='https://i.ibb.co/M2DSjS7/foto08.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Autenticação e autorização
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                02:47:40 em 18 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex
                                    pl="120px"
                                    py="8"
                                    mt="-20"
                                >
                                    <Text>
                                        Nesse módulo vamos entender como criar um processo completo de autenticação, autorização e refresh token dentro do React com Next.js permitindo controlar o acesso à rotas e componentes tanto no client-side quando server-side.
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

                        {/* desafio 07 */}
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
                                <HStack width="100%">
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Upload de imagens
                                    </Heading>

                                    <Icon
                                        as={MdOutlineDesignServices}
                                        color="cyan.400"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio você deve realizar o upload e listagem de imagens utilizando React Query, React Hook Form e Chakra UI.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => {
                                            window.open('https://jolly-helenium-84a.notion.site/Desafio-02-Upload-de-imagens-c6706089b25c42bdb3c29ee179c89959', '_blank')
                                        }}
                                    >
                                        INSTRUÇÕES
                                    </Button>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* Projeto 05 */}
                        <Stack mt="70" mb="10">
                            <Heading size="lg" color="green.300">Projeto 05</Heading>
                        </Stack>

                        {/* Advance and Explore */}
                        <Stack>
                            <Flex
                                as="a"
                                type="submit"
                                borderRadius={8}
                                bg="#361d37"
                                color="white"
                            >
                                <HStack>
                                    <VStack spacing="4" align="stretch" p={["6", "8"]}>
                                        <Heading size="lg">Advance and Explore</Heading>

                                        <Text>
                                            Chegando na reta final do Ignite, e você passou por vários desafios, aprendendo a aprender. Chegou a hora de colocar a insegurança de lado e continuar a pilotar o foguete para a missão final do Ignite.
                                        </Text>

                                        <Stack>
                                            <Wrap spacing={4}>
                                                <WrapItem>
                                                    <ChakraLink>
                                                        <Button
                                                            color='#bd83bf'
                                                            variant='link'
                                                            onClick={() => OpenChallenge('https://drive.google.com/file/d/10qD70R_4G-sCpUxw6vwSEMcUVSc3Idsr/view?usp=sharing')}
                                                        >
                                                            Assistir vídeo
                                                        </Button>
                                                    </ChakraLink>
                                                </WrapItem>
                                            </Wrap>
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
                                            src='https://i.ibb.co/sRxyFSs/foto09.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Performando apps com ReactJS
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                01:36:35 em 10 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex
                                    pl="120px"
                                    py="8"
                                    mt="-20"
                                >
                                    <Text>
                                        Uma preocupação comum no desenvolvimento de aplicações web é a performance e, por isso, nesse módulo entenderemos como performar aplicações com React entendendo como funcionam os algoritmos internos da biblioteca e todo fluxo de renderização de componentes.
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

                        {/* desafio 08 */}
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
                                        Desafio: Otimizando a aplicação
                                    </Heading>

                                    <Icon
                                        as={MdOutlineDesignServices}
                                        color="cyan.400"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex py="8">
                                    <Text>
                                        Nesse desafio, você irá aplicar estratégias de otimização no React conforme visto no módulo anterior para performar uma aplicação já pronta.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => {
                                            window.open('https://jolly-helenium-84a.notion.site/Desafio-01-Otimizando-a-aplica-o-def2b13641d74a58826a3292494472f8', '_blank')
                                        }}
                                    >
                                        INSTRUÇÕES
                                    </Button>

                                </Stack>
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
                                            src='https://i.ibb.co/B6Q5CcC/foto10.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Testes unitários no React
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                01:50:43 em 14 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo vamos entender como criar testes automatizados de unidade dentro do React garantindo que nossos componentes e páginas continuem funcionando independente de novas manutenções. Tudo isso usando Jest e Testing Library.
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
                                            src='https://i.ibb.co/26QmwBG/foto11.png'
                                            alt='Fundamentos do Next.js'
                                        />
                                    </Stack>

                                    <HStack width="100%" pl="12px">
                                        <Stack mr={"auto"}>
                                            <Heading size={["sm", "lg"]} color="white">
                                                Estratégias de deploy no ReactJS
                                            </Heading>
                                        </Stack>

                                        <Stack>
                                            <Text fontSize='sm'>
                                                44:28 em 3 aulas
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </HStack>

                                <Flex pl="120px" py="8" mt="-20">
                                    <Text>
                                        Nesse módulo vamos conhecer as principais estratégias de deploy de uma aplicação ReactJS com e sem Next.js utilizando serviços como Netlify e Vercel principalmente, mas também apresentando outras opções para projetos mais complexos.
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
                                bg={"purple.900"} //estilo do container
                                borderRadius={8}
                                pt={["6", "8"]}
                            >
                                <HStack
                                    width="100%"
                                >
                                    <Heading size={["sm", "lg"]} color="white" mr="auto">
                                        Desafio: Deploy da aplicação
                                    </Heading>

                                    <Icon
                                        as={HiChartSquareBar}
                                        color="cyan.400"
                                        fontSize="50"
                                    />
                                </HStack>

                                <Flex
                                    py="8"
                                >
                                    <Text>
                                        Nesse desafio você irá colocar uma aplicação em produção usando das abordagens aprendidas durante o capítulo.
                                    </Text>
                                </Flex>

                                <Stack direction="row">
                                    <Button
                                        as="a"
                                        colorScheme="purple"
                                        bg="purple.800"
                                        color="purple.400"
                                        mb={["6", "8"]}
                                        onClick={() => {
                                            window.open('https://jolly-helenium-84a.notion.site/Desafio-01-Deploy-do-Ignews-c30473a1c66a47f8b7affaa959a0ea22', '_blank')
                                        }}
                                    >
                                        INSTRUÇÕES
                                    </Button>
                                </Stack>
                            </Flex>
                        </Stack>

                        {/* The Expanding Universe */}
                        <Stack>
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
                                        <Heading size="lg">The Expanding Universe</Heading>

                                        <Text>
                                            Como no New Horizons, missão não tripulada da Nasa, você chegou na missão final e cumpriu seus objetivos no Ignite. Chegou a hora de continuar para uma nova missão, agora para fora da nossa galáxia.
                                        </Text>

                                        <Stack>
                                            <Wrap spacing={4}>
                                                <WrapItem>
                                                    <ChakraLink>
                                                        <Button
                                                            color='#bd83bf'
                                                            variant='link'
                                                            onClick={() => OpenChallenge('https://drive.google.com/file/d/1IKYhwbfOPJH8DB1QyyE8-tlq5Ia8Kp7m/view?usp=sharing')}
                                                        >
                                                            Assistir vídeo
                                                        </Button>
                                                    </ChakraLink>
                                                </WrapItem>
                                            </Wrap>
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