/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query getAllPosts {\n      allPost {\n        title\n        slug {\n          current\n        }\n        publishedAt\n      }\n    }\n  ": types.GetAllPostsDocument,
    "\n    query getAllSlugs {\n      allPost {\n        slug {\n          current\n        }\n      }\n    }\n  ": types.GetAllSlugsDocument,
    "\n    query getPostBySlug($slug: String) {\n      allPost(where: { slug: { current: { eq: $slug } } }) {\n        bodyRaw\n        author {\n          name\n          image {\n            asset {\n              source {\n                url\n              }\n            }\n          }\n        }\n        publishedAt\n        title\n      }\n    }\n  ": types.GetPostBySlugDocument,
    "\n    query GetAllPostSummary {\n      allPost(limit: 3) {\n        slug {\n          current\n        }\n        publishedAt\n        title\n      }\n    }\n  ": types.GetAllPostSummaryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAllPosts {\n      allPost {\n        title\n        slug {\n          current\n        }\n        publishedAt\n      }\n    }\n  "): (typeof documents)["\n    query getAllPosts {\n      allPost {\n        title\n        slug {\n          current\n        }\n        publishedAt\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAllSlugs {\n      allPost {\n        slug {\n          current\n        }\n      }\n    }\n  "): (typeof documents)["\n    query getAllSlugs {\n      allPost {\n        slug {\n          current\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPostBySlug($slug: String) {\n      allPost(where: { slug: { current: { eq: $slug } } }) {\n        bodyRaw\n        author {\n          name\n          image {\n            asset {\n              source {\n                url\n              }\n            }\n          }\n        }\n        publishedAt\n        title\n      }\n    }\n  "): (typeof documents)["\n    query getPostBySlug($slug: String) {\n      allPost(where: { slug: { current: { eq: $slug } } }) {\n        bodyRaw\n        author {\n          name\n          image {\n            asset {\n              source {\n                url\n              }\n            }\n          }\n        }\n        publishedAt\n        title\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetAllPostSummary {\n      allPost(limit: 3) {\n        slug {\n          current\n        }\n        publishedAt\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GetAllPostSummary {\n      allPost(limit: 3) {\n        slug {\n          current\n        }\n        publishedAt\n        title\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;