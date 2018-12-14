module.exports = function(api) {
  console.log('FUNCAA');
  const presets = ['react-app'];
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          containers: './src/containers',
          components: './src/components',
          config: './src/config',
          theme: './src/theme',
        },
      },
    ],
  ];
  api.cache.forever();
  return { presets, plugins };
};
