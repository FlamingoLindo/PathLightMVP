import { ProfileHeaderStyle } from "@/styles/components/profileHeader/profileHeader.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProfileHeader = () => {
    const [isDueVisible, setIsDueVisible] = useState(false);
    const insets = useSafeAreaInsets();

    return (
        <View style={[ProfileHeaderStyle.container, { paddingTop: insets.top }]}>
            <View style={ProfileHeaderStyle.iconsContainer}>
                <View style={ProfileHeaderStyle.leftIcons}>
                    <Ionicons
                        name="person-outline"
                        size={30}
                        color="white"
                    />
                </View>
                <View style={ProfileHeaderStyle.rightIcons}>
                    <TouchableOpacity
                        onPress={() => setIsDueVisible(!isDueVisible)}
                        style={ProfileHeaderStyle.iconButton}
                    >
                        <Ionicons
                            name={isDueVisible ? "eye-outline" : "eye-off-outline"}
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={ProfileHeaderStyle.iconButton}>
                        <Ionicons
                            name="help-circle-outline"
                            size={30}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={ProfileHeaderStyle.contentContainer}>
                <Text style={ProfileHeaderStyle.greeting}>Hello, User Name</Text>
                <Text style={ProfileHeaderStyle.balanceLabel}>Your current balance is:</Text>
                <Text style={ProfileHeaderStyle.balanceAmount}>
                    {isDueVisible ? "$1,234.56" : "*******"}
                </Text>
            </View>
        </View>
    );
}

export default ProfileHeader;