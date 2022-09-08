import { extendTheme } from '@chakra-ui/react';

//substituir o tema padrão do chakra
export const theme = extendTheme({
    colors: {
        gray: {
            colors: {
                gray: {
                    "900": "#181B23",
                    "800": "#1F2029",
                    "700": "#353646",
                    "600": "#4B4D63",
                    "500": "#616480",
                    "400": "#797D9A",
                    "300": "#9699B0",
                    "200": "#B3B5C6",
                    "100": "#D1D2DC",
                    "50": "#EEEEF2",
                },
                yellow: {
                    "600": "#FFBA08",
                    "500": "#D69E2E",
                }
            },
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50'
            }
        }
    }
})