import Informative from "@/components/home/Informative/Informative";
import Option from "@/components/home/Option/Option";
import ProfileHeader from "@/components/home/ProfileHeader/ProfileHeader";
import { MenuStyle } from "@/styles/components/home/index.style";
import { FlatList, Linking, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Menu() {
    const insets = useSafeAreaInsets();

    const options = [
        { id: '1', title: "Pay rent", icon: { name: "card-outline", size: 24, color: "black" } },
        { id: '2', title: "Service request", icon: { name: "construct-outline", size: 24, color: "black" } },
        { id: '3', title: "Lease documents", icon: { name: "document-text-outline", size: 24, color: "black" } },
        { id: '4', title: "Call", icon: { name: "call-outline", size: 24, color: "black" }, action: () => { Linking.openURL('tel:14075216335') } },
        { id: '5', title: "Example", icon: { name: "person-outline", size: 24, color: "black" } },
    ];

    const address = '3200 W Colonial Dr, Orlando, FL 32808, United States';
    const addressUrl = Platform.select({
        ios: `maps:0,0?q=${address}`,
        android: `geo:0,0?q=${address}`,
    }) || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    const informatives = [
        {
            id: '1',
            backgroundColor: "#000000",
            title: "Housing with PLH",
            text: "Our Programs",
            icon: { name: "heart-outline", size: 30, color: "white" },
            action: () => { Linking.openURL('https://www.pathlighthome.org/housing-with-pathlight-home') }
        },
        {
            id: '2',
            backgroundColor: "#6180ba",
            title: "Our Apartments",
            text: "Our Communities",
            icon: { name: "home-outline", size: 30, color: "white" },
            action: () => { Linking.openURL('https://www.pathlighthome.org/our-apartments') }
        },
        {
            id: '3',
            backgroundColor: "#4bd1a0",
            title: "Blog",
            text: "Our Latest News",
            icon: { name: "newspaper-outline", size: 30, color: "white" },
            action: () => { Linking.openURL('https://www.pathlighthome.org/blog') }
        },
        {
            id: '4',
            backgroundColor: "#6599cd",
            title: "Address",
            text: "3200 W Colonial Dr, Orlando, FL 32808, United States",
            icon: { name: "location-outline", size: 30, color: "white" },
            action: () => { Linking.openURL(addressUrl) }
        },
        {
            id: '5',
            backgroundColor: "#81decd",
            title: "Email",
            text: "info@pathlighthome.org",
            icon: { name: "mail-outline", size: 30, color: "white" },
            action: () => { Linking.openURL('mailto:info@pathlighthome.org') }
        },
    ];

    const renderOption = ({ item }: { item: typeof options[0] }) => (
        <Option title={item.title} icon={item.icon} action={item.action} />
    );

    const renderInformative = ({ item }: { item: typeof informatives[0] }) => (
        <Informative
            backgroundColor={item.backgroundColor}
            title={item.title}
            text={item.text}
            icon={item.icon}
            action={item.action}
        />
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

            <FlatList
                data={informatives}
                renderItem={renderInformative}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}