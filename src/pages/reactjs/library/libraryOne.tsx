import { AspectRatio, Box, Button, Flex, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import { BsTextareaResize } from "react-icons/bs";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { NavLink } from "../../../components/SidebarPlay/NavLink";
import { NavSection } from "../../../components/SidebarPlay/NavSection";


export default function libraryOne() {
    const [link, setLink] = useState("https://www.youtube.com/embed/yWopro9L55E");
    const [title, setTitle] = useState('Introdução do módulo');

    const [textSizeVideo, setTextSizeVideo] = useState('Aumentar');
    const [sizeVideo, setSizeVideo] = useState(true);
    const [widthSizeVideo, setWidthSizeVideo] = useState('864');
    const [heightSizeVideo, setHeightSizeVideo] = useState('480');

    function setLinkVideo(link: string, title: string) {
        setLink(link);
        setTitle(title);
    }

    function handleSizeVideo() {
        if (textSizeVideo === 'Aumentar') {
            setSizeVideo(false);
            setTextSizeVideo('Diminuir');
            setWidthSizeVideo('1200');
            setHeightSizeVideo('555');
        } else {
            setSizeVideo(true);
            setTextSizeVideo('Aumentar');
            setWidthSizeVideo('864');
            setHeightSizeVideo('480');
        }
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Stack width="100%" p="2" bg="gray.800" borderRadius={8} mr="6">
                    <Heading>{title}</Heading>

                    <AspectRatio maxW={widthSizeVideo} maxH={heightSizeVideo} width="100%">
                        <iframe
                            src={link}
                            title="Crie o que quiser no React Native com essa biblioteca"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        >
                        </iframe>
                    </AspectRatio>

                    {/* Resolução video */}
                    <HStack
                        direction="row"
                        align="center"
                    >
                        <Button
                            bg="gray.700"
                            colorScheme="whiteAlpha"
                            size="sm"
                            onClick={handleSizeVideo}
                        >
                            <Text pr="2">{textSizeVideo}</Text>
                            <Icon as={BsTextareaResize} fontSize="30" />
                        </Button>
                    </HStack>
                </Stack>

                {
                    sizeVideo ?
                        <Stack align="flex-start">
                            <NavSection title={"Configurando ambiente"} classes='11' time='01:00:59'>
                                <NavLink

                                    onClick={() => setLinkVideo('http://www.youtube.com/embed/xFkb-i2AXGo', 'Introdução do módulo')}
                                >
                                    Introdução do módulo
                                </NavLink>
                                <NavLink
                                    onClick={() => setLinkVideo('http://www.youtube.com/embed/IkvmmM7UEck', 'Ambiente de Desenvolvimento')}
                                >
                                    Ambiente de Desenvolvimento
                                </NavLink>
                                <NavLink
                                    onClick={() => setLinkVideo('https://www.youtube.com/embed/57DX4m-d9yU', "Muie do Bill")}
                                >
                                    Muie do Bill
                                </NavLink>
                                <NavLink> Servindo HTML estático </NavLink>
                                <NavLink> Ambiente dev e produção </NavLink>
                            </NavSection>

                            <NavSection title={"Conceitos importantes"} classes='5' time='00:35:25'>
                                <NavLink>React JS</NavLink>
                                <NavLink> React Native </NavLink>
                                <NavLink>Node JS</NavLink>
                                <NavLink>Elixir</NavLink>
                            </NavSection>
                        </Stack> :
                        <Stack></Stack>
                }


            </Flex>
        </Box >
    );
}