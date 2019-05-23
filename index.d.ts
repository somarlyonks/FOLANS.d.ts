declare type F<R=A> = (...args: L<A>) => R

declare type F0<R=A> = () => R

declare type F1<T, R=A> = (t: T) => R

declare type F2<T1, T2, R=A> = (t1: T1, t2: T2) => R

declare type F3<T1, T2, T3, R=A> = (t1: T1, t2: T2, t3: T3) => R


declare type O = {}


declare type L<T=A> = T[]


declare type A = any


declare type N = number


declare type S = string
