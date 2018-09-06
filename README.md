# FOLANS.d.ts

Simplified ts type declarations.

## Usage

Add dependencies

```bash
npm i folans.d.ts --save-dev
```

or with yarn

```bash
yarn add -D folans.d.ts
```

And edit `tsc` compiler configs, add `folans.d.ts` to `types` in `tsconfig.json`.

```json
{
    "compilerOptions": {
        "types": [
            "folans.d.ts"
        ]
    }
}
```

## Q&A

- Who is this for ?

  Coz `string`/`number` etc. may look more "semantic", I'd say, just for me ?

- Where is the `F4` `F5` `F6` ?

  No, I think it's a bad practice.

- Whers is the `boolean` ?

  I recommend you use assertion style signatures like `sig is Signature`. Or you may add a `TF` stands for `ture/false`.
  But it has two characters and `B` is just too "not semantic" even to me, so, feel good to use `boolean`.

## LICENSE

[MIT](./LICENSE)
