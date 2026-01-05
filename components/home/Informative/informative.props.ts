export interface InfoProps {
    backgroundColor?: string;
    title?: string;
    text?: string;
    icon?: {
        name: string;
        size: number;
        color: string;
    }
    action?: () => void;
}