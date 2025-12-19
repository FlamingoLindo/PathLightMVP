import { useLoginForm } from "@/hooks/useLoginForm";
import { EmailInputStyle } from "@/styles/components/customInput/emailInput.style";
import { LoginFormStyle } from "@/styles/components/loginForm/loginForm.style";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View
} from "react-native";
import CustomInput from "../CustomInput/CustomInput";

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    isSubmitting,
    clearError,
    handleSubmit,
    pendingLogin,
  } = useLoginForm();

  return (
      <View style={LoginFormStyle.container}>
        <CustomInput
          id="email"
          style={EmailInputStyle.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) clearError("email");
          }}
          error={errors.email}
          editable={!isSubmitting && !pendingLogin}
        />
        <CustomInput
          id="password"
          style={EmailInputStyle.input}
          placeholder="Password"
          secureTextEntry
          autoComplete="password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password) clearError("password");
          }}
          error={errors.password}
          editable={!isSubmitting && !pendingLogin}
        />

        <Pressable
          onPress={handleSubmit}
          disabled={isSubmitting || pendingLogin}
          style={({ pressed }) => ({
            backgroundColor: (isSubmitting || pendingLogin) ? '#ccc' : pressed ? '#b836a2ff' : '#b86bab',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
          })}
        >
          {(isSubmitting || pendingLogin) ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              Login
            </Text>
          )}
        </Pressable>
      </View>
  );
};

export default LoginForm;