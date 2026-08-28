import { basename, dirname, join } from 'node:path';
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            provider: "v8",
            reporter: ["text", "json", "html"],
        },
        resolveSnapshotPath(testPath, snapExtension, context) {
            return join(
                dirname(testPath),
                '__snapshots__',
                context.config.name ?? 'default',
                basename(testPath) + snapExtension,
            )
        },
        typecheck: {
            tsconfig: './tsconfig.json',
            enabled: true,
        },
    },
});
