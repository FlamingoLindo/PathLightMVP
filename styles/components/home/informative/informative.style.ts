import { StyleSheet } from "react-native";

export const InformativeStyle = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        marginTop: 4,
        marginBottom: 2,
        width: 'auto',
        height: 'auto',
        padding: 12,
        borderRadius: 16,
    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
    },
    text: {
        fontSize: 16,
        color: 'white',
    },
});