import { StyleSheet } from "react-native";

export const ProfileHeaderStyle = StyleSheet.create({
    container: {
        backgroundColor: '#b86bab',
        paddingHorizontal: 20,
        paddingVertical: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    iconsContainer: {
        marginBottom: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftIcons: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        padding: 10,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    rightIcons: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center"
    },
    iconButton: {
        padding: 4,
    },
    contentContainer: {
        marginBottom: 8,
    },
    greeting: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '500',
        marginBottom: 4,
    },
    balanceLabel: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 8,
    },
    balanceAmount: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1,
    },
});