export default {
  src: './',
  files: '**/*.{md,markdown,mdx}',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 9000,
};
