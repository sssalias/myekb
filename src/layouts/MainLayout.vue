<template>
  <div class="layout">
    <BaseSide/>
    <BaseHeader/>
    <div class="content">
      <div class="wrapper">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>

import BaseSide from "@/components/BaseSide.vue";
import BaseHeader from "@/components/BaseHeader.vue";
</script>

<style lang="scss" scoped>
  .content {
    width: calc(100% - 13%);
    margin: 100px 13%;

    .wrapper {
      width: 80%;
      padding: 2rem 0;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>