import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
  };
}

export default async function Page({ params }) {
  const client = createClient();
  const page = await client.getByUID("page", params.uid);

  return <SliceZone slices={page.data.slices} components={components} />
}


export async function generateStaticParams() {
  const client = createClient();

  /**
   * Query all Documents from the API, except the homepage.
   */
  const pages = await client.getAllByType("page", {
    predicates: [prismic.filter.not("my.page.uid", "home")],
  });

  /**
   * Define a path for every Document.
   */
  return pages.map((page) => {
    return { uid: page.uid };
  });
}
