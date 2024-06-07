<template>
  <template v-for="menu in menuList" :key="menu.path">
    <div :class="['link', menu.path === activeMenu ? 'active' : '']" @click="handleClickMenu(menu)">
      <i class="menu-icon iconfont" :class="'icon-' + menu.meta.icon"></i>
      <span class="menu-text sle">{{ menu.meta.title }}</span>
    </div>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

defineProps<{ activeMenu: string; menuList: Menu.MenuOptions[] }>();

const router = useRouter();
const handleClickMenu = (menu: Menu.MenuOptions) => {
  router.push(menu.path);
};
</script>

<style scoped lang="scss">
.link {
  margin-bottom: 10px;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: baseline;
  font-size: 14px;
  .menu-icon {
    margin-right: 10px;
  }
  .menu-text {
    display: inline-block;
    width: 150px;
  }
}

.link.active,
.link.active:hover {
  background-color: var(--el-color-primary);
  color: #fff;
}

.link:hover {
  background-color: #fff;
}
</style>
