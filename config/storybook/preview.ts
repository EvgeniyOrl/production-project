import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/provider/ThemeProvider';
import { Outline } from '../../src/shared/ui/Button/Button.stories';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
        },
    },
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
