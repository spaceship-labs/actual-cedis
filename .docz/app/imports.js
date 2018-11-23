export const imports = {
  'src/app.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-app" */ 'src/app.mdx'),
};
