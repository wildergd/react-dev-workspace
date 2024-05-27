import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ButtonIcon, InputLabel } from '@namespace/react-components';

const App = () => (
    <div className="flex fles-1 items-center gap-5 h-screen w-screen bg-slate-100 dark:bg-gray-900">
        <InputLabel label="This is a label" required />
        <ButtonIcon title="Add new" icon={<PlusCircleIcon />} />
    </div>
);

export default App;
