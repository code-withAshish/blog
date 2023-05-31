import { GraphQLClient } from "graphql-request";

export { gql } from "graphql-request";
export const GraphqlFetcher = new GraphQLClient(process.env.GRAPHQL_URL!);
