import { Stack } from '@chakra-ui/react';
import { FaNodeJs } from 'react-icons/fa';
import { RiDashboard2Line, RiDashboardLine, RiReactjsFill } from 'react-icons/ri';
import { SiElixir } from 'react-icons/si';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title={"GERAL"}>
                <NavLink icon={RiDashboard2Line} href='/dashboard'>Dashboard</NavLink>
                <NavLink icon={RiDashboardLine} href='/users'>Usuários</NavLink>
            </NavSection>

            <NavSection title={"IGNITE ROCKETSEAT"}>
                <NavLink icon={RiReactjsFill} color="blue.400" href='/reactjs'>React JS</NavLink>
                <NavLink
                    icon={RiReactjsFill}
                    color="purple.300"
                    href='/reactnative'
                >
                    React Native
                </NavLink>
                <NavLink icon={FaNodeJs} color="green.500" href='/nodejs'>Node JS</NavLink>
                <NavLink icon={SiElixir} color="purple.600" href='/elixir'>Elixir</NavLink>
            </NavSection>
        </Stack>
    );
}