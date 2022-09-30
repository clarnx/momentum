import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogoutButton, { ILogoutButton } from './LogoutButton';
import { mockLogoutButtonProps } from './LogoutButton.mocks';

export default {
  title: 'buttons/LogoutButton',
  component: LogoutButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LogoutButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoutButton> = (args) => (
  <LogoutButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLogoutButtonProps.base,
} as ILogoutButton;
