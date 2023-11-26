<template>
  <router-link class="link"  :to="link">
    <span>
      <slot/>
    </span>
  </router-link>
</template>

<script setup>
const props = defineProps(['link', 'active'])
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/linkMixin";
  .link {
    text-decoration: none;
    display: block;
    padding: .8rem 1.2rem;
    border-radius: 10px;
    span {
      color: rgba(28, 102, 211, 0.52);
      @include link;
    }
  }
  .active {
    background-color: rgba(28, 102, 211, 0.52);
    span {
      color: white;
    }
  }
</style>