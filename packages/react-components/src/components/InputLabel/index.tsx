import RenderIf from '../RenderIf';
import { InputLabelProps } from './types';
import RequiredAsterisk from './requiredAsterisx';

const InputLabel = ({
    id,
    inputId,
    label,
    hideLabel = false,
    required = false,
}: InputLabelProps) => {
    if (hideLabel) {
        return (
            <label
                className="absolute w-[1px] h-[1px] -m-[1px] overflow-hidden"
                htmlFor={inputId}
                id={id}
            >
                {label}
                <RequiredAsterisk required={required} />
            </label>
        );
    }
    return (
        <RenderIf isTrue={!!label}>
            <label
                className="text-sm font-light text-gray-400 dark:text-gen_lightgray-700"
                htmlFor={inputId}
                id={id}
            >
                {label}
                <RequiredAsterisk required={required} />
            </label>
        </RenderIf>
    );
};

export default InputLabel;
