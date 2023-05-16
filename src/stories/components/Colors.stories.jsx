import ColorsExample from './Colors'; 

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Colors',
  component: ColorsExample,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args 

export const Success = {
  args: {
    primary: true,
    wcag: 'AA 5.31' , 
    number: 25, 
    hex: "#F6FEF9"
  },
};

export const Warning = {
  args: {
    ...Success.args,
  },
};

export const Error = {
  args: {
    ...Success.args,
  },
};
