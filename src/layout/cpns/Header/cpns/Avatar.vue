<template>
  <el-dropdown trigger="click">
    <span class="avatar">
      <img
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <span><i class="iconfont icon-user"></i>个人信息</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span><i class="iconfont icon-xiugai"></i>修改密码</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
// import { LOGIN_URL } from "@/config"
// import { useUserStore } from "@/stores/modules/user"
// import { ElMessageBox, ElMessage } from "element-plus"
// const userStore = useUserStore()
</script>

<style scoped lang="scss">
.avatar {
  width: 40px;
  height: 40px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
