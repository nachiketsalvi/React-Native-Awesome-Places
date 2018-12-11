// Add any configuration here
// NOTE: "transform-inline-environment-variables" requires writing with
// array-access style to transform properly. `process.env.API_HOST` won't work

/* **Do not add any secrets to app configuration** */

// export const NAME = get(process.env['NAME'], <sane default>);
declare const process: any;

const get = (value, def) => (value ? value : def);
