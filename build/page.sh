#! /usr/bin/env sh
set -e
yarn docs:build
cd examples/docs/.vuepress/dist
git init
git add -A
git commit -m '[git page]kflowui design'
git push -f https://github.com/kjd1000000/KFlowUI.git master:gh-pages
cd ..
rm -rf ./dist
cd ../../