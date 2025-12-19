import { OptionStyle } from "@/styles/components/home/option/option.style";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { OptionProps } from "./option.props";

const Option = ({ icon, title }: OptionProps) => {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={OptionStyle.container}>
                <Ionicons
                    name={icon.name}
                    size={icon.size}
                    color={icon.color}
                />
                <Text style={OptionStyle.text} numberOfLines={2} ellipsizeMode="tail">
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Option;