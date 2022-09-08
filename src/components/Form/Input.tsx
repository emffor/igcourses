import {
    Input as ChakraInput,
    FormLabel,
    FormControl,
    InputProps as ChakraInputProps
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>
            {/* Se existir label mostrar*/}
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            {/* FormControl é um componente do Chakra que serve para agrupar componentes */}
            <ChakraInput
                name={name}
                id={name}
                focusBorderColor='yellow.600' //cor da borda quando o input estiver em foco
                bgColor='gray.900' //cor de fundo do input
                variant={"filled"} //estilo do input
                _hover={{
                    bgColor: 'gray.900' //cor de fundo do input quando o mouse estiver em cima
                }}
                size="lg" //tamanho do input
                {...rest}
            />
        </FormControl>
    );
}