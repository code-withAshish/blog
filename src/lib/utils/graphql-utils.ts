import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";
export const GraphqlFetcher = new GraphQLClient(
  "https://y82metg4.api.sanity.io/v1/graphql/production/experiment"
);
