import classNames from 'classnames';
import { InputErrorLabelProps } from './types';

const InputErrorLabel = ({
    id,
    className,
    error,
}: InputErrorLabelProps) => (
    <div
        id={id}
        className={classNames(
            'items-end text-xs text-red-500 dark:text-red-700',
            className,
        )}
    >
        {error}
    </div>
);

export default InputErrorLabel;
