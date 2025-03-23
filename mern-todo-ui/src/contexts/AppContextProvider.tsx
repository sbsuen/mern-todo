import React from 'react';

import { SelectedTaskProvider } from './SelectedTaskContext';
import { ToDoListProvider } from './ToDoListContext';

const composeProviders = (providers: React.FC<any>[]) => {
	return providers.reduce((Acc, Provider) => {
		return (
            props =>
                <Provider>
                    <Acc {...props} />
                </Provider>
        );
	})
};

const AppContextProvider = composeProviders([
    ToDoListProvider,
    SelectedTaskProvider,
    // …
]);

export default AppContextProvider