<template>
  <el-button class="logout-btn" type="primary" @click="logout"> 退出</el-button>
</template>

<script setup lang="ts">
import router from '@/routers'

const logout = () => {
  router.replace('/login')
  // ElMessageBox.confirm("您是否确认退出登录?", "温馨提醒", {
  //   confirmButtonText: "确认",
  //   cancelButtonText: "取消",
  //   type: "warning"
  // }).then(() => {
  //   userStore.setToken("")
  //   router.replace(LOGIN_URL)
  //   ElMessage.success("退出登录成功！")
  // })
}
</script>

<style scoped lang="scss">
.logout-btn {
  margin-left: 16px;
}
</style>
