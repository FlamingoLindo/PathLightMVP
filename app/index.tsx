import LoginForm from "@/components/LoginForm/LoginForm";
import { styles } from "@/styles/index.index";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  const logo = require("@/assets/images/logo.jpg");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#543681" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: isKeyboardVisible ? 'flex-start' : 'center',
            alignItems: 'center',
            paddingTop: isKeyboardVisible ? 40 : insets.top,
            paddingBottom: Math.max(insets.bottom, 20),
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={styles.formContainer}>
            <Image source={logo} style={styles.logo} contentFit="contain" />
            <LoginForm />
          </View>
          {/* TODO remove this */}
          <Button title="SKIP" onPress={() => router.push('/home')} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}