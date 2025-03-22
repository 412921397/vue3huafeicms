import { searchFormConfig } from './search'
import { modalConfig } from './modal.config'

export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'storeName', label: '店铺名', minWidth: '80' },
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'picture', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'count', label: '商品数量(袋/瓶/箱)', minWidth: '100' },
    { prop: 'weight', label: '商品重量（KG）', minWidth: '100' },
    { prop: 'brand', label: '品牌', minWidth: '100' },
    { prop: 'categoryType', label: '商品种类', minWidth: '100' },
    { prop: 'nameDesc', label: '商品描述', minWidth: '100' },
    // { prop: 'oldPrice', label: '原价格', minWidth: '100' },
    { prop: 'newPrice', label: '出售价格', minWidth: '100' },
    { prop: 'status', label: '商品状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createT',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateT',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: false
}

export { searchFormConfig, modalConfig }
