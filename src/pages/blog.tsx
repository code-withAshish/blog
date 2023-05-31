import LayoutWrapper from "@/components/LayoutWrapper";
import ListLayout from "@/components/ListLayout";
import { GetAllPostsQuery } from "@/lib/gql/graphql";
import { GraphqlFetcher } from "@/lib/utils/graphql-utils";
import { gql } from "graphql-request";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const QUERY = gql`
    query getAllPosts {
      allPost {
        title
        slug {
          current
        }
        publishedAt
      }
    }
  `;

  const queryData: GetAllPostsQuery = await GraphqlFetcher.request(QUERY);

  return {
    props: { posts: queryData.allPost },
  };
};

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <LayoutWrapper>
        <ListLayout posts={posts} title={"Blogs"} />
      </LayoutWrapper>
    </>
  );
}
