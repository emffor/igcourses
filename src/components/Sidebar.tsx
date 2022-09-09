import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiDashboardLine, RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiElixir } from "react-icons/si";



export function Sidebar() {
    return (
        <Box
            as="aside"
            w="64"
            mr="8"
        >
            <Stack
                spacing="12"
                align="flex-start"
            >
                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                    >
                        GERAL
                    </Text>
                    <Stack
                        spacing="4"
                        mt="8"
                        align="stretch"
                    >
                        <Link
                            display="flex"
                            alignContent="center"
                        >
                            <Icon
                                as={RiDashboardLine}
                                fontSize="20"
                            />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Dashboard
                            </Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text
                        fontWeight="bold"
                        color="gray.400"
                        fontSize="small"
                    >
                        IGNITE ROCKETSEAT
                    </Text>
                    <Stack
                        spacing="4"
                        mt="8"
                        align="stretch"
                    >
                        <Link
                            display="flex"
                            alignContent="center"
                        >
                            <Icon
                                as={RiReactjsFill}
                                fontSize="20"
                                color="blue.500"
                            />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                React JS
                            </Text>
                        </Link>
                        <Link
                            display="flex"
                            alignContent="center"
                        >
                            <Icon
                                as={RiReactjsFill}
                                fontSize="20"
                                color="purple.500"
                            />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                React Native
                            </Text>
                        </Link>
                        <Link
                            display="flex"
                            alignContent="center"
                        >
                            <Icon
                                as={FaNodeJs}
                                fontSize="20"
                                color="green.500"
                            />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Node JS
                            </Text>
                        </Link>
                        <Link
                            display="flex"
                            alignContent="center"
                        >
                            <Icon
                                as={SiElixir}
                                fontSize="20"
                                color="purple.500"
                            />
                            <Text
                                ml="4"
                                fontWeight="medium"
                            >
                                Elixir
                            </Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>

        </Box>
    );
}