module.exports = {
  name: 'dri-app',
  exposes: {
    './Module': 'packages/dri-app/src/app/remote-entry/entry.module.ts',
  },
};
