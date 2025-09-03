import {Story} from "@storybook/react";
import {Theme} from "app/provider/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
    <div className={`app ${theme}`} style={{width:'95vw'}}>
        <Story/>
    </div>
);
