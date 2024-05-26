import { ReactNode } from 'react';

export type PropsWithChildren<P = unknown> = P & {
    /** The content of the component. */
    children: ReactNode
};

export type PropsWithOptionalChildren<P = unknown> = P & {
    /** The optional content of the component. */
    children?: ReactNode
};

export interface BaseComponentProps {
    /** The id of the outer element. */
    id?: string;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
}

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = 'default' | 'destructive';
