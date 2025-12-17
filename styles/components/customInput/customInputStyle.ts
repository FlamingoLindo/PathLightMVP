import { StyleSheet } from "react-native";

export const customInputStyle = StyleSheet.create({
  container: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
});
