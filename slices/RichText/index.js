import { PrismicRichText } from "@prismicio/react";
import styles from "./index.module.css";

const components = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param { RichTextProps }
 */
export default function RichText({ slice }) {
  return (
    <section className={styles.richtext}>
      {/* import {PrismicRichText} from '@prismicio/react' */}
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
}
