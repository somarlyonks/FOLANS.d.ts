# FOLANS.d.ts

Simplified ts type declarations.

## Usage

```bash
yarn add -D folans.d.ts
```

It's more like a coding style instead of a dependency.

In root of your makeup types(like `src/types` or `src/typing` or `src/@types` etc) add `folans.d.ts` and edit it like this

```typescript
/// <reference types='folans.d.ts' />

/**
 * @example
 *   const xs = ['x', 'y'] as const
 *   const x: C<typeof xs> = 'z'
 */
type C<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer Consts> ? Consts : never
```

Yes, it's recommended to write your own shorthand abstract types in the folder.

## Another superb example with `compose`

```typescript
/// <reference types='folans.d.ts' />

interface IF {
  callees: string[] // composed
}

declare type FI<R=A> = ((...args: any[]) => R) & IF
declare type FI0<R> = (() => R) & IF
declare type FI1<T, R> = ((t: T) => R) & IF
declare type FI2<T1, T2, R> = ((t1: T1, t2: T2) => R) & IF
declare type FI3<T1, T2, T3, R> = ((t1: T1, t2: T2, t3: T3) => R) & IF
```

and define the function somewhere

```typescript
export function compose <R1, R>                 (fn2: F1<R1, R>, fn1: F0<R1>): FI0<R>
export function compose <T1, R1, R>             (fn2: F1<R1, R>, fn1: F1<T1, R1>): FI1<T1, R>
export function compose <T1, T2, R1, R>         (fn2: F1<R1, R>, fn1: F2<T1, T2, R1>): FI2<T1, T2, R>
export function compose <T1, T2, T3, R1, R>     (fn2: F1<R1, R>, fn1: F3<T1, T2, T3, R1>): FI3<T1, T2, T3, R>
export function compose <T1, R1, R2, R>         (fn3: F1<R2, R>, fn2: F1<R1, R2>, fn1: F1<T1, R1>): FI1<T1, R>
export function compose <T1, T2, R1, R2, R>     (fn3: F1<R2, R>, fn2: F1<R1, R2>, fn1: F2<T1, T2, R1>): FI2<T1, T2, R>
export function compose <T1, T2, T3, R2, R1, R> (fn3: F1<R2, R>, fn2: F1<R1, R2>, fn1: F3<T1, T2, T3, R1>): FI3<T1, T2, T3, R>
export function compose <R = A> (...fns: F[]): FI<R>
export function compose <R = A> (...fns: F[]) {
  const composed = fns.reduce((c, fn) => (...args: any[]) => c(fn(...args))) as FI<R>
  composed.callees = fns.map(fn => fn.name || 'anonymous').reverse()
  Object.defineProperty(composed, 'name', {value: `composed(${composed.callees.join(',')})`})

  return composed
}
```

## Q&A

- Who is this for ?

  Coz `string`/`number` etc. may look more "semantic", I'd say, just for me ? Personally, I'd prefer primitive types lookings like non-native types'. `L<L<T>>` makes much more sense to me than `T[][]`.

- Where is the `F4` `F5` `F6` ?

  No, I think it's a bad practice. Functions with too many arguments are designed by fools for other fools.

- Whers is the `boolean` ?

  I recommend you use assertion style signatures like `sig is Signature`. Or you may add a `TF` stands for `ture/false`.
  But it has two characters and `B` is just too "not semantic" even to me, so, feel good to use `boolean`.

- The only character types might be confusing in generic types ?

  Hell yeah. That's why I told you this is a coding style. You should define the type generics with specific names instead of single character in most of your business codes. That's the better practice I'd recommend. Take this as an example:

  ```typescript
  interface IAction {
    type: S
  }
  type IReducer <TState, TAction extends IAction> = F2<TState, TAction, TState>

  interface IImplAction {
    type: S,
    payload: N
  }
  type IImplState = N

  const reducer: IReducer<IImplState, IImplAction> = (state, action) => {
    if (action.type === 'INCREMENT') return state + action.payload
    if (action.type === 'DECREMENT') return state - action.payload
    return state
  }
  ```

  Notice that interface are defined with leading 'I' and generics are defined with leading 'T' and all of them are full named.

  ```typescript
  type IReducer <TState, TAction extends IAction> = F2<TState, TAction, TState>
  ```

  is much more readable and semantic than

  ```typescript
  type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S
  ```

  referenced from `@types/redux` as far as I'm concerned, as it imply the truth of the type is just a transform of a generic function.

## LICENSE

[MIT](./LICENSE)
