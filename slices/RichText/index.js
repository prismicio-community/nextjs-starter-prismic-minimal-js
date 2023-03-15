import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './index.module.css'

const components = {
  label: ({ node, children }) =>
    node.data.label === 'codespan' ? <code>{children}</code> : null,
}

/**
 * @typedef {import("@prismicio/client").Content.RichTextSlice} RichTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RichTextSlice>} RichTextProps
 * @param { RichTextProps }
 */
const RichText = ({ slice }) => (
  <section className={styles.richtext}>
    {/* import {PrismicRichText} from '@prismicio/react' */}
    <PrismicRichText field={slice.primary.content} components={components} />
  </section>
)

export default RichText
