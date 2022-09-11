import React from "react";
import { Meta, Story } from "@storybook/react";
import Entity from "./Entity";
import EntityType from "../interface/entity.interface";
import { ACCESS_LIST } from "../enums/access.enum";

export default {
  title: "Entity",
  component: Entity,
  argTypes: {
    onEntityClick: {
      action: (item: EntityType) => {
        console.log(item);
      },
    },
  },
} as Meta;

type EntityProps = {
  onEntityClick?: (item: EntityType) => void;
  entity: EntityType;
  showEmail?: boolean;
};

const Template: Story<EntityProps> = (args) => <Entity {...args} />;

export const Random = Template.bind({});

Random.args = {
  entity: {
    id: 0,
    name: "Tom Cook",
    avatarUrl: "https://i.pravatar.cc/50??u=tom",
    email: "tom@email.com",
    isPerson: true,
    access: ACCESS_LIST.NO_ACCESS,
  },
  showEmail: true,
};
