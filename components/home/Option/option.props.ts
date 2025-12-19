import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

export interface OptionProps {
    icon: {
        name: ComponentProps<typeof Ionicons>['name'];
        size: number;
        color: string;
    }
    title: string;
}