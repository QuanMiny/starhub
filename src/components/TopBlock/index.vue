<template>
  <div class="top-block">
    <div class="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="tool">
      <slot name="tool" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.top-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .title {
    font-size: 20px;
  }
}
</style>
