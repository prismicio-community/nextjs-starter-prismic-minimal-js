import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices";

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */
export default function Page({ page }) {
  return (
    <main>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType('page', {
    predicates: [prismic.predicate.not('my.page.uid', 'home')],
  });

  /**
   * Define a path for every Document.
   */
  return {
    paths: pages.map((page) => {
      return prismicH.asLink(page);
    }),
    fallback: false,
  };
}
