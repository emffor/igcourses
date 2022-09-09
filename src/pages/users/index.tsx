import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function Users() {
    return (
        <Box>
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar />

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading
                            size="lg"
                            fontWeight="normal"
                        >
                            Usuários
                        </Heading>

                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            bg={"yellow.600"}
                            color={"white"}
                            colorScheme="yellow"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table
                        colorScheme="whiteAlpha"
                    >
                        <Thead>
                            <Tr>
                                <Th
                                    px="6"
                                    color="gray.300"
                                    width="8"
                                >
                                    <Checkbox colorScheme="yellow" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th width={"8"}></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="yellow" />
                                </Td>
                                <Td px="6">
                                    <Box>
                                        <Text
                                            fontWeight={"bold"}
                                        >
                                            Eloan Ferreira
                                        </Text>
                                        <Text
                                            fontSize={"small"}
                                            color={"gray.300"}
                                        >
                                            eloanmf@hotmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril, 2021</Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Criar novo
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}