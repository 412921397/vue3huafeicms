import { searchFormConfig } from './search'
import { modalConfig } from './modal.config'

export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品类别', minWidth: '80' },
    { prop: 'commodityDesc', label: '类别描述', minWidth: '100' },
    { prop: 'brand', label: '品牌', minWidth: '100' },
    {
      prop: 'createT',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: false
}

export { searchFormConfig, modalConfig }
