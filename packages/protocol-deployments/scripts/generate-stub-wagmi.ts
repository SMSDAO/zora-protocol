#!/usr/bin/env tsx
/**
 * Generates a stub wagmi.ts file for build:js when contracts haven't been built yet.
 * This allows TypeScript packages to build without requiring contract compilation.
 */
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const stubContent = `// This is a stub file generated for build:js when contracts haven't been compiled
// For full functionality, run \`pnpm build\` to generate the complete wagmi.ts file

import type { Abi } from "viem";

// Export stub ABIs and addresses
export const zoraMints1155Address = {} as Record<number, \`0x\${string}\`>;
export const iPremintDefinitionsABI = [] as Abi;
export const sponsoredSparksSpenderAddress = {} as Record<number, \`0x\${string}\`>;
export const sponsoredSparksSpenderABI = [] as Abi;
export const commentsAddress = {} as Record<number, \`0x\${string}\`>;
export const callerAndCommenterAddress = {} as Record<number, \`0x\${string}\`>;
export const poolConfigEncodingABI = [] as Abi;
export const commentsABI = [] as Abi;
export const callerAndCommenterABI = [] as Abi;
export const zoraCreator1155FactoryImplAddress = {} as Record<number, \`0x\${string}\`>;
export const zoraCreator1155PremintExecutorImplABI = [] as Abi;
export const protocolRewardsAddress = {} as Record<number, \`0x\${string}\`>;
export const zoraSparksManagerImplAddress = {} as Record<number, \`0x\${string}\`>;
export const coinFactoryAddress = {} as Record<number, \`0x\${string}\`>;
export const coinFactoryABI = [] as Abi;
export const coinABI = [] as Abi;
export const zoraFactoryImplABI = [] as Abi;
export const permit2ABI = [] as Abi;
export const permit2Address = {} as Record<number, \`0x\${string}\`>;
`;

const outputPath = join(process.cwd(), "src", "generated", "wagmi.ts");

// Ensure the directory exists
mkdirSync(join(process.cwd(), "src", "generated"), { recursive: true });

// Write the stub file
writeFileSync(outputPath, stubContent, "utf-8");

console.log("Generated stub wagmi.ts file for build:js");
