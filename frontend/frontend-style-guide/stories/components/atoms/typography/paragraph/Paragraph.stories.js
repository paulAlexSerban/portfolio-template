import { createParagraph } from "./Paragraph.create";
import ParagraphMdx from './Paragraph.mdx';
import { mock } from "./Paragraph.mock";

export default {
  title: "Components/Atoms/Typography/Paragraph",
  argTypes: {
    content: {
      control: "text",
      description: "Text that will be displayed in the paragraph"
    },
  },
  args: {
    content: mock.basic
  },
  parameters: {
    docs: {
      page: ParagraphMdx,
    },
  }
};

export const Paragraph  = (args) => createParagraph(args);