/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * 声明函数类型
 */
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
declare module '*.json'
declare let $filters: any
