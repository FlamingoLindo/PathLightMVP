import { TextInput } from "react-native";

const LoginForm = ({}) => {
  return (
    <>
      <TextInput
        // style={styles.input}
        placeholder="Email"
        // value={email}
        // onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </>
  );
};

export default LoginForm;
