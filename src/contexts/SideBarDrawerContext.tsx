import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerProviderData {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SidebarDrawerProvider({ children }) {
    /* const {isOpen, onClose} = useDisclosure(); */
    const disclosure = useDisclosure();

    //quando a rota mudar, o drawer é fechado
    const router = useRouter();
    useEffect(() => {
        disclosure.onClose();
    }, [router.asPath]);

    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);