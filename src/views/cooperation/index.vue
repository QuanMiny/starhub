<template>
  <div class="cooperationManage">
    <TopBlock title="合作管理">
      <template #tool>
        <el-input v-model="searchValue" placeholder="">
          <template #prefix> <i class="iconfont icon-sousuo"></i> </template>
        </el-input>
      </template>
    </TopBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import TopBlock from "@/components/TopBlock/index.vue"
const searchValue = ref("")
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
