import { EmailInputStyle } from "@/styles/components/customInput/emailInputStyle";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import CustomInput from "./CustomInput/CustomInput";

const LoginForm = ({ }) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <CustomInput style={EmailInputStyle.input} placeholder="Email" keyboardType="email-address" />
          <CustomInput style={EmailInputStyle.input} placeholder="Password" secureTextEntry={true} />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default LoginForm;
