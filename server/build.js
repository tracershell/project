// build.js (server용 esbuild 설정)
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./server.js'],
  bundle: true,
  platform: 'node',
  target: ['node18'],
  outfile: 'dist/server.bundle.js',
  external: ['express'],
}).catch(() => process.exit(1));
