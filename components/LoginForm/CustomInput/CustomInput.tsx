import { customInputStyle } from "@/styles/components/customInput/customInput.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomInputProps {
  id: string;
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?:
  | "default"
  | "numeric"
  | "email-address"
  | "ascii-capable"
  | "numbers-and-punctuation"
  | "url"
  | "number-pad"
  | "phone-pad"
  | "name-phone-pad"
  | "decimal-pad"
  | "twitter"
  | "web-search"
  | "visible-password";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  error?: string;
  onBlur?: () => void;
  autoComplete?: | 'additional-name'
  | 'address-line1'
  | 'address-line2'
  | 'birthdate-day'
  | 'birthdate-full'
  | 'birthdate-month'
  | 'birthdate-year'
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-day'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-number'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-middle-name'
  | 'cc-family-name'
  | 'cc-type'
  | 'country'
  | 'current-password'
  | 'email'
  | 'family-name'
  | 'gender'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'name'
  | 'name-family'
  | 'name-given'
  | 'name-middle'
  | 'name-middle-initial'
  | 'name-prefix'
  | 'name-suffix'
  | 'new-password'
  | 'nickname'
  | 'one-time-code'
  | 'organization'
  | 'organization-title'
  | 'password'
  | 'password-new'
  | 'postal-address'
  | 'postal-address-country'
  | 'postal-address-extended'
  | 'postal-address-extended-postal-code'
  | 'postal-address-locality'
  | 'postal-address-region'
  | 'postal-code'
  | 'street-address'
  | 'sms-otp'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-device'
  | 'url'
  | 'username'
  | 'username-new'
  | 'off',
  textContentType?: | 'none'
  | 'URL'
  | 'addressCity'
  | 'addressCityAndState'
  | 'addressState'
  | 'countryName'
  | 'creditCardNumber'
  | 'creditCardExpiration'
  | 'creditCardExpirationMonth'
  | 'creditCardExpirationYear'
  | 'creditCardSecurityCode'
  | 'creditCardType'
  | 'creditCardName'
  | 'creditCardGivenName'
  | 'creditCardMiddleName'
  | 'creditCardFamilyName'
  | 'emailAddress'
  | 'familyName'
  | 'fullStreetAddress'
  | 'givenName'
  | 'jobTitle'
  | 'location'
  | 'middleName'
  | 'name'
  | 'namePrefix'
  | 'nameSuffix'
  | 'nickname'
  | 'organizationName'
  | 'postalCode'
  | 'streetAddressLine1'
  | 'streetAddressLine2'
  | 'sublocality'
  | 'telephoneNumber'
  | 'username'
  | 'password'
  | 'newPassword'
  | 'oneTimeCode'
  | 'birthdate'
  | 'birthdateDay'
  | 'birthdateMonth'
  | 'birthdateYear'
  | 'cellularEID'
  | 'cellularIMEI'
  | 'dateTime'
  | 'flightNumber'
  | 'shipmentTrackingNumber',
  editable?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

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
      {error && <Text style={customInputStyle.errorMessage}>{error}</Text>}
    </View>
  );
};

export default CustomInput;