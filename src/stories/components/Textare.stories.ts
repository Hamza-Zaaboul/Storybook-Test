"use client"
import { TextArea } from "@/components/text-area";
import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within, expect } from "@storybook/test";

const meta: Meta = {
  title: "Components/TextArea",
  component: TextArea,
  args: {
    label: "Text Area Label",
    placeholder: "Hello World",
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Label of the text area",
    },
    placeholder: {
      name: "Placeholder",
      control: "text",
      description: "Placeholder text of the text area",
    },
    disabled: {
      name: "Disabled",
      control: "boolean",
      description: "Disables the text area",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    required: {
      name: "Required",
      control: "boolean",
      description: "Marks the text area as required",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Disabled : Story = {
    args:{
        disabled : true
    },
    play : async({canvasElement}) => {
        const canvas = within(canvasElement);
		const textArea = canvas.getByRole('textbox');
 		expect(textArea).toBeDisabled();
        await userEvent.type(textArea, "Hello, world!");
        expect(textArea).toHaveValue('');
    }
}

export const MaxLength: Story = {
  args: {
    maxLength: 40,
    label: "Text Area Labeld dsffdfsfsdfdsfs",
    placeholder: "ddd",
    disabled: true,
    required: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");
    const count = canvas.getByTestId("length");

    const inputValue = "Hello, world!";

    userEvent.type(textArea, inputValue);
    expect(count).toHaveTextContent(inputValue.length.toString());
  },
};

export const LengthTooLong: Story = {
  args: {
    maxLength: 140,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textArea = canvas.getByRole("textbox");
    const count = canvas.getByTestId("length");

    const inputValue = "H" + "e".repeat(args.maxLength || 140) + "y!";

    await userEvent.type(textArea, inputValue);

    expect(count).toHaveTextContent(inputValue.length.toString());
    expect(textArea).toHaveClass("ring-danger-500");
    expect(count).toHaveStyle({ color: "rgb(237, 70, 86)" });
    expect(textArea).toHaveAttribute("aria-invalid", "true");
  },
};
