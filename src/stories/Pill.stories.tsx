import React from "react";
import { Meta, Story } from "@storybook/react";
import Pill from "./Pill";

export default {
  title: "Pill",
  component: Pill,
  argTypes: {
    onCloseClick: {
      action: (id: number) => {
        console.log(id);
      },
    },
  },
} as Meta;

type PillProps = {
  name: string;
  id: number;
  onCloseClick: (id: number) => void;
};

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  name: "Example Pill",
  id: 1,
};
