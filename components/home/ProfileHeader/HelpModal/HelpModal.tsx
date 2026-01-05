import { HelpModalStyle } from "@/styles/components/home/profileHeader/helpModal/helpModal.style";
import { Ionicons } from "@expo/vector-icons";
import { Linking, Modal, Text, TouchableOpacity, View } from "react-native";
import { HelpModalProps } from "./helpModal.props";

const HelpModal = ({ isVisible, onClose }: HelpModalProps) => {
    const socialMediaLinks = [
        { icon: 'logo-youtube', url: 'https://www.youtube.com/@Pathlight_HOME', label: 'YouTube' },
        { icon: 'logo-facebook', url: 'https://www.facebook.com/PathlightHOME/', label: 'Facebook' },
        { icon: 'logo-linkedin', url: 'https://www.linkedin.com/company/pathlighthome/', label: 'LinkedIn' },
        { icon: 'logo-instagram', url: 'https://www.instagram.com/pathlight_home/', label: 'Instagram' },
    ];

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
            statusBarTranslucent
        >
            <View style={HelpModalStyle.modalOverlay}>
                <View style={HelpModalStyle.modalContent}>
                    <View style={HelpModalStyle.modalHeader}>
                        <Text style={HelpModalStyle.modalTitle}>Help & Information</Text>
                        <TouchableOpacity
                            onPress={onClose}
                            style={HelpModalStyle.modalCloseButton}
                        >
                            <Ionicons name="close" size={24} color="#333" />
                        </TouchableOpacity>
                    </View>

                    <View style={HelpModalStyle.modalBody}>
                        <View style={HelpModalStyle.helpItem}>
                            <Ionicons name="eye-outline" size={20} color="#b86bab" />
                            <View style={HelpModalStyle.helpText}>
                                <Text style={HelpModalStyle.helpTitle}>Toggle Balance Visibility</Text>
                                <Text style={HelpModalStyle.helpDescription}>
                                    Tap the eye icon to show or hide your balance amount.
                                </Text>
                            </View>
                        </View>

                        <View style={HelpModalStyle.helpItem}>
                            <Ionicons name="person-outline" size={20} color="#b86bab" />
                            <View style={HelpModalStyle.helpText}>
                                <Text style={HelpModalStyle.helpTitle}>Profile</Text>
                                <Text style={HelpModalStyle.helpDescription}>
                                    View and manage your account information.
                                </Text>
                            </View>
                        </View>

                        <View style={HelpModalStyle.socialMediaContainer}>
                            {socialMediaLinks.map((social) => (
                                <TouchableOpacity
                                    key={social.label}
                                    onPress={() => Linking.openURL(social.url)}
                                    accessibilityLabel={`Visit ${social.label}`}
                                >
                                    <Ionicons name={social.icon as any} size={30} color="#b86bab" />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default HelpModal;