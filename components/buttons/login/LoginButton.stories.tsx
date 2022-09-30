import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginButton, { ILoginButton } from './LoginButton';
import { mockLoginButtonProps } from './LoginButton.mocks';

export default {
  title: 'buttons/LoginButton',
  component: LoginButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LoginButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginButton> = (args) => (
  <LoginButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockLoginButtonProps.base,
} as ILoginButton;
