import RenderIf from '../RenderIf';
import { RequiredAsteriskProps } from './types';

const RequiredAsterisk = ({ required = false }: RequiredAsteriskProps) => (
    <RenderIf isTrue={required}>
        <abbr className="text-red-400 dark:text-red-500 mx-0.5 no-underline cursor-help" title="required">*</abbr>
    </RenderIf>
);

export default RequiredAsterisk;
