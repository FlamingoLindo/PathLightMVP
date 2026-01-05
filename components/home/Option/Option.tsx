import { OptionStyle } from "@/styles/components/home/option/option.style";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { OptionProps } from "./option.props";

const Option = ({ icon, title, action }: OptionProps) => {
    return (
        <View style={{ marginHorizontal: 8, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.5} onPress={action}>
                <View style={OptionStyle.container}>
                    <Ionicons
                        name={icon.name}
                        size={icon.size}
                        color={icon.color}
                    />
                </View>
                <Text style={OptionStyle.text} numberOfLines={2} ellipsizeMode="tail">
                    {title}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Option;