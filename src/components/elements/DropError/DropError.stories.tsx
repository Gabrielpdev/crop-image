import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropError } from '.';

export default {
  title: 'Components/Elements/DropError',
  component: DropError,
  argTypes: {},
} as ComponentMeta<typeof DropError>;

export const Template: ComponentStory<typeof DropError> = (args) => (
  <DropError {...args} />
);
