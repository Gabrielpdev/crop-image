/* istanbul ignore file */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditImage } from '.';

export default {
  title: 'Components/Elements/EditImage',
  component: EditImage,
  argTypes: {},
} as ComponentMeta<typeof EditImage>;

export const Template: ComponentStory<typeof EditImage> = (args) => (
  <EditImage {...args} />
);
