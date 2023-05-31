import { GetAllPostSummaryQuery } from "@/lib/gql/graphql";
import { GraphqlFetcher } from "@/lib/utils/graphql-utils";
import { gql } from "graphql-request";
import Link from "next/link";

export async function getStaticProps() {
  const QUERY = gql`
    query GetAllPostSummary {
      allPost(limit: 3) {
        slug {
          current
        }
        publishedAt
        title
      }
    }
  `;

  const queryData: GetAllPostSummaryQuery = await GraphqlFetcher.request(QUERY);
  return { props: { posts: queryData.allPost } };
}

export default function Home({
  posts,
}: {
  posts: GetAllPostSummaryQuery["allPost"];
}) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Ashish Blogs
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I write here just a tiny fraction of what goes in my mind, feel free
            to explore me 😊
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && "No posts found."}
          {posts.map((frontMatter) => {
            const { slug, publishedAt, title } = frontMatter;
            const date = new Date(publishedAt).toDateString();
            return (
              <li key={slug?.current} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={publishedAt}>{date}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug?.current}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug?.current}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          href="/blog"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="all posts"
        >
          All Posts &rarr;
        </Link>
      </div>
    </>
  );
}
