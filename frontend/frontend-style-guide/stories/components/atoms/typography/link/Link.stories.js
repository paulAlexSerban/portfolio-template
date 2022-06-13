import { createLink } from "./Link.create";
import LinkMdx from "./Link.mdx";

export default {
  title: "Components/Atoms/Typography/Link",
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    target: { control: "select", options: ["_blank", "_self"] },
    type: { control: "select", options: ["storybook", "basic"] },
  },
  parameters: {
    docs: {
      page: LinkMdx,
    },
  }
};

export const Link = (args) => createLink(args);
