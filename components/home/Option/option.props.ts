export interface OptionProps {
    icon: {
        name: string;
        size: number;
        color: string;
    }
    title: string;
    action?: () => void;
}