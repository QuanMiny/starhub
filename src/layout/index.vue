<template>
  <el-container class="layout">
    <!-- 头部 -->
    <el-header class="header">
      <ToolBarLeft />
      <ToolBarRight />
    </el-header>
    <el-container class="content">
      <el-aside class="aside">
        <el-scrollbar class="sidebar">
          <Menu :active-menu="activeMenu" :menu-list="menuList" />
        </el-scrollbar>
      </el-aside>
      <el-main class="main">
        <router-view v-slot="{ Component }">
          <component :is="Component"></component>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/stores/modules/global";
import ToolBarLeft from "./cpns/Header/ToolBarLeft.vue";
import ToolBarRight from "./cpns/Header/ToolBarRight.vue";
import Menu from "./cpns/Menu/Menu.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeMenu = computed(() => route.path);

const globalStore = useGlobalStore();

const menuList = computed(() => globalStore.menuList);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
