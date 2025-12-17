import { customInputStyle } from '@/styles/components/customInput/customInputStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {
    StyleProp,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View
} from "react-native";

interface CustomInputProps {
    style?: StyleProp<TextStyle>,
    placeholder?: string,
    value?: string,
    onChangeText?: (text: string) => void,
    keyboardType?: "default" | 'numeric' | 'email-address' | "ascii-capable" | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' |
    'decimal-pad' | 'twitter' | 'web-search' | 'visible-password';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    secureTextEntry?: boolean
}

const CustomInput = ({
    style,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    autoCapitalize,
    secureTextEntry
}: CustomInputProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View style={customInputStyle.container}>
            <TextInput
                style={style}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
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
    )
}

export default CustomInput;