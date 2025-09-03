import React from 'react';
import {AppLink, AppLinkTheme} from './AppLink';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/provider/ThemeProvider";

export default {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/'
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    children: 'link',
    theme: AppLinkTheme.PRIMARY,
}
export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'link',
    theme: AppLinkTheme.PRIMARY,
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'link',
    theme: AppLinkTheme.SECONDARY,
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    children: 'link',
    theme: AppLinkTheme.SECONDARY,
}

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({})
Red.args = {
    children: 'link',
    theme: AppLinkTheme.RED,
}
