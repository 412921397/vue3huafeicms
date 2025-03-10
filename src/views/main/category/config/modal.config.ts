import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品类别',
      placeholder: '请输入商品类别',
      rules: [
        {
          required: true,
          message: '请输入商品类别',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'commodityDesc',
      type: 'input',
      label: '类别描述',
      otherOptions: {
        type: 'textarea',
        autosize: { minRows: 3, maxRows: 6 },
        maxlength: '200',
        showWordLimit: true
      },
      placeholder: '请输入类别描述',
      rules: [
        {
          required: true,
          message: '请输入类别描述',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'brand',
      type: 'input',
      label: '品牌',
      placeholder: '请输入品牌',
      rules: [
        {
          required: true,
          message: '请输入品牌',
          trigger: 'change'
        }
      ]
    }
    // {
    //   field: 'picture',
    //   type: 'input',
    //   label: '图片地址',
    //   placeholder: '请输入图片地址'
    // },
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
