import { Box, Button, Flex, Heading, HStack, Icon, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { GiTrail } from "react-icons/gi";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function ReactJs() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Flex
                    flex="100%"
                    my="6"
                    width="100%"
                    maxWidth={1480}
                    mx="auto"
                    px="6"
                    flexDirection="column"
                >

                    <Link href="/reactjs/trailone" passHref>
                        <Button
                            as="a"
                            type="submit"
                            flex="1"
                            borderRadius={8}
                            bg="gray.800"
                            p={["6", "8"]}
                            colorScheme={"purple"}
                            color="white"
                            m={["2", "4"]}
                        >
                            <HStack>
                                <Icon as={GiTrail} fontSize="26" color="orange" />
                                <Heading>Trilha 2021</Heading>
                            </HStack>
                        </Button>
                    </Link>

                    <Link href="/reactjs/trailtwo" passHref>
                        <Button
                            as="a"
                            type="submit"
                            flex="1"
                            borderRadius={8}
                            bg="gray.800"
                            p={["6", "8"]}
                            colorScheme={"purple"}
                            color="white"
                            m={["2", "4"]}
                        >
                            <HStack>
                                <Icon as={GiTrail} fontSize="26" color="orange" />
                                <Heading>Trilha 2022</Heading>
                            </HStack>
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
}