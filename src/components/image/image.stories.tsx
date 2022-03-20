import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from './image';

export default {
  title: 'React/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Main = Template.bind({});
Main.args = {
  width: 400,
  height: 250,
  src: 'https://video.kinoafisha.info/news/8342581_886703989311.jpg',
  alt: 'Лю Цысинь - Задача трёх тел',
};

export const Support = Template.bind({});
Support.args = {
  width: 300,
  height: 300,
  src: 'https://avatars.mds.yandex.net/get-zen_doc/1708669/pub_5e30260228a79920baedbdff_5e302cb3447a0e3ce191a90b/scale_1200',
  alt: 'Джеймс Кори - Пробуждение Левиафана',
};
