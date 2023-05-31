import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://y82metg4.api.sanity.io/v1/graphql/production/experiment",
  documents: "src/**/*.tsx",
  generates: {
    "src/lib/gql/": {
      preset: "client",
    },
  },
};
export default config;
