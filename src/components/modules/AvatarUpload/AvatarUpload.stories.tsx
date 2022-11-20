import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AvatarUpload } from '.';

export default {
  title: 'Components/Modules/AvatarUpload',
  component: AvatarUpload,
  argTypes: {},
} as ComponentMeta<typeof AvatarUpload>;

export const Template: ComponentStory<typeof AvatarUpload> = (args) => (
  <AvatarUpload />
);
