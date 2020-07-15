import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, LoggedInRoute, DisabledLoggedInRoute } from './components';
import { FolderContextProvider } from './context/FolderContext';

const Routes = () => {
    return (
        <FolderContextProvider>
            <BrowserRouter>
                <Header />
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={lazy(() => import('./pages/Home'))} />
                            <LoggedInRoute exact path="/folders" component={lazy(() => import('./pages/Folders'))} />
                            <LoggedInRoute path="/folders/:id" component={lazy(() => import('./pages/SubFolders'))} />
                            <LoggedInRoute path="/profile" component={lazy(() => import('./pages/Profile'))} />
                            <DisabledLoggedInRoute path="/signup" component={lazy(() => import('./pages/Signup'))} />
                            <DisabledLoggedInRoute path="/signin" component={lazy(() => import('./pages/Signin'))} />
                        </Switch>
                    </Suspense>
                </main>
            </BrowserRouter>
        </FolderContextProvider>
    )
}

export default Routes;