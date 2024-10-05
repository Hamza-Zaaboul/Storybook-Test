

import type { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, ButtonStorie } from '@/components/button-main';

const meta: Meta<ButtonProps> = {
  title: "Main/Button",
  component: ButtonStorie,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "desktop"
    }
  },
  args: {
    children: "Button",
    variant: 'primary',
    disabled: false,
    size: "medium"
  },
  argTypes: {
    children:{
        name: "Label",
        control: 'text',
        description: 'Text to display on the button',
         table: {
            disable:true,
         }
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: "boolean",
    },
  }
};

export default meta;

type Story = StoryObj<typeof ButtonStorie>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: "destructive"
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: "large"
  }
};

export const Dark: Story = {
  args: {
    children: 'Dark Button',
  },
  parameters: {
    themes: {
      themeOverride: "dark",
    }
  }
};

export const Mobile: Story = {
  args: {
    children: 'Mobile Button',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};