<template>
  <h1>
    <slot/>
  </h1>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/mixins/titleMixin";
h1 {
  @include title;
}
</style>