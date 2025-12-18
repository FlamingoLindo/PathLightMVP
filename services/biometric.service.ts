import * as LocalAuthentication from 'expo-local-authentication';

export interface BiometricCheckResult {
    isAvailable: boolean;
    isEnrolled: boolean;
    biometricTypes: number[];
}

export const checkBiometricAvailability = async (): Promise<BiometricCheckResult> => {
    const [hasHardware, isEnrolled, biometricTypes] = await Promise.all([
        LocalAuthentication.hasHardwareAsync(),
        LocalAuthentication.isEnrolledAsync(),
        LocalAuthentication.supportedAuthenticationTypesAsync(),
    ]);

    return {
        isAvailable: hasHardware && isEnrolled,
        isEnrolled,
        biometricTypes,
    };
};

export const authenticateWithBiometrics = async (
    promptMessage: string = "Authenticate to login"
): Promise<boolean> => {
    try {
        const result = await LocalAuthentication.authenticateAsync({
            promptMessage,
            disableDeviceFallback: false,
            cancelLabel: "Cancel",
        });

        return result.success;
    } catch (error) {
        console.error("Biometric authentication error:", error);
        return false;
    }
};