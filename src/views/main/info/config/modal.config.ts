import { storeToRefs } from 'pinia'
import { useDepartmentStore } from '@/store'

import { IForm } from '@/base-ui/form'

const departMentStore = useDepartmentStore()
await departMentStore.getBrandAction('type')
const { brandList } = storeToRefs(departMentStore)

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品信息',
      placeholder: '请输入商品信息',
      rules: [
        {
          required: true,
          message: '请输入商品信息',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'count',
      type: 'input',
      label: '商品数量(袋/瓶/箱)',
      placeholder: '请输入商品数量',
      rules: [
        {
          required: true,
          message: '请输入商品数量',
          trigger: 'change'
        }
      ],
      otherOptions: {
        type: 'number'
      }
    },
    {
      field: 'weight',
      type: 'input',
      label: '商品重量（KG）',
      placeholder: '请输入商品重量',
      rules: [
        {
          required: true,
          message: '请输入商品重量',
          trigger: 'change'
        }
      ],
      otherOptions: {
        type: 'number'
      }
    },
    {
      field: 'brand',
      type: 'select',
      label: '品牌',
      options: brandList.value,
      placeholder: '请选择品牌',
      rules: [
        {
          required: true,
          message: '请选择品牌',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'nameDesc',
      type: 'input',
      label: '商品描述',
      placeholder: '请输入商品描述',
      otherOptions: {
        type: 'textarea',
        autosize: { minRows: 3, maxRows: 6 },
        maxlength: '200',
        showWordLimit: true
      },
      rules: [
        {
          required: true,
          message: '请输入商品描述',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '出售价格',
      placeholder: '请输入出售价格',
      rules: [
        {
          required: true,
          message: '请输入出售价格',
          trigger: 'change'
        }
      ],
      otherOptions: {
        type: 'number'
      }
    },
    {
      field: 'picture',
      type: 'input',
      label: '图片地址',
      placeholder: '请输入图片地址'
      // slotName: 'pictrue'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { id: 0, name: '库存' },
        { id: 1, name: '出库' }
      ],
      rules: [
        {
          required: true,
          message: '请选择商品状态',
          trigger: 'change'
        }
      ]
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {},
  labelWidth: '160px'
}
