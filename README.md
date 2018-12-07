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

## Example

```typescript
function flatMap <T, R=any> (f: <T>(t: T[]) => R[], l: T[][]) {
    return flat(l.map(i => f(i)))
}
```

VS

```typescript
function flatMap <T, R=A> (f: F1<L<T>, L<R>>, l: L<L<T>>) {
    return flat(l.map(i => f(i)))
}
```

And

```typescript
function flatDeep <T> (l: (T | (T | T[])[])[]): T[] {
    return l.reduce((r: L<T>, x) => r.concat(Array.isArray(x) ? flatDeep(x) : x), [])
}
```

VS

```typescript
function flatDeep <T> (l: L<T | L<T | L<T>>>): L<T> {
    return l.reduce((r: L<T>, x) => r.concat(Array.isArray(x) ? flatDeep(x) : x), [])
}
```

It's obvious that the only thing different is signature style.

## Q&A

- Who is this for ?

  Coz `string`/`number` etc. may look more "semantic", I'd say, just for me ? Personally, I'd prefer primitive types lookings like non-native types'. `L<L<T>>` makes much more sense to me than `T[][]`.

- Where is the `F4` `F5` `F6` ?

  No, I think it's a bad practice. Functions with too many arguments are designed by fools for other fools.

- Whers is the `boolean` ?

  I recommend you use assertion style signatures like `sig is Signature`. Or you may add a `TF` stands for `ture/false`.
  But it has two characters and `B` is just too "not semantic" even to me, so, feel good to use `boolean`.

## LICENSE

[MIT](./LICENSE)
