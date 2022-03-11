import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SpaceBlock from './space-block';

export default {
  title: 'React/SpaceBlock',
  component: SpaceBlock,
} as ComponentMeta<typeof SpaceBlock>;

const Template: ComponentStory<typeof SpaceBlock> = (args) => (
  <SpaceBlock {...args} />
);

export const Large = Template.bind({});
Large.args = {
  blockHeight: 64,
  separatorHeight: 4,
  separatorColor: '#7B68EE',
};

export const Medium = Template.bind({});
Medium.args = {
  blockHeight: 24,
  separatorHeight: 2,
  separatorColor: '#7B68EE',
};

export const Small = Template.bind({});
Small.args = {
  blockHeight: 8,
  separatorHeight: 1,
  separatorColor: '#7B68EE',
};
