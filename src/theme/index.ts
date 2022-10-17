import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/800.css";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
import { Heading } from "./components/heading";

export const theme = extendTheme({
  styles: {
    global: {
      "html,body,#root": {
        bgColor: "lifted.gray.50",
        color: "black",
        height: "100%",
      },
    },
  },
  components: {
    Button,
    Heading,
  },
  fonts: {
    heading: "Rubik, sans-serif",
    body: "Rubik, sans-serif",
  },
  colors: {
    "brand.black": "#452E33",
    "brand.white": "#FAF0EA",
    "brand.teal": {
      "50": "#EBF9F7",
      "100": "#C7EFEA",
      "200": "#A3E5DC",
      "300": "#80DBCF",
      "400": "#5CD1C1",
      "500": "#38C7B4",
      "600": "#2D9F90",
      "700": "#22776C",
      "800": "#165048",
      "900": "#0B2824",
    },
    "brand.brown": {
      "50": "#ffeeea",
      "100": "#e4d5ce",
      "200": "#cdbab1",
      "300": "#b89e94",
      "400": "#a28376",
      "500": "#89695d",
      "600": "#6b5247",
      "700": "#4e3a32",
      "800": "#31221d",
      "900": "#160a00",
    },
    "lifted.gray": {
      "50": "#f7fafc",
      "100": "#edf2f7",
      "200": "#e2e8f0",
      "300": "#cbd5e0",
      "400": "#a0aec0",
      "500": "#718096",
      "600": "#4a5568",
      "700": "#2d3748",
      "800": "#1a202c",
      "900": "#171923",
    },
    "lifted.brown": {
      "50": "#f5f2f3",
      "100": "#e0dadc",
      "200": "#c1b5b8",
      "300": "#a29095",
      "400": "#8d7773",
      "500": "#785e66",
      "600": "#64464f",
      "700": "#593943",
      "800": "#4f2d37",
      "900": "#3c222a",
    },
    "lifted.green": {
      "50": "#f0f9f8",
      "100": "#d2eeeb",
      "200": "#96d8d1",
      "300": "#4bbcb0",
      "400": "#1eab9c",
      "500": "#00a08f",
      "600": "#007165",
      "700": "#005e54",
      "800": "#004b43",
      "900": "#003832",
    },
  },
});
