<template>
  <div class="page-modal">
    <el-dialog
      :title="title"
      v-model="dialogVisible"
      width="30%"
      center
      destroy-on-close
    >
      <hy-form ref="hyformRef" v-bind="modalConfig" v-model="formData">
        <template #pictrue>
          <el-upload
            class="avatar-uploader"
            name="pictrue"
            method="get"
            :limit="1"
            :action="`http://localhost:8000/category/info/avatar/${defaultInfo.id}`"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </template>
      </hy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

import type { UploadProps } from 'element-plus'

import { useDepartmentStore } from '@/store'
import { currentDate, dateFormat } from '@/utils/date-format'

import HyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    title: {
      type: String
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    const hyformRef = ref<InstanceType<typeof HyForm>>()
    const departmentStore = useDepartmentStore()

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    // 点击确定按钮的逻辑
    const handleConfirmClick = async () => {
      if (hyformRef.value) {
        try {
          // 调用 hy-form 的 validate 方法
          await hyformRef.value.validate()
          if (Object.keys(props.defaultInfo).length) {
            // 编辑
            departmentStore.updateCategoryAction(
              props.pageName || '',
              formData.value.id || props.defaultInfo.id,
              {
                ...formData.value,
                ...props.otherInfo,
                updateT: dateFormat(formData.value.updateT)
              }
            )
          } else {
            // 新建
            departmentStore.creteCategoryAction(props.pageName || '', {
              ...formData.value,
              ...props.otherInfo,
              createT: currentDate()
            })
          }
          dialogVisible.value = false
        } catch (error) {
          console.error('表单验证失败', error)
        }
      }
    }

    const imageUrl = ref('')

    const handleAvatarSuccess: UploadProps['onSuccess'] = (
      response,
      uploadFile
    ) => {
      imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    }

    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
      if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
      }
      return true
    }

    return {
      hyformRef,
      dialogVisible,
      formData,
      imageUrl,
      handleAvatarSuccess,
      beforeAvatarUpload,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
