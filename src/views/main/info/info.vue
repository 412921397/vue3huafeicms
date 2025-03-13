<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="info"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.picture"
          :preview-src-list="[scope.row.picture]"
        >
        </el-image>
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      pageName="info"
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
import { useDepartmentStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

const otherInfo = ref({})

const departMentStore = useDepartmentStore()
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  undefined,
  undefined
)
departMentStore.getBrandAction('type')
</script>

<style scoped></style>
