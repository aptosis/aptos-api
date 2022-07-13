# Aptos TypeScript API Wrapper

Aptos API wrapper generated from the Swagger spec.

## Releases

To release a new version of this repo, run:

```
gh workflow run release.yml -f version=<version>
```

where `<version>` is one of `patch`, `major`, `minor`, or a specific version. This internally uses the [Yarn version](https://github.com/yarnpkg/berry/tree/master/packages/plugin-version) plugin.

## Generating

To update this repo to the latest devnet release, run:

```
./generate-api.sh
```

in this directory.

## License

Apache-2.0
