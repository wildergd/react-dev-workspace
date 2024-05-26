import { PropsWithChildren } from '../types';
import { RenderIfProps } from './types';

const RenderIf = ({
    isTrue = false,
    children,
}: PropsWithChildren<RenderIfProps>) => {
    if (isTrue) return children;
    return null;
};

export default RenderIf;
