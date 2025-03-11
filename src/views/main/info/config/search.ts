import { storeToRefs } from 'pinia'
import { useDepartmentStore } from '@/store'

import { IForm } from '@/base-ui/form'

const departMentStore = useDepartmentStore()
await departMentStore.getBrandAction('type')
const { brandList } = storeToRefs(departMentStore)

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品信息',
      placeholder: '请输入商品信息'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品信息状态',
      placeholder: '请选择商品信息状态',
      options: [
        { name: '出库', id: 1 },
        { name: '库存', id: 0 }
      ]
    },
    {
      field: 'brand',
      type: 'select',
      label: '品牌',
      options: brandList.value
    }
  ]
}
