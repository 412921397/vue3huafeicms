import { defineStore } from 'pinia'

import { userMenu } from '@/components/nav-menu/menu'
import {
  getPageListData,
  createListData,
  updateListData,
  removeListData,
  getBrand
} from '@/service/main/category/category'
import { DepartmentState } from './type'

export const useDepartmentStore = defineStore('department', {
  state: (): DepartmentState => ({
    usermenus: userMenu,
    categoryList: {},
    brandList: [],
    categoryTypeList: []
  }),
  getters: {},
  actions: {
    // 获取部门列表
    async getPageListAction(
      name: string,
      queryInfo: { [key: string]: any } = {}
    ) {
      const res = await getPageListData(name, queryInfo)
      this.categoryList = res?.data ?? {}
    },
    // 创建商品类别
    async creteCategoryAction(name: string, data: { [key: string]: any }) {
      await createListData(name, data)
      this.getPageListAction(name)
    },
    // 更新商品类别
    async updateCategoryAction(
      name: string,
      id: number,
      data: { [key: string]: any }
    ) {
      await updateListData(name, id, data)
      this.getPageListAction(name)
    },
    // 删除商品类别
    async removeCategoryAction(name: string, id: number) {
      await removeListData(name, id)
      this.getPageListAction(name)
    },
    // 查询品牌
    async getBrandAction(name: string) {
      const res = await getBrand(name)
      const brandArr =
        res?.data?.map((item: any) => ({ id: item.brand, name: item.brand })) ??
        []
      const typeListArr =
        res?.data?.map((item: any) => ({ id: item.name, name: item.name })) ??
        []
      this.brandList =
        brandArr?.filter(
          (iten: any, index: number) =>
            brandArr.findIndex((obj: any) => obj.id === iten.id) === index
        ) ?? []
      this.categoryTypeList =
        typeListArr?.filter(
          (iten: any, index: number) =>
            typeListArr.findIndex((obj: any) => obj.id === iten.id) === index
        ) ?? []
    }
  }
})
