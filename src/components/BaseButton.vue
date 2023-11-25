<template>
  <button>
    <slot/>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import "@/assets/mixins/linkMixin";
  button {
    background: none;
    border-radius: 10px;
    border: 1px solid #D3AE78;
    color: #D3AE78;
    padding: .8rem 1.2rem;
    transition: .4s;
    cursor: pointer;
    @include link;
    &:hover {
      background-color: #D3AE78;
      color: white;
      transition: .4s;
    }
    &:focus {
      animation: click .4s;
      @keyframes click {
        0% {
          box-shadow: 0 0 0 0;
        }
        50% {
          box-shadow: 0 0 0 2px rgba(211, 174, 120, .3),
          0 0 0 4px rgba(211, 174, 120, .6);
        }
        100% {
          box-shadow: 0 0 0 0;
        }
      }
    }
  }
</style>