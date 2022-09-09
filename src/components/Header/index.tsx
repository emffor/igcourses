import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

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
            <Logo />
            <SearchBox />
            <NotificationNav />
            <Profile />
        </Flex>
    );
}