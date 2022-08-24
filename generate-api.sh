#!/usr/bin/env -S bash -xe

shopt -s globstar

rm -fr fixtures/
mkdir -p fixtures/
curl https://raw.githubusercontent.com/aptos-labs/aptos-core/devnet/api/doc/spec.yaml >fixtures/openapi.yaml

rm -fr packages/aptos-api/src
yarn openapi -i fixtures/openapi.yaml -o packages/aptos-api/src/ -c axios --name AptosGeneratedClient --exportSchemas true
sed -i 's|from '\''\.\([[:alnum:]_/\.\-\$]*\)*'\'';|from '\''.\1.js'\'';|g' packages/aptos-api/src/**/*.ts
sed -i 's/import axios from/import { default as axios } from/g' packages/aptos-api/src/**/*.ts

yarn prettier --write fixtures/openapi.yaml
yarn prettier --write packages/aptos-api/src/**/*.ts
