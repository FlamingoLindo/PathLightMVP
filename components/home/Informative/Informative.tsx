import { InformativeStyle } from "@/styles/components/home/informative/informative.style";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { InfoProps } from "./informative.props";

const Informative = ({ backgroundColor, title, text, icon, action }: InfoProps) => {
    return (
        <View style={[InformativeStyle.container, { backgroundColor }]}>
            <TouchableOpacity activeOpacity={0.5} onPress={action} style={InformativeStyle.touchable}>
                {icon && (
                    <Ionicons
                        name={icon.name as any}
                        size={icon.size}
                        color={icon.color}
                        style={InformativeStyle.icon}
                    />
                )}
                <View style={InformativeStyle.textContainer}>
                    <Text style={InformativeStyle.title}>{title}</Text>
                    <Text style={InformativeStyle.text}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Informative;