import PostLayout from "@/components/PostLayout";
import {
  GetAllSlugsQuery,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
} from "@/lib/gql/graphql";
import { GraphqlFetcher } from "@/lib/utils/graphql-utils";
import { gql } from "graphql-request";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const QUERY = gql`
    query getAllSlugs {
      allPost {
        slug {
          current
        }
      }
    }
  `;
  const queryData: GetAllSlugsQuery = await GraphqlFetcher.request(QUERY);
  const paths = queryData.allPost.map(({ slug }) => {
    return {
      params: { slug: slug?.current! },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { slug = "" } = context.params!;
  const QUERY = gql`
    query getPostBySlug($slug: String) {
      allPost(where: { slug: { current: { eq: $slug } } }) {
        bodyRaw
        author {
          name
          image {
            asset {
              source {
                url
              }
            }
          }
        }
        publishedAt
        title
      }
    }
  `;
  const QUERY_VARIABLES: GetPostBySlugQueryVariables = { slug: slug as string };

  const queryData: GetPostBySlugQuery = await GraphqlFetcher.request(
    QUERY,
    QUERY_VARIABLES
  );

  return { props: { post: queryData.allPost[0] } };
};
export default function Blog({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PostLayout
        date={post.publishedAt}
        title={post.title!}
        authors={[
          {
            name: post.author?.name!,
            avatar: post.author?.image?.asset?.source?.url!,
          },
        ]}
      >
        {post.bodyRaw}
      </PostLayout>
    </>
  );
}
