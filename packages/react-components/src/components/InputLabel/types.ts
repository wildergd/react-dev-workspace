import { ReactNode } from 'react';
import { BaseComponentProps } from '../types';

export interface RequiredAsteriskProps {
    required?: boolean;
}

export interface InputLabelProps extends BaseComponentProps {
    /** Text to be displayed. */
    label?: ReactNode;
    /** A boolean to hide the label. */
    hideLabel?: boolean;
    /** Indicates that the label should display a required asterisk.. */
    required?: boolean;
    /** The id of the input this label is attached to. */
    inputId?: string;
}
