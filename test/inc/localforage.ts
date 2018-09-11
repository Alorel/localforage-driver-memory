const env = process.env.LF_VERSION;
const lfPackage = !env || env === 'latest' ? 'localforage' : `lf-${env}`;

export const lf: any = require(lfPackage);
