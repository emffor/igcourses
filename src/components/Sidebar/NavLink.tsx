import { Icon, Link, LinkProps as ChakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType; //quando passa o nome de um componente, ele já sabe que é um elemento
    children: ReactNode;
    color: string;
}

export function NavLink({ icon, children, color, ...rest }: NavLinkProps) {
    return (
        <Link
            display="flex"
            alignContent="center"
            {...rest}
        >
            <Icon
                as={icon}
                fontSize="20"
                color={color}
            />
            <Text
                ml="4"
                fontWeight="medium"
            >
                {children}
            </Text>
        </Link>
    );
}