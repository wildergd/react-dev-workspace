import { render, screen, cleanup } from '@testing-library/react';
import RenderIf from '..';

describe('<RenderIf/>', () => {
    afterEach(cleanup);
    it('should not render the children when isTrue is false', () => {
        render(
            <RenderIf isTrue={false}>
                <h1>Some title</h1>
            </RenderIf>,
        );
        expect(screen.queryByText('Some title')).toBeNull();
    });
    it('should render the children when isTrue is true', () => {
        render(
            <RenderIf isTrue>
                <h1>Some title</h1>
            </RenderIf>,
        );
        expect(screen.getByText('Some title')).not.toBeNull();
    });
});
