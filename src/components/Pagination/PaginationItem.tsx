import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ isCurrent, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="yellow"
                disabled
                _disabled={{
                    bg: 'yellow.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}

        >
            {number}
        </Button>
    );
}