import { config as approvalsConfig } from "./approvals.config";
import * as path from "path";

const basePath = path.join(process.cwd(), 'tests/approvals');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function configure() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const approvals = require('approvals').configure(approvalsConfig);

    return {
        verify: ({ value = '', description = '' }) => approvals.verify(basePath, description, value),
        verifyAsJSON: ({ value = {}, description = '' }: { value: any, description: string }) => approvals.verifyAsJSON(basePath, description, value)
    };
}

