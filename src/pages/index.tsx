import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex width={"100vw"} h="100vh" justify="center" alignItems={"center"}>

      {/* as => significa que está declarando para o Flex que ele é um form e nao uma div */}
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          {/* Stack é um componente do Chakra que serve para empilhar componentes espaçamento*/}

          <FormControl>
            {/* FormControl é um componente do Chakra que serve para agrupar componentes */}

            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor='yellow.600' //cor da borda quando o input estiver em foco
              bgColor='gray.900' //cor de fundo do input
              variant={"filled"} //estilo do input
              _hover={{
                bgColor: 'gray.900' //cor de fundo do input quando o mouse estiver em cima
              }}
              size="lg" //tamanho do input
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor='yellow.600' //cor da borda quando o input estiver em foco
              bgColor='gray.900' //cor de fundo do input
              variant={"filled"} //estilo do input
              _hover={{
                bgColor: 'gray.900' //cor de fundo do input quando o mouse estiver em cima
              }}
              size="lg" //tamanho do input
            />
          </FormControl>


        </Stack>

        <Button
          type="submit"
          mt="6"
          bg={"yellow.600"}
          colorScheme="yellow"
          color={"white"}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
