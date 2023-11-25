<template>
  <router-link class="link" :to="link">
    <span>
      <slot/>
    </span>
  </router-link>
</template>

<script setup>
const props = defineProps(['link'])
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/linkMixin";
  .link {
    text-decoration: none;
    display: block;
    span {
      color: rgba(28, 102, 211, 0.52);
      @include link;
    }
  }
</style>