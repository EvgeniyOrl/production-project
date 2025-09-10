import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface renderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRender(
    component: ReactNode,
    options: renderWithRouterOptions = {},
): ReactNode {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
