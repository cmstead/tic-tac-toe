export const config = {
    reporters: ['beyondcompare', 'kdiff3', 'vscode'],

    normalizeLineEndingsTo: '\n',

    appendEOL: true,

    EOL: "\n",

    errorOnStaleApprovedFiles: true,

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    shouldIgnoreStaleApprovedFile: function (/*fileName*/) { return false; },

    blockUntilReporterExits: true,

    stripBOM: true,

    forceApproveAll: false
};