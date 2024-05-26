import { forwardRef } from 'react';
import classNames from 'classnames';
import { ButtonSize, ButtonVariant } from '../types';
import { ButtonIconProps } from './types';

const buttonSizeMap: Record<ButtonSize, string> = {
    small: 'w-7 h-7 p-1',
    medium: 'w-12 h-12 p-2',
    large: 'w-16 h-16 p-3',
};

const buttonColorMap: Record<ButtonVariant, string> = {
    default: 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-50',
    destructive: 'text-red-500 hover:text-red-700 dark:text-red-600 dark:hover:text-red-500',
};

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
    ({
        className,
        icon,
        title,
        size = 'medium',
        variant = 'default',
        disabled = false,
        type = 'button',
        onClick = () => { },
    }, ref) => (
        <button
            ref={ref}
            title={title}
            className={classNames(
                'flex',
                disabled ? 'opacity-30 pointer-events-none cursor-auto' : 'cursor-pointer',
                buttonSizeMap[size],
                (buttonColorMap[variant] || buttonColorMap.default),
                className,
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {icon}
        </button>
    ),
);

export default ButtonIcon;
