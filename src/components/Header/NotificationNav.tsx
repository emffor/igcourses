import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotification2Line, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
    return (
        <Flex
            align="center"
            ml="auto" //joga o conteúdo para a direita
        >
            {/* HStack  itens fica na Horizontal e o VStack vertical*/}
            <HStack
                spacing={["6", "8"]}
                mx={["6", "8"]}
                pr={["6", "8"]}
                py="1"
                color="gray.300"
                borderRightWidth={1}
                borderColor="gray.700"
            >
                <Icon as={RiNotification2Line} fontSize="20" />
                <Icon as={RiUserAddLine} fontSize="20" />
            </HStack>
        </Flex>
    );
}