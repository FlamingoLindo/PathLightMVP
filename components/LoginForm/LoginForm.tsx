import { useLoginForm } from "@/hooks/useLoginForm";
import { EmailInputStyle } from "@/styles/components/customInput/emailInput.style";
import { LoginFormStyle } from "@/styles/components/loginForm.style";
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import CustomInput from "./CustomInput/CustomInput";

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
  } = useLoginForm();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          editable={!isSubmitting}
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
          editable={!isSubmitting}
        />

        <Pressable
          onPress={handleSubmit}
          disabled={isSubmitting}
          style={({ pressed }) => ({
            backgroundColor: isSubmitting ? '#ccc' : pressed ? '#005' : '#007bff',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
          })}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
              Login
            </Text>
          )}
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;