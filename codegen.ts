import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://nrxsmjzk.api.sanity.io/v1/graphql/production/default",
  generates: {
    "src/interfaces/SanityGraphql.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
