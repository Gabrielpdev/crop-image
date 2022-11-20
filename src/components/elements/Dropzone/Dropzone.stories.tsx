/* istanbul ignore file */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useDropzone } from 'react-dropzone';
import { Dropzone } from '.';

export default {
  title: 'Components/Elements/Dropzone',
  component: Dropzone,
  argTypes: {
    isDragActive: {
      control: {
        type: 'boolean',
      },
    },
  },
  control: {},
} as ComponentMeta<typeof Dropzone>;

export const Template: ComponentStory<typeof Dropzone> = (args) => {
  const { getInputProps } = useDropzone();

  return <Dropzone {...args} getInputProps={getInputProps} />;
};
