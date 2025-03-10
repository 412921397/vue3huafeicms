<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <Fold />
      </template>
      <template v-else>
        <Expand />
      </template>
    </el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <!-- <user-info /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
// import UserInfo from './user-info.vue'
import { storeToRefs } from 'pinia'
import HyBreadcrumb from '@/base-ui/breadcrumb'

import { useDepartmentStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    // UserInfo,
    HyBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const { usermenus } = storeToRefs(useDepartmentStore())

    // 面包屑的数据: [{name: , path: }]
    // const store = useStore()
    const breadcrumbs = computed(() => {
      // const userMenus = userMenu
      const route = useRoute()
      const currentPath = computed(() => route?.path ?? '/main/category')
      return pathMapBreadcrumbs(usermenus?.value ?? [], currentPath.value)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    width: 20px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
