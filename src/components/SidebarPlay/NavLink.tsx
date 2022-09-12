import { Icon, Button as ChakraLink, ButtonProps as ChakraLinkProps, Text, HStack } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { ActiveLink } from "../ActiveLink";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

interface NavLinkProps extends ChakraLinkProps {
    icon?: ElementType; //quando passa o nome de um componente, ele já sabe que é um elemento
    children: ReactNode;
    color?: string;
    href: string;
}

export function NavLink({ icon, children, color, href, ...rest }: NavLinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink
                flex="1"
                flexDirection="row"
                alignContent="center"
                bg={"gray.700"}
                justifyContent="space-between"
                py="4"
                {...rest}
            >
                <HStack
                >
                    <Icon as={MdOutlineSlowMotionVideo} fontSize="14" color={color} />
                    <Text fontWeight="medium"> {children} </Text>
                </HStack>
            </ChakraLink>
        </ActiveLink>
    );
}