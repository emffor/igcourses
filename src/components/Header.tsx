import { Flex, Input, Text } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { RiSearchLine } from "react-icons/ri"

export function Header() {
    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            height="20"
            marginX="auto" //margin horizontal
            marginTop="4" //margin top
            paddingX="6" //padding horizontal
            alignItems="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                igcourses
                <Text as="span" ml="1" color="yellow.500">.</Text>
            </Text>


            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full" //borda arredondada
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400' }}
                />

                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>
        </Flex>
    );
}