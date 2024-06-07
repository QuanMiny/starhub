<template>
  <div class="tool-bar-rt">
    <FullScreen />
    <div class="username">admin</div>
    <Avatar />
    <Logout />
  </div>
</template>

<script setup lang="ts">
// import { computed } from "vue"
// import { useUserStore } from "@/stores/modules/user"
import FullScreen from "./cpns/Fullscreen.vue";
import Avatar from "./cpns/Avatar.vue";
import Logout from "./cpns/Logout.vue";

// const userStore = useUserStore()
// const username = computed(() => userStore.userInfo.username)
</script>

<style scoped lang="scss">
.tool-bar-rt {
  display: flex;
  align-items: center;
  justify-content: center;
  .username {
    margin: 0 20px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>
