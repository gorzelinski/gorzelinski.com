import { tokens } from "./tokens"

export const light = {
  id: "T001",
  name: "light",
  color: {
    primary: {
      base: "#0466C8",
      shade200: "#0353A4",
      shade300: "#023E7D",
      shade400: "#002855",
      shade500: "#002855",
    },
    text: {
      base: "#000000",
      shade200: "#212529",
      shade300: "#343A40",
      shade400: "#495057",
      shade500: "#6C757D",
      shade600: "#FFFFFF",
    },
    surface: {
      base: "#F8F9FA",
      shade200: "#E9ECEF",
      shade300: "#DEE2E6",
      shade400: "#CED4DA",
      shade500: "#ADB5BD",
    },
    background: "#FFFFFF",
    success: "#157F1F",
    error: "#CE2D4F",
  },
  ...tokens,
}
