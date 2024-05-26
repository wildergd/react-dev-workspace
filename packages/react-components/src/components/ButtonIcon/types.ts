import { ReactNode } from 'react';
import {
    BaseComponentProps, ButtonSize, ButtonType, ButtonVariant,
} from '../types';

export interface ButtonIconProps extends BaseComponentProps {
    icon?: ReactNode;
    type?: ButtonType;
    title?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    disabled?: boolean;
    onClick?: () => void;
}
