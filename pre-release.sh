#!/bin/bash

CHNGLG=CHANGELOG.md
RDM=README.md
NAME=$(node -e "console.log(require('./package.json').name)")
VERSION=$(node -e "console.log(require('./package.json').version)")
today=$(date +%Y-%m-%d)
line="# [v${VERSION}](https:\/\/github.com\/carvilsi\/${NAME}\/releases\/tag\/v${VERSION}) (${today})"
last_release_date=$(head -n 3 CHANGELOG.md | tail -1 | awk '{ print $3 }' | sed 's/(\|)//g')
commit_message=$(git log --after=${last_release_date} --format='- %s' | grep -v 'Merge' |  sed '{:q;N;s/\n//g;t q}')
total_faces=$(awk '/TOTAL_FACES =/ { print $4 }' tests/main.test.js | sed 's/;//g');
sed -i 's/with [0-9]*/with ${total_faces}/g' README.md

#sed -i '2s/^/\nnewchangelogentry\n/' $CHNGLG
#sed -i "s/newchangelogentry/${line}\n\n- ${commit_message}/g" $CHNGLG

