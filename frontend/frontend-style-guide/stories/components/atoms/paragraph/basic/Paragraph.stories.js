import { createParagraph } from "./Paragraph.create";
import Paragraph from './../Paragraph.mdx';
import { mock } from "./Paragraph.mock";

export default {
  title: "Components/Atoms/Paragraph",
  argTypes: {
    content: {
      control: "text",
      description: "Text that will be displayed in the paragraph"
    },
  },
  parameters: {
    docs: {
      page: Paragraph,
    },
  }
};

const Template = (args) => createParagraph(args);

export const Basic = Template.bind({});
Basic.args = {
  content: mock.basic
};
