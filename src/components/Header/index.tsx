import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    }, 'lg');

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
            {
                !isWideVersion && (
                    <IconButton
                        aria-label="Open navigation"
                        icon={<Icon as={RiMenuLine} />}
                        fontSize="24"
                        variant="unstyled"
                        onClick={onOpen}
                        marginRight="2"
                    >

                    </IconButton>
                )
            }
            <Logo />

            {/* se tiver na Wide Version removed */}
            {isWideVersion && <SearchBox />}

            <NotificationNav />
            <Profile showProfileData={isWideVersion} />
        </Flex>
    );
}