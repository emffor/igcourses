import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { FaNodeJs } from "react-icons/fa";
import { RiDashboard2Line, RiDashboardLine, RiReactjsFill } from "react-icons/ri";
import { SiElixir } from "react-icons/si";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { NavLink } from "../../../components/SidebarPlay/NavLink";
import { NavSection } from "../../../components/SidebarPlay/NavSection";

export default function libraryOne() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Stack align="flex-start">
                    <NavSection title={"Configurando ambiente"} classes='11' time='01:00:59'>
                        <NavLink href='/dashboard'> Introdução do módulo </NavLink>
                        <NavLink href='/users'> Ambiente de Desenvolvimento </NavLink>
                        <NavLink href='/users'> Configurando Babel </NavLink>
                        <NavLink href='/users'> Servindo HTML estático </NavLink>
                        <NavLink href='/users'> Ambiente dev e produção </NavLink>
                    </NavSection>

                    <NavSection title={"Conceitos importantes"} classes='5' time='00:35:25'>
                        <NavLink href='/reactjs'>React JS</NavLink>
                        <NavLink href='/reactnative'> React Native </NavLink>
                        <NavLink href='/nodejs'>Node JS</NavLink>
                        <NavLink href='/elixir'>Elixir</NavLink>
                    </NavSection>
                </Stack>
            </Flex>
        </Box>
    );
}