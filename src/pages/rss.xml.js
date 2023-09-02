import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const items = posts
    .map((post) => {
      if (post.data.hide) return;
      delete post.data.hide;
      return {
        ...post.data,
        link: `/blog/${post.slug}/`,
      };
    })
    .filter(Boolean); // remove nulls

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: items,
  });
}
