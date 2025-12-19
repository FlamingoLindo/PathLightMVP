import { customInputStyle } from "@/styles/components/customInput/customInput.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomInputProps } from "./customInput.props";

const CustomInput = ({
  id,
  style,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  autoCapitalize,
  secureTextEntry,
  error,
  onBlur,
  autoComplete,
  textContentType,
  editable,
  accessibilityLabel,
  accessibilityHint,
}: CustomInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={customInputStyle.container}>
      <View style={customInputStyle.inputWrapper}>
        <TextInput
          id={id}
          style={style}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          autoComplete={autoComplete}
          textContentType={textContentType}
          editable={editable}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={customInputStyle.eyeIcon}
          >
            <Ionicons
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={customInputStyle.errorMessage}>{error}</Text>}
    </View>
  );
};

export default CustomInput;