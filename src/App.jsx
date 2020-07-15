import React from 'react'
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

if (module.hot) {
    module.hot.accept();
}

export default App;