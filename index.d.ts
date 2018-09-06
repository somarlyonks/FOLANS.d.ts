declare type F<R> = (...args: any[]) => R

declare type F0<R> = () => R

declare type F1<T, R> = (t: T) => R

declare type F2<T1, T2, R> = (t1: T1, t2: T2) => R

declare type F3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R


declare type O = {}


declare type L<T = any> = T[]


declare type A = any


declare type N = number


declare type S = string
