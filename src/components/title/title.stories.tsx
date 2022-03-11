import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from './title';

export default {
  title: 'React/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  children: 'Section title h1',
};

export const H2 = Template.bind({});
H2.args = {
  level: 2,
  children: 'Section title h2',
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
  children: 'Section title h3',
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  children: 'Section title h4',
};

export const H5 = Template.bind({});
H5.args = {
  level: 5,
  children: 'Section title h5',
};

export const H6 = Template.bind({});
H6.args = {
  level: 6,
  children: 'Section title h6',
};
