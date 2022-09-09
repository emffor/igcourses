import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex>
            <Box
                mr="4"
                textAlign="right"
            >
                <Text>Eloan Ferreira</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    eloanmf@hotmail.com
                </Text>
            </Box>

            <Avatar
                size="md"
                name="Eloan Ferreira" //nome do avatar
                src="https://github.com/emffor.png"
            />
        </Flex>
    );
}