<template>
  <div class="form">
    <slot/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
  }
</style>