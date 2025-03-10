import hyRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(
  name: string,
  queryInfo?: { [key: string]: any }
) {
  return hyRequest.get<IDataType>({
    url: `/category/${name}/list`,
    params: queryInfo
  })
}

export function createListData(name: string, data: { [key: string]: any }) {
  return hyRequest.post<IDataType>({
    url: `/category/${name}/create`,
    data
  })
}

export function updateListData(
  name: string,
  id: number,
  data: { [key: string]: any }
) {
  return hyRequest.patch<IDataType>({
    url: `/category/${name}/${id}`,
    data
  })
}

export function removeListData(name: string, id: number) {
  return hyRequest.delete<IDataType>({
    url: `/category/${name}/${id}`
  })
}

// 品牌
export function getBrand(name: string) {
  return hyRequest.get<IDataType>({
    url: `/category/${name}/brand`
  })
}
