<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="type"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
    </page-content>
    <page-modal
      ref="pageModalRef"
      pageName="type"
      :title="defaultInfo.id ? '编辑商品类别' : '新增商品类别'"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :modalConfig="modalConfig"
    >
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'
import { searchFormConfig, contentTableConfig, modalConfig } from './config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

const otherInfo = ref({})
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  undefined,
  undefined
)
</script>

<style scoped></style>
