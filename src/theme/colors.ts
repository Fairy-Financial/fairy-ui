import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f7d9d9",
  primaryBright: "#f4abc4",
  primaryDark: "#ff9292",
  secondary: "#ffb4b4",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f9f3f3",
  backgroundDisabled: "#dddddd",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#efbbcf",
  tertiary: "#EFF4F5",
  text: "#c3aed6",
  textDisabled: "#828b93",
  textSubtle: "#8675a9",
  borderColor: "#98a3ac",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f4abc4",
  background: "#060930",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  inputSecondary: "#66578D",
  primaryDark: "#595b83",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#333456",
  textSubtle: "#A28BD4",
  borderColor: "#060930",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
