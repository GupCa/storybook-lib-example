// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import ChildComponent from './child.component';
import { Meta, Story } from '@storybook/angular/types-6-0';

export default {
  title: 'Example/Child',
  component: ChildComponent,
  argTypes: {
    grandParentOutput: { action: 'grandParentOutput' },
  },
} as Meta;

const Template: Story<ChildComponent> = (args: ChildComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  childInput: 'some child input',
  grandParentInput: 'some grand parent input',
};
