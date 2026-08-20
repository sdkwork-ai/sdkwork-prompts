import { spawnSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const sdkgen = join(root, "../sdkwork-sdk-generator/bin/sdkgen.js");

const families = [
  {
    input: "sdks/sdkwork-prompts-app-sdk/openapi/sdkwork-prompts-app-api.openapi.yaml",
    name: "sdkwork-prompts-app-sdk",
    type: "app",
    packageName: "@sdkwork/prompts-app-sdk",
    apiPrefix: "/app/v3/api",
    clientName: "SdkworkPromptsAppClient",
  },
  {
    input: "sdks/sdkwork-prompts-backend-sdk/openapi/sdkwork-prompts-backend-api.openapi.yaml",
    name: "sdkwork-prompts-backend-sdk",
    type: "backend",
    packageName: "@sdkwork/prompts-backend-sdk",
    apiPrefix: "/backend/v3/api",
    clientName: "SdkworkPromptsBackendClient",
  },
  {
    input: "sdks/sdkwork-prompts-sdk/openapi/sdkwork-prompts-open-api.openapi.yaml",
    name: "sdkwork-prompts-sdk",
    type: "custom",
    packageName: "@sdkwork/prompts-sdk",
    apiPrefix: "/prompts/v3/api",
    clientName: "SdkworkPromptsOpenClient",
  },
];

const languages = ["typescript", "rust"];

for (const family of families) {
  for (const lang of languages) {
    const outputDir =
      lang === "typescript"
        ? `sdks/${family.name}/generated/server-openapi`
        : `sdks/${family.name}/${family.name}-${lang}/generated/server-openapi`;
    const args = [
      sdkgen,
      "generate",
      "-i",
      join(root, family.input),
      "-o",
      join(root, outputDir),
      "-n",
      family.name,
      "-t",
      family.type,
      "-l",
      lang,
      "--package-name",
      family.packageName,
      "--api-prefix",
      family.apiPrefix,
      "--standard-profile",
      "sdkwork-v3",
      "--client-name",
      family.clientName,
      "--sdk-version",
      "0.1.0",
      "--no-sync-published-version",
    ];
    console.log(`sdkgen ${family.name} [${lang}]`);
    const result = spawnSync(process.execPath, args, { stdio: "inherit", cwd: root });
    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  }
}

console.log("prompts SDK generation complete");
