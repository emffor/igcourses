import { ReactNode } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { GrFormSubtract } from 'react-icons/gr';
import { BsPlus } from 'react-icons/bs';
import { BsPlayBtnFill } from "react-icons/bs";



interface NavSectionProps {
    title: string;
    classes: string;
    time: string;
    children: ReactNode;
}

export function NavSection({ title, classes, time, children }: NavSectionProps) {
    return (
        <Box>
            <Accordion
                allowMultiple
            >
                <AccordionItem
                    border="none"
                    bg={"gray.800"}
                    width="lg"
                    maxWidth={320}
                    borderRadius="10"
                >
                    <h2>
                        <AccordionButton>
                            <Box
                                flex="1"
                            >
                                <Stack
                                    direction="row"
                                    align={"center"}
                                >
                                    <Icon as={BsPlayBtnFill} fontSize="34" color={"green.500"} />

                                    <VStack
                                        align="flex-start"
                                        spacing="0"
                                        pl="3"
                                    >
                                        <Text fontWeight="bold" color="white" fontSize="14">
                                            {title}
                                        </Text>

                                        <Text fontWeight="bold" color="gray.300" fontSize="12">
                                            {classes} aulas
                                            <Text as="span" color="gray.700" px="2" fontSize="10">
                                                ●
                                            </Text>
                                            {time}
                                        </Text>
                                    </VStack>
                                </Stack>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={6}>
                        <Stack
                            spacing="2"
                            mt="2"
                            align="stretch"
                        >
                            {children}
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box >
    );
}