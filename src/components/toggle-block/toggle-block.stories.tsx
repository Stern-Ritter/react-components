import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleBlock from './toggle-block';

export default {
  title: 'React/ToggleBlock',
  component: ToggleBlock,
} as ComponentMeta<typeof ToggleBlock>;

const Template: ComponentStory<typeof ToggleBlock> = (args) => (
  <ToggleBlock {...args} />
);

export const Example = Template.bind({});
Example.args = {
  title: 'Example toggle block (click me!)',
  children:
    'Противоположная точка зрения подразумевает, что элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, ассоциативно распределены по отраслям. Но элементы политического процесса могут быть объявлены нарушающими общечеловеческие нормы этики и морали. Банальные, но неопровержимые выводы, а также элементы политического процесса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, объявлены нарушающими общечеловеческие нормы этики и морали.',
};
