import { tokens } from "./tokens"

export const dark = {
  id: "T002",
  name: "dark",
  color: {
    primary: {
      base: "#168BFF",
      shade200: "#47A3FF",
      shade300: "#70B8FF",
      shade400: "#99CCFF",
      shade500: "#C2E0FF",
    },
    text: {
      base: "#FFFFFF",
      shade200: "#E9ECEF",
      shade300: "#DEE2E6",
      shade400: "#CED4DA",
      shade500: "#ADB5BD",
      shade600: "#111315",
    },
    surface: {
      base: "#212529",
      shade200: "#343A40",
      shade300: "#495057",
      shade400: "#5F666D",
      shade500: "#6C757D",
    },
    background: "#111315",
    success: "#157F1F",
    error: "#CE2D4F",
  },
  ...tokens,
}
