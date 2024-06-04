<template>
  <div class="tool-bar-lf">
    <div class="logo">
      <img class="logo-img" src="@/assets/images/logo.png" alt="logo" />
      <span class="logo-text">Starhub</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.tool-bar-lf {
  display: flex;
  align-items: center;
  .logo {
    box-sizing: border-box;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: left;
    .logo-img {
      width: 28px;
      margin-right: 6px;
      object-fit: contain;
    }
    .logo-text {
      font-size: 22px;
      font-weight: 600;
      white-space: nowrap;
    }
  }
}
</style>
