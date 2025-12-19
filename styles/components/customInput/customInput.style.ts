import { StyleSheet } from "react-native";

export const customInputStyle = StyleSheet.create({
  container: {
    position: "relative",
  },
  inputWrapper: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  errorMessage: {
    color: "red",
    fontWeight: 'bold',
    marginTop: 4,
    fontSize: 12,
    marginBottom: 4,
  },
});