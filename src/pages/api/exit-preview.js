import * as prismicNext from '@prismicio/next'

/**
 * This endpoint exits a preview session.
 */
export default async function handler(req, res) {
  prismicNext.exitPreview({ res, req })
}
