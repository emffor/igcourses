import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useBreakpointValue
} from "@chakra-ui/react";

import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer();

    const isDrawerSidebar = useBreakpointValue({
        base: true, //por padrão, o drawer é exibido no mobile 
        lg: false, //quando a tela for maior que lg, o drawer não é exibido
    });


    if (isDrawerSidebar) {
        return (
            /* Menu Responsive */
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                {/* DrawerOverlay deixa a tela mais escura */}
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SideBarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        );
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SideBarNav />
        </Box>
    );
}