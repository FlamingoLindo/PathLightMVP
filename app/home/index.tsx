import Option from "@/components/home/Option/Option";
import ProfileHeader from "@/components/home/ProfileHeader/ProfileHeader";
import { MenuStyle } from "@/styles/components/home/index.style";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Menu() {
    const insets = useSafeAreaInsets();

    const options = [
        { id: '1', title: "Pay rent", icon: { name: "card-outline", size: 24, color: "black" } },
        { id: '2', title: "Service request", icon: { name: "construct-outline", size: 24, color: "black" } },
        { id: '3', title: "Lease documents", icon: { name: "document-text-outline", size: 24, color: "black" } },
        { id: '4', title: "Call", icon: { name: "call-outline", size: 24, color: "black" } },
    ];

    const renderOption = ({ item }: { item: { id: string; title: string; icon: any } }) => (
        <Option title={item.title} icon={item.icon} />
    );

    return (
        <View style={[MenuStyle.container, { paddingBottom: insets.bottom }]}>
            <ProfileHeader />
            <FlatList
                style={MenuStyle.optionsContainer}
                data={options}
                renderItem={renderOption}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={MenuStyle.options}
            />
        </View>
    )
}