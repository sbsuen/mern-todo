import React from 'react';

import { SelectedTaskProvider } from './SelectedTaskContext';

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
    SelectedTaskProvider
    // …
]);

export default AppContextProvider