#!/usr/bin/env -S bash -xe

rm -fr fixtures/
mkdir -p fixtures/
curl https://raw.githubusercontent.com/aptos-labs/aptos-core/devnet/api/doc/openapi.yaml >fixtures/openapi.yaml

yarn swagger-typescript-api -p fixtures/openapi.yaml \
    --modular --axios --single-http-client --extract-request-params --extract-request-body --responses \
    -o packages/aptos-api/src/

rm -f packages/aptos-data-contracts/src/*
mv packages/aptos-api/src/data-contracts.ts packages/aptos-data-contracts/src/index.ts

sed -i 's/http-client"/http-client.js"/g' packages/aptos-api/src/*
sed -i 's|"./data-contracts"|"@aptosis/aptos-data-contracts"|g' packages/aptos-api/src/*
sed -i 's/import axios, {/import { default as axios,/g' packages/aptos-api/src/*

yarn prettier --write fixtures/openapi.yaml
yarn prettier --write packages/aptos-api/src/*.ts
yarn prettier --write packages/aptos-data-contracts/src/*.ts
