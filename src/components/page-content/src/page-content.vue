<template>
  <div class="page-content">
    <hy-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="default" @click="handleNewClick">
          {{ btnName }}
        </el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="small"
          :type="!scope.row.status ? 'success' : 'danger'"
        >
          {{ scope.row.status ? '出库' : '库存' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createT) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button type="primary" link @click="handleEditClick(scope.row)">
            编辑
          </el-button>
          <el-button link type="danger" @click="handleDeleteClick(scope.row)">
            删除
          </el-button>
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope?.row"></slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

import { useDepartmentStore } from '@/store'

import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
      default: () => ({ propList: [] })
    },
    pageName: {
      type: String,
      required: true
    },
    btnName: {
      type: String,
      default: '新增商品'
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const departmentStore = useDepartmentStore()
    const { categoryList } = storeToRefs(departmentStore)

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getPageData())

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      departmentStore.getPageListAction(props.pageName, {
        ...queryInfo,
        offset: pageInfo.value.currentPage,
        pageSize: pageInfo.value.pageSize
      })
    }
    getPageData()

    // 3.从store中获取数据
    const dataList = computed(() => categoryList?.value?.list ?? [])
    const dataCount = computed(() => categoryList?.value?.total ?? 0)

    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        return true
      }
    )

    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      departmentStore.removeCategoryAction(props.pageName, item.id)
    }

    const handleNewClick = () => {
      emit('newBtnClick')
    }

    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      pageInfo,
      dataList,
      dataCount,
      otherPropSlots,
      getPageData,
      handleNewClick,
      handleEditClick,
      handleDeleteClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
