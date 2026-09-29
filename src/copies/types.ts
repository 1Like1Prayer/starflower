/**
 * Every language must provide the same keys as the English source. Extra keys are allowed
 * because languages with more plural forms (Russian, Hebrew) add `_few`, `_many`, `_two`.
 */
export type Translation<T> = {
  [K in keyof T]: T[K] extends string ? string : Translation<T[K]>
} & { [extraKey: string]: unknown }
