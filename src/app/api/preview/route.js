import { redirectToPreviewURL } from "@prismicio/next";
import { createClient } from "@/prismicio";

/**
 * This endpoint handles previews that are launched
 * from the Page Builder.
 */

export async function GET(request) {
  const client = createClient();

  return await redirectToPreviewURL({ client, request });
}
