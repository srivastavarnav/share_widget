import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import { BUTTON_ICONS, BUTTON_VARIANTS, LABEL_SIZE } from '../enums/button.enum';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: [BUTTON_VARIANTS.PRIMARY, BUTTON_VARIANTS.SECONDARY],
      control: { type: "radio" },
    },
    icon: {
      options: [BUTTON_ICONS.NONE, BUTTON_ICONS.SHARE],
      control: { type: "select" },
    },
    onClick: { action: "clicked" },
    style: {
      defaultValue: {},
    },
    label: {
      options: [LABEL_SIZE.BIG, LABEL_SIZE.SMALL],
      control: { type: "radio" },
    },
  },
} as Meta;

type ButtonProps = {
  label: string;
  variant: string;
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Btn",
  variant: BUTTON_VARIANTS.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Btn",
  variant: BUTTON_VARIANTS.SECONDARY,
};
