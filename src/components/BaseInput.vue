<template>
  <input :type="type" :value="value" @input="updateValue" :placeholder="placeholder">
</template>

<script setup>
const props = defineProps(['type', 'value', 'placeholder'])

const emit = defineEmits(['update:value'])

const updateValue = (event) => {
  emit('update:value', event.target.value)
}
</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/linkMixin";
  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid lightgray;
    @include link;

  }
</style>