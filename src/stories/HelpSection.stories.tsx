import React from "react";
import { Meta, Story } from "@storybook/react";
import HelpSection from "./HelpSection";

export default {
  title: "HelpSection",
  component: HelpSection,
} as Meta;

type HelpSectionProps = {
  showCopyBtn?: boolean;
};

const Template: Story<HelpSectionProps> = (args) => <HelpSection {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  showCopyBtn: true,
};
