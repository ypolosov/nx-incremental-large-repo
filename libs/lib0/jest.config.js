module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/libs/lib0/impl',

  displayName: 'lib0',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
