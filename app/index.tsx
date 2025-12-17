import LoginForm from "@/components/LoginForm/LoginForm";
import { styles } from "@/styles";
import { Image } from "expo-image";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function Index() {
  const insets = useSafeAreaInsets();
  const logo = require("@/assets/images/logo.jpg");

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Image source={logo} style={styles.logo} contentFit="contain" />
      <LoginForm />
    </View>
  );
}
