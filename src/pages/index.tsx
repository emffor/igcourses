import { Flex, Button, Stack, Image, FormControl, Box } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

export default function Home() {
  return (
    <Flex width={"100vw"} h="100vh" justify="center" alignItems={"center"} flexDirection="column">
      <Image
        src='https://i.ibb.co/n6C981c/logoone.png'
        alt="Logo One"
        w="8rem"
      />
      {/* as => significa que está declarando para o Flex que ele é um form e nao uma div */}
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        mb="14"
      >
        <Stack spacing="4">
          {/* Stack é um componente do Chakra que serve para empilhar componentes espaçamento*/}
          <FormControl>
            <Input
              name="email"
              type="email"
              label="E-mail"
            />
          </FormControl>

          <FormControl>
            <Input
              name="password"
              type="password"
              label="Senha"
            />
          </FormControl>


        </Stack>

        <Button
          as={"a"}
          type="submit"
          mt="6"
          bg={"yellow.600"}
          colorScheme="yellow"
          color={"white"}
          href="/dashboard"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
