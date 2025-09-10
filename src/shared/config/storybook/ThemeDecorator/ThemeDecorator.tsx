import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className="app" style={{ width: '95vw' }}>
            <Story />
        </div>
    </ThemeProvider>
);
