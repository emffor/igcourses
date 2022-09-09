import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";



export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title={"GERAL"}>
                    <Link display="flex" alignContent="center">
                        <Icon as={RiDashboardLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium">
                            Dashboard
                        </Text>
                    </Link>
                    <Link display="flex" alignContent="center">
                        <Icon as={RiDashboardLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium"> Usuários </Text>
                    </Link>
                </NavSection>

                <NavSection title={"IGNITE ROCKETSEAT"}>
                    <NavLink icon={RiReactjsFill} color="blue.400">React JS</NavLink>
                    <NavLink icon={RiReactjsFill} color="purple.300">React Native</NavLink>
                    <NavLink icon={FaNodeJs} color="green.500">Node JS</NavLink>
                    <NavLink icon={SiElixir} color="purple.600">Elixir</NavLink>
                </NavSection>
            </Stack>
        </Box>
    );
}