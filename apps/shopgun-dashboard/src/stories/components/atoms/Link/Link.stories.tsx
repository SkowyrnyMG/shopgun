import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "components/atoms/Link";

export default {
  title: "Link",
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkVariant = Template.bind({});
