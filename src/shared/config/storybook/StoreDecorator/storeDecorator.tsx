import { Story } from '@storybook/react';
import { StoreProvider } from 'app/provider/StoreProvider';

export const storeDecorator = (Story: Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
