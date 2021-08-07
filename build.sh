#! /bin/bash

npm run eslint:fix
tsc
./node_modules/.bin/esbuild src/index.ts --bundle --platform=browser --format=esm --minify --sourcemap=external --outfile=dist/bundle.browser.min.js
./node_modules/.bin/esbuild src/index.ts --bundle --platform=node --format=esm --minify --sourcemap=external --outfile=dist/bundle.node.min.js
echo 'generating flow definitions'
for f in $(find ./dist -name "*.d.ts")
do
  echo $f
  fdef=${f/.d.ts/.js.flow}
  ./node_modules/.bin/flowgen $f --output-file=$fdef
  echo $fdef
done
echo 'done'
